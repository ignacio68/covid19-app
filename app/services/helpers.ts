import { Place } from './types'

export const filterPlaceWithPlaceCode = (dataPlaces, codePlace: string) => dataPlaces.filter(place => place.code === codePlace)
