import { getDataPlace } from './places'
import { getCovid19PlaceData } from './covid19'
import { Covid19Data, Place, Marker, setMarkerOptions } from './types'
import { MapboxMarker } from 'nativescript-mapbox'
import { compose } from '@/core'

// TODO: --- FUNCTIONAL PROGRAMMING ---
// const setMarker: Marker = (codePlace: string) => { const marker = {}}
// 

// const populateMarker = markerData => { markerData }
// const covid19DataPlace = codePlace => getCovid19PlaceData(codePlace)
// const placeData = codePlace => getDataPlace(codePlace)

// const getMarkers = (dataBase:[]) => {
//   for (let item of dataBase) {
//     compose(setMarker, placeData, covid19DataPlace)
//   }
// }

const setDataPlace = (dataPlaces: Place[], codePlace: string): Place => getDataPlace(dataPlaces, codePlace)
const setCovid19PlaceData = (covid19DataPlace: Covid19Data[], codePlace: string): Covid19Data =>  getCovid19PlaceData(covid19DataPlace, codePlace)

export const setMarker = (options: setMarkerOptions): Marker => {
  const dataPlace = setDataPlace(options.dataPlaces, options.codePlace)
  const covid19DataPlace = setCovid19PlaceData(options.covid19DataPlaces, options.codePlace)
  const marker: Marker = {...dataPlace, ...covid19DataPlace}
  return marker
}
