import { countriesList } from '@/repository'
import { comunidadesAutonomas } from  '@/repository'
import { Country } from './interfaces'

export function getCountry(siteCode: string | undefined): Country {
  const filterCountry = comunidadesAutonomas.filter(country => country.code === siteCode)
  const countryData: Country = {}
  countryData.lat = filterCountry[0].lat,
  countryData.lng = filterCountry[0].lng,
  countryData.title = filterCountry[0].name
  // countryData.onTap = countryData => console.log(`El pais elegido es: ${countryData.name}`)

  return countryData
}


// TODO: --- FUNCTIONAL PROGRAMMING ---
// const filterCountry = siteCode => countriesList.filter(country => country.code === siteCode)

// export const country = siteCode => {
//   const countryData: Country = {}
//   countryData.lat = filterCountry[0].lat,
//   countryData.lng = filterCountry[0].lng,
//   countryData.title = filterCountry[0].name
// }
