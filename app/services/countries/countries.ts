import { countriesList } from '@/repository'
import { country } from './interfaces'

export function getCountry(countryCode: string) {
  const filterCountry= countriesList.filter(country => country.code === countryCode)
  // console.log(`filterCountry: ${JSON.stringify(filterCountry)}`)
  const countryData: country = {}
  countryData.lat = filterCountry[0].lat,
  countryData.lng = filterCountry[0].lng,
  countryData.title = filterCountry[0].name
  // countryData.onTap = countryData => console.log(`El pais elegido es: ${countryData.name}`)

  return countryData
}
