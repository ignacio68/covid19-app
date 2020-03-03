import { countriesList } from '@/repository'
import { country } from './interfaces'

export function getCountry(countryCode: string){
  const getCountryData = countriesList.filter(countryListed => countryListed.code === countryCode)
  console.log(JSON.stringify(getCountryData))
  const countryData: country = {
    // code: getCountryData["code"],
    // name: getCountryData["name"],
    lat: getCountryData["latitude"],
    lng: getCountryData["longitude"]
  }
  console.log(JSON.stringify(countryData))
  return countryData
}
