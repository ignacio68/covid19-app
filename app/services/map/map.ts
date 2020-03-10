import { getCountry } from '@/services/countries'
import { getCovid19CountryData } from '@/services/covid19'
import { covid19CountriesDataList } from '@/repository'
import { Marker } from './interfaces'
import { MapboxMarker } from 'nativescript-mapbox'
// import { compose } from '@/core'

let markers: Array<object> = []
let marker: Marker

// TODO: --- FUNCTIONAL PROGRAMMING ---
// const setMarker = countryCode => {
//   let marker: Marker = {}
// }

// const populateMarker = markerData => { markerData }
// const covidCountryData = countryCode => getCovid19CountryData(countryCode)
// const countryData = countryCode => getCountry(countryCode)

// const getMarkers = (dataBase:[]) => {
//   for (let item of dataBase) {
//     compose(setMarker, countryData, covidCountryData)
//   }
// }

async function setMarker(countryCode: string) {

  let marker: Marker = {}

  await getCovid19CountryData(countryCode)
    .then(covid19CountryData => {
      marker = { ...covid19CountryData }
      const countryData = getCountry(covid19CountryData.code)
      return countryData
    })
    .then(countryData => {
      marker = { ...marker, ...countryData }
      markers.push(marker)
      return markers
    })
    .catch ( error => console.log(`setMarker error: ${error.message}`))
}

export async function getMarkers() {

  for (let item of covid19CountriesDataList) {
     await setMarker(item['code'])
  }

  try {
    return markers
  } catch (error) {
    console.log(`getMarkers error: ${error.message}`)
  }
}
