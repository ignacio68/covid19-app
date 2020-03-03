import { covid19CountriesDataList } from '@/repository'
import { covid19CountryData } from './interfaces'

export function getCovid19CountryData(countryCode: string) {
  const filterCovid19CountrData = covid19CountriesDataList.filter(countryData => countryData.id === countryCode)

  const covid19CountryData: covid19CountryData = {}

  // covid19CountryData.confirmed = filterCovid19CountrData[0].confirmed,
  // covid19CountryData.suspected = filterCovid19CountrData[0].suspected,
  // covid19CountryData.deaths = filterCovid19CountrData[0].deaths,
  // covid19CountryData.totalConfirmed = filterCovid19CountrData[0].totalConfirmed,
  covid19CountryData.subtitle = `muertos: ${filterCovid19CountrData[0].totalDeaths}`

  return covid19CountryData
}
