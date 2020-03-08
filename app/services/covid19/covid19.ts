import { covid19CountriesDataList } from '@/repository'
import { Covid19CountryData } from './interfaces'

export async function getCovid19CountryData(countryCode: string) {
  const filterCovid19CountryData = covid19CountriesDataList.filter(
    country => country.code === countryCode
  )
  console.log(
    `filterCovid19CountrData deaths: ${JSON.stringify(
      filterCovid19CountryData
    )}`
  )
  const covid19CountryData: Covid19CountryData = {}
  // covid19CountryData.confirmed = filterCovid19CountrData[0].confirmed,
  // covid19CountryData.suspected = filterCovid19CountrData[0].suspected,
  // covid19CountryData.deaths = filterCovid19CountryData[0].deaths
  // covid19CountryData.totalConfirmed = filterCovid19CountrData[0].totalConfirmed,
  const totalDeaths = filterCovid19CountryData[0].totalDeaths
  console.log(`Muertos totales: ${totalDeaths}`)
  covid19CountryData.subtitle = `muertos: ${totalDeaths}`
  return covid19CountryData
}

  // export function setCovid19CountryData(countryCode: string) {
  //   const promise = new Promise((resolve, reject) => {
  //   resolve(getCovid19CountryData(countryCode))
  //   })
  //   promise.then(country => {
  //     const covid19CountryData: Covid19CountryData = {}
  //     // covid19CountryData.confirmed = filterCovid19CountrData[0].confirmed,
  //     // covid19CountryData.suspected = filterCovid19CountrData[0].suspected,
  //     // covid19CountryData.deaths = filterCovid19CountryData[0].deaths
  //     // covid19CountryData.totalConfirmed = filterCovid19CountrData[0].totalConfirmed,
  //     const totalDeaths = country[0].totalDeaths
  //     console.log(`Muertos totales: ${totalDeaths}`)
  //     covid19CountryData.subtitle = `muertos: ${totalDeaths}`
  //     return covid19CountryData
  //   })
