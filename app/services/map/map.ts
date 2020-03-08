import { getCountry } from '@/services/countries'
import { getCovid19CountryData } from '@/services/covid19'
import { countriesList } from '@/repository'
import { Marker } from './interfaces'
import { MapboxMarker } from 'nativescript-mapbox'

const allCountriesMarkers: Array<any> = []

function setMarker(countryCode: string) {
  console.log('setMarker')
  let marker: Marker = {}
  // const countryData = getCountry(countryCode)
  getCovid19CountryData(countryCode)
    .then(countryCovid19Data => {
      marker = { ...marker, ...countryCovid19Data }
      const countryData = getCountry(countryCovid19Data[0].code)
    })
    .then(country => {
      const countryData = getCountry(country[0].code)
      marker = { ...marker, ...countryData }
      console.log(`marker: + ${JSON.stringify(marker)}`)
      allCountriesMarkers.push(marker)
    })
    .catch ( error => console.log(`setMarker error: ${error}`))
}

export function getMarkers() {
  countriesList.forEach(item => setMarker(item["code"]))
  return allCountriesMarkers
}
