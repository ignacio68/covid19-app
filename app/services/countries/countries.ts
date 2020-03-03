import { countriesList } from '@/repository'
import { ICountry } from './interfaces'

export function getCountry(countryCode: string){
  const getCountryData = countriesList.filter(countryListed => countryListed.code === countryCode)
  const countryData: ICountry = {
    // code: getCountryData["code"],
    // name: getCountryData["name"],
    lat: getCountryData["latitude"],
    lng: getCountryData["longitude"],
  }
  return countryData
}
