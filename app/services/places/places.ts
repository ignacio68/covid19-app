import { countriesList } from '@/repository'
import { comunidadesAutonomas } from  '@/repository'
import { Place } from './interfaces'

export function getPlace(siteCode?: string): Place {
  const filterCountry = comunidadesAutonomas.filter(country => country.code === siteCode)
  const placeData: Place = {}
  placeData.lat = filterCountry[0].lat,
  placeData.lng = filterCountry[0].lng,
  placeData.title = filterCountry[0].name
  // placeData.onTap = placeData => console.log(`El pais elegido es: ${placeData.name}`)

  return placeData
}


// TODO: --- FUNCTIONAL PROGRAMMING ---
// const filterCountry = siteCode => countriesList.filter(country => country.code === siteCode)

// export const country = siteCode => {
//   const placeData: Country = {}
//   placeData.lat = filterCountry[0].lat,
//   placeData.lng = filterCountry[0].lng,
//   placeData.title = filterCountry[0].name
// }
