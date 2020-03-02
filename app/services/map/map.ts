import { getCountry } from '@/services/countries'
import { getCovid19CountryData } from '@/services/covid19'
import { countriesList } from '@/repository'
import { IMarker } from './interfaces'

function setMarker(countryCode: string){
  let countryData = getCountry(countryCode)
  let covid19CountryData = getCovid19CountryData(countryCode)
  // countryData = countryData.concat(covid19CountryData)
  let newcountryData = countryData.concat(covid19CountryData) // TFIXME: repare error!!
  return countryData
}

export function getMarkers() {
  const countriesMarkers = countriesList.forEach(code2l => setMarker("code2l"))
  return countriesMarkers
}
