import { Country } from '@/services/countries'
import { Covid19CountryData } from '@/services/covid19'
export interface Popup {
  country: string,
  confirmedTitle: string,
  confirmed: string
  suspectedTitle: string,
  suspected: string,
  deathsTitle: string,
  deaths: string,
  totalConfirmedTitle: string,
  totalConfirmed: string,
  totalDeathsTitle: string,
  totalDeaths: string
}

export interface Marker extends Country, Covid19CountryData {
  icon?: string
  selected?: boolean
}
