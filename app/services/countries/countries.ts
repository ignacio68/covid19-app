import { countriesList } from '@/repository'
import { Country } from './interfaces'

export function getCountry(countryCode: string | undefined): Country {
  const filterCountry = countriesList.filter(country => country.code === countryCode)
  const countryData: Country = {}
  countryData.lat = filterCountry[0].lat,
  countryData.lng = filterCountry[0].lng,
  countryData.title = filterCountry[0].name
  // countryData.onTap = countryData => console.log(`El pais elegido es: ${countryData.name}`)

  return countryData
}
