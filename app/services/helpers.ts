import { Place } from './types'

export const filterPlaceWithPlaceCode = (dataPlaces: Place[], codePlace: string) => dataPlaces.filter(place => place.code === codePlace)
