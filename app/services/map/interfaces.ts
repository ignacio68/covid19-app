import { Place } from '@/services/places'
import { Covid19Data } from '@/services/covid19'

export type Popup = {
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

export interface Marker extends Place, Covid19Data {
  icon?: string
  selected?: boolean
}
