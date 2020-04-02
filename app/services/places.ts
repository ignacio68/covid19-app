// import { countriesList } from '@/repository'
// import { comunidadesAutonomas } from  '@/repository'
import { Place } from './types'

const filterPlaceWithPlaceCode = (dataPlaces: Place[], codePlace: string) => dataPlaces.filter(place => place.code === codePlace)

export const getDataPlace = (dataPlaces: Place[], codePlace: string):Place => {
  // const filterCountry = comunidadesAutonomas.filter(country => country.code === codePlace)
  const filterCountry = filterPlaceWithPlaceCode(dataPlaces, codePlace)
  const placeData: Place = {
    lat: filterCountry[0].lat,
    lng: filterCountry[0].lng,
    title: filterCountry[0].name
    // onTap = placeData => console.log(`El pais elegido es: ${placeData.name}`)
  }
  
  return placeData
}
