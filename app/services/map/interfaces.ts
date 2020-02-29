export interface Imarker {
  lat: string,
  lng: string,
  icon: string,
  selected: boolean,
  popup: Ipopup
}

export interface Ipopup {
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
