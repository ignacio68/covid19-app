export interface Place {
  code?: string | undefined,
  lat?: string,
  lng?: string,
  zoom?: number
  continent?: string
  title?: string
  onTap?: Function
}
