import { getDataPlace } from './places'
import { getCovid19PlaceData } from './covid19'
import { Covid19Data, Place, Marker } from './types'
// import { covid19CountriesDataList } from '@/repository'
// import { covid19ComunidadesFake } from '@/repository'
// import { comunidadesAutonomas } from  '@/repository'
import { MapboxMarker } from 'nativescript-mapbox'
import { compose } from '@/core'

const markers: Marker[] = []
// let marker: Marker

// TODO: --- FUNCTIONAL PROGRAMMING ---
// const setMarker: Marker = (codePlace: string) => { const marker = {}}
// 

// const populateMarker = markerData => { markerData }
// const covid19DataPlace = codePlace => getCovid19PlaceData(codePlace)
// const placeData = codePlace => getDataPlace(codePlace)

// const getMarkers = (dataBase:[]) => {
//   for (let item of dataBase) {8
//     compose(setMarker, placeData, covid19DataPlace)
//   }
// }
const setDataPlace = (dataPlaces: Place[], codePlace: string): Place => getDataPlace(dataPlaces, codePlace)
const setCovid19PlaceData = (covid19DataPlace: Covid19Data[], codePlace: string): Covid19Data =>  getCovid19PlaceData(covid19DataPlace, codePlace)

export const setMarker = (dataPlaces: Place[], covid19DataPlaces: Covid19Data[], codePlace: string): Marker => {
  const dataPlace = setDataPlace(dataPlaces, codePlace)
  const covid19DataPlace = setCovid19PlaceData(covid19DataPlaces, codePlace)
  const marker = {...dataPlace, ...covid19DataPlace}
  return marker
}

// async function setMarker(codePlace: string) {
//   let marker: Marker = {}

//   await getCovid19PlaceData(codePlace)
//     .then(Covid19Data => {
//       marker = { ...Covid19Data }
//       const placeData = getDataPlace(dataPlaces, Covid19Data.code)
//       return placeData
//     })
//     .then(placeData => {
//       marker = { ...marker, ...placeData }
//       markers.push(marker)
//       return markers
//     })
//     .catch(error => console.log(`setMarker error: ${error.message}`))
// }

// export const setMarkers = (dataPlaces: Place[], covid19DataPlaces: Covid19Data[]) => {
//   const markers: Marker[] = []
//   for (let covid19DataPlace of covid19DataPlaces) {
//     const marker = setMarker(dataPlaces, covid19DataPlaces,  covid19DataPlace['code']) // FIXME: resolve type conflict
//     // TODO: assign the new marker to markers array
//   }
// }
// export async function getMarkers() {
//   for (let item of covid19Places) {
//     await setMarker(item['code'])
//   }

//   try {
//     return markers
//   } catch (error) {
//     console.log(`getMarkers error: ${error.message}`)
//   }
// }
