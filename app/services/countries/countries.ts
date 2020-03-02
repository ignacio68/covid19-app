import { countriesList } from '@/repository'
import { ICountry } from './interfaces'

export function getCountry(countryCode: string){
  const getCountryData = countriesList.filter(countryListed => countryListed.code2l === countryCode)
  const countryData = {
    code: getCountryData["code2l"],
    name: getCountryData["name"],
    lat: getCountryData["latitude"],
    lng: getCountryData["longitude"],
  }
  return countryData
}
