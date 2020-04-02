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
