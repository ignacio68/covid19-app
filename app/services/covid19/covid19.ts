import { covid19DataList } from '@/repository'
import { covid19Data } from './interfaces'

export function getCovid19CountryData(countryCode: string) {
  const getCovid19CountryData = covid19DataList.filter(covid19DataListed => covid19DataListed.id === countryCode)

  const covid19CountryData: covid19Data = {}

  // covid19CountryData.confirmed = getCovid19CountryData[0].confirmed,
  // covid19CountryData.suspected = getCovid19CountryData[0].suspected,
  // covid19CountryData.deaths = getCovid19CountryData[0].deaths,
  // covid19CountryData.totalConfirmed = getCovid19CountryData[0].totalConfirmed,
  covid19CountryData.subtitle = `muertos: ${getCovid19CountryData[0].totalDeaths}`

  return covid19CountryData
}
