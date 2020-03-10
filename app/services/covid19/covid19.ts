import { covid19CountriesDataList } from '@/repository'
import { covid19ComunidadesFake } from '@/repository'
import { Covid19Data } from './interfaces'

export async function getCovid19Data(siteCode: string) {
  const filterCovid19CountryData = covid19ComunidadesFake.filter(
    country => country.code === siteCode
  )
  const Covid19Data: Covid19Data = {}
  // Covid19Data.confirmed = filterCovid19CountrData[0].confirmed,
  // Covid19Data.suspected = filterCovid19CountrData[0].suspected,
  // Covid19Data.deaths = filterCovid19CountryData[0].deaths
  // Covid19Data.totalConfirmed = filterCovid19CountrData[0].totalConfirmed,
  const totalConfirmed = filterCovid19CountryData[0].totalConfirmed
  const totalDeaths = filterCovid19CountryData[0].totalDeaths
  Covid19Data.code = filterCovid19CountryData[0].code
  Covid19Data.subtitle = `contagiados: ${totalConfirmed}
  fallecidos: ${totalDeaths}`
  return Covid19Data
}
