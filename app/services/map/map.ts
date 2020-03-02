import { getCountry } from '@/services/countries'
import { getCovid19CountryData } from '@/services/covid19'
import { countriesList } from '@/repository'
import { IMarker } from './interfaces'

function setMarker(countryCode: string){
  const countryData = getCountry(countryCode)
  const covid19CountryData = getCovid19CountryData(countryCode)
  // countryData = countryData.concat(covid19CountryData)
  const marker = { ...countryData, ...covid19CountryData }
  return marker
}

export function getMarkers() {
  const countriesMarkers = countriesList.forEach(code2l => setMarker("code2l"))
  return countriesMarkers
}
