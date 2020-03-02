import { covid19DataList } from '@/repository'
import { ICovid19Data } from './interfaces'

export function getCovid19CountryData(countryCode: string) {
  const getCovid19CountryData = covid19DataList.filter(covid19DataListed => covid19DataListed._id === countryCode)
  const covid19CountryData = {
    confirmed: getCovid19CountryData["confirmed"],
    suspected: getCovid19CountryData["suspected"],
    deaths: getCovid19CountryData["deaths"],
    totalConfirmed: getCovid19CountryData["totalConfirmed"],
    totalDeaths: getCovid19CountryData["totalDeaths"]
  }
  return covid19CountryData
}
