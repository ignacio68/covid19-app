import { getCountry } from '@/services/countries'
import { getCovid19CountryData } from '@/services/covid19'
import { covid19CountriesDataList } from '@/repository'
import { Marker } from './interfaces'
import { MapboxMarker } from 'nativescript-mapbox'

let markers: Array<object> = []

async function setMarker(countryCode: string) {

  let marker: Marker = {}

  await getCovid19CountryData(countryCode)
    .then(covid19CountryData => {
      marker = { ...covid19CountryData }
      const countryData = getCountry(covid19CountryData.code)
      return countryData
    })
    .then(countryData => {
      marker = { ...marker, ...countryData }
      markers.push(marker)
      return markers
    })
    .catch ( error => console.log(`setMarker error: ${error.message}`))
}

export async function getMarkers() {

  for (let item of covid19CountriesDataList) {
     await setMarker(item['code'])
  }

  try {
    return markers
  } catch (error) {
    console.log(`getMarkers error: ${error.message}`)
  }
}
