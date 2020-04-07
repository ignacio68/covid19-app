import { filterPlaceWithPlaceCode } from './helpers'

import { Covid19Data } from './types'

const totalConfirmed = (data: number) => data[0].totalConfirmed
const totalDeaths =  (data: number) => data[0].totalDeaths

export const getCovid19PlaceData = (covid19DataPlaces: Covid19Data[], codePlace: string):Covid19Data => {
  const covid19PlaceData = filterPlaceWithPlaceCode(covid19DataPlaces, codePlace)
  // Covid19Data.confirmed = Covid19PlaceData[0].confirmed,
  // Covid19Data.suspected = Covid19PlaceData[0].suspected,
  // Covid19Data.deaths = Covid19PlaceData[0].deaths
  // Covid19Data.totalConfirmed = Covid19PlaceData[0].totalConfirmed,
  // const totalConfirmed = Covid19PlaceData[0].totalConfirmed
  // const totalDeaths = Covid19PlaceData[0].totalDeaths
  const covid19Data: Covid19Data = {
    code: covid19PlaceData[0].code,
    subtitle: `contagiados: ${totalConfirmed(covid19PlaceData)}
    fallecidos: ${totalDeaths(covid19PlaceData)}`
  }
  return covid19Data
}
