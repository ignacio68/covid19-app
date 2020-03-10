import { covid19CountriesDataList } from '@/repository'
import { covid19ComunidadesFake } from '@/repository'
import { Covid19CountryData } from './interfaces'

export async function getCovid19CountryData(siteCode: string) {
  const filterCovid19CountryData = covid19ComunidadesFake.filter(
    country => country.code === siteCode
  )
  const covid19CountryData: Covid19CountryData = {}
  // covid19CountryData.confirmed = filterCovid19CountrData[0].confirmed,
  // covid19CountryData.suspected = filterCovid19CountrData[0].suspected,
  // covid19CountryData.deaths = filterCovid19CountryData[0].deaths
  // covid19CountryData.totalConfirmed = filterCovid19CountrData[0].totalConfirmed,
  const totalConfirmed = filterCovid19CountryData[0].totalConfirmed
  const totalDeaths = filterCovid19CountryData[0].totalDeaths
  covid19CountryData.code = filterCovid19CountryData[0].code
  covid19CountryData.subtitle = `contagiados: ${totalConfirmed}
  fallecidos: ${totalDeaths}`
  return covid19CountryData
}
