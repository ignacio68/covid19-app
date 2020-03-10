import { getPlace } from '@/services/places'
import { getCovid19Data } from '@/services/covid19'
import { covid19CountriesDataList } from '@/repository'
import { covid19ComunidadesFake } from '@/repository'
import { Marker } from './interfaces'
import { MapboxMarker } from 'nativescript-mapbox'
// import { compose } from '@/core'

let markers: Array<object> = []
// let marker: Marker

// TODO: --- FUNCTIONAL PROGRAMMING ---
// const setMarker = placeCode => {
//   let marker: Marker = {}
// }

// const populateMarker = markerData => { markerData }
// const covidCountryData = placeCode => getCovid19Data(placeCode)
// const placeData = placeCode => getPlace(placeCode)

// const getMarkers = (dataBase:[]) => {
//   for (let item of dataBase) {
//     compose(setMarker, placeData, covidCountryData)
//   }
// }

async function setMarker(placeCode: string) {
  let marker: Marker = {}

  await getCovid19Data(placeCode)
    .then(Covid19Data => {
      marker = { ...Covid19Data }
      const placeData = getPlace(Covid19Data.code)
      return placeData
    })
    .then(placeData => {
      marker = { ...marker, ...placeData }
      markers.push(marker)
      return markers
    })
    .catch(error => console.log(`setMarker error: ${error.message}`))
}

export async function getMarkers() {
  for (let item of covid19ComunidadesFake) {
    await setMarker(item['code'])
  }

  try {
    return markers
  } catch (error) {
    console.log(`getMarkers error: ${error.message}`)
  }
}
