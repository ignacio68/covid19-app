// import { covid19CountriesDataList } from '@/repository'
// import { covid19ComunidadesFake } from '@/repository'
import { Covid19Data } from './types'

// export async function getCovid19Data(siteCode: string) {
//   const filterCovid19PlaceData = covid19ComunidadesFake.filter(
//     country => country.code === siteCode
//   )
//   const Covid19Data: Covid19Data = {}
//   // Covid19Data.confirmed = filterCovid19CountryData[0].confirmed,
//   // Covid19Data.suspected = filterCovid19CountryData[0].suspected,
//   // Covid19Data.deaths = filterCovid19PlaceData[0].deaths
//   // Covid19Data.totalConfirmed = filterCovid19CountryData[0].totalConfirmed,
//   const totalConfirmed = filterCovid19PlaceData[0].totalConfirmed
//   const totalDeaths = filterCovid19PlaceData[0].totalDeaths
//   Covid19Data.code = filterCovid19PlaceData[0].code
//   Covid19Data.subtitle = `contagiados: ${totalConfirmed}
//   fallecidos: ${totalDeaths}`
//   return Covid19Data
// }

const filterCovid19PlaceData = (covid19DataPlace: Covid19Data[], placeCode: string) =>
   covid19DataPlace.filter(place => place.code === placeCode )
  

const totalConfirmed = data => data[0].totalConfirmed
const totalDeaths =  data => data[0].totalDeaths

export const getCovid19PlaceData = (covid19DataPlace: Covid19Data[], placeCode: string) => {
  const Covid19PlaceData = filterCovid19PlaceData(covid19DataPlace, placeCode)
  // Covid19Data.confirmed = Covid19PlaceData[0].confirmed,
  // Covid19Data.suspected = Covid19PlaceData[0].suspected,
  // Covid19Data.deaths = Covid19PlaceData[0].deaths
  // Covid19Data.totalConfirmed = Covid19PlaceData[0].totalConfirmed,
  // const totalConfirmed = Covid19PlaceData[0].totalConfirmed
  // const totalDeaths = Covid19PlaceData[0].totalDeaths
  const Covid19Data: Covid19Data = {
    code: Covid19PlaceData[0].code,
    subtitle: `contagiados: ${totalConfirmed(Covid19PlaceData)}
    fallecidos: ${totalDeaths(Covid19PlaceData)}`
  }
  return Covid19Data
}
