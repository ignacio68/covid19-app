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

export interface marker {
  id?: any,
  lat: string,
  lng: string,
  title?: string,
  icon?: string,
  selected?: boolean,
  popup?: popup
}

