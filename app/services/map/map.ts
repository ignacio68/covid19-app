import { getCountry } from '@/services/countries'
import { getCovid19CountryData } from '@/services/covid19'
import { countriesList } from '@/repository'
import { marker } from './interfaces'

const allCountryMarkers: Array<any> = []

function setMarker(countryCode: string){
  const countryData = getCountry(countryCode)
  // const covid19CountryData = getCovid19CountryData(countryCode)
  // const marker = { ...countryData, ...covid19CountryData }
  const marker = countryData
  console.log(`marker: + ${JSON.stringify(marker)}`)
  return marker
}

function setAllMarkers(countryCode) {
  let marker = setMarker(countryCode)
  allCountryMarkers.push(marker)
}

export function getMarkers() {
  const countriesMarkers = countriesList.forEach(item => setAllMarkers(item["code"]))
  console.log(`marker: + ${JSON.stringify(countriesMarkers)}`)
  return countriesMarkers
}
