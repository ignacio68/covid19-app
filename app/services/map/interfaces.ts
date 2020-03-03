import { country } from '@/services/countries'
import { covid19Data } from '@/services/covid19'
interface popup {
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

export interface marker extends country, covid19Data {
  icon?: string
  selected?: boolean
  popup?: popup
}

