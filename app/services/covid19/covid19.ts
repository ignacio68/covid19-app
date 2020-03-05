import { covid19CountriesDataList } from '@/repository'
import { Covid19CountryData } from './interfaces'

export function getCovid19CountryData(countryCode: string) {
  const filterCovid19CountrData = covid19CountriesDataList.filter(countryData => countryData.id === countryCode)
  console.log(`filterCovid19CountrData: ${JSON.stringify(filterCovid19CountrData)}`)
  const covid19CountryData: Covid19CountryData = {}

  // covid19CountryData.confirmed = filterCovid19CountrData[0].confirmed,
  // covid19CountryData.suspected = filterCovid19CountrData[0].suspected,
  // covid19CountryData.deaths = filterCovid19CountrData[0].deaths,
  // covid19CountryData.totalConfirmed = filterCovid19CountrData[0].totalConfirmed,
  const totalDeaths = filterCovid19CountrData[0].totalDeaths
  // console.log(`Muertos totales: ${totalDeaths}`)
  // covid19CountryData.subtitle = `muertos: ${totalDeaths}`

  return covid19CountryData
}
