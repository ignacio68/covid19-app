import { getCountry } from '@/services/countries'
import { getCovid19CountryData } from '@/services/covid19'
import { countriesList } from '@/repository'
import { marker } from './interfaces'

const allCountriesMarkers: Array<any> = []

function setMarker(countryCode: string) {
  console.log('setMarker')
  const countryData = getCountry(countryCode)
  const covid19CountryData = getCovid19CountryData(countryCode)
  // const marker = { ...countryData, ...covid19CountryData }
  const marker = countryData
  allCountriesMarkers.push(marker)
  // console.log(`marker: + ${JSON.stringify(marker)}`)
}

export function getMarkers() {
  countriesList.forEach(item => setMarker(item["code"]))
  return allCountriesMarkers
}
