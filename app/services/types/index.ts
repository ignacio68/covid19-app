export interface Covid19Data {
    code?: string
    confirmed?: number
    suspected?: number
    deaths?: number
    totalConfirmed?: number
    totalDeaths?: number
    subtitle?: string
  }

  export interface Place {
    code?: string,
    name?: string,
    name_official?: string,
    lat?: string,
    lng?: string,
    id?: string | undefined,
    zoom?: number
    continent?: string
    title?: string
    onTap?: Function
  }

  export interface Marker extends Place, Covid19Data {
    icon?: string
    selected?: boolean
  }
  