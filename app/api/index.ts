// export * from './*'
import { setMarker } from '@/services/map'
import { Place, Covid19Data, Marker } from '@/services/types'

// export const setMarkers = (dataPlaces: Place[], covid19DataPlaces: Covid19Data[]) => {
//     const markers: Marker[] = []
//     for (let covid19DataPlace of covid19DataPlaces) {
//       const codePlace = covid19DataPlace.code<string>
//       const marker = setMarker({dataPlaces, covid19DataPlaces,  codePlace})
//       // TODO: assign the new marker to markers array
//       markers
//     }
//   }

export const setMarkers = (dataPlaces: Place[], covid19DataPlaces: Covid19Data[]) => covid19DataPlaces.map(covid19DataPlace => {
  const codePlace = covid19DataPlace.code as string
  setMarker({dataPlaces, covid19DataPlaces,  codePlace})})
