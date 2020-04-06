import { filterPlaceWithPlaceCode } from './helpers'
import { Place } from './types'

export const getDataPlace = (dataPlaces: Place[], codePlace: string):Place => {
  const filterCountry = filterPlaceWithPlaceCode(dataPlaces, codePlace)
  const placeData: Place = {
    lat: filterCountry[0].lat,
    lng: filterCountry[0].lng,
    title: filterCountry[0].name
  }
  return placeData
}
