// export * from './*'
import { setMarker } from '../services/map'
import { Place, Covid19Data, Marker } from '../services/types'

export const setMarkers = (dataPlaces: Place[], covid19DataPlaces: Covid19Data[]): Marker[] => {
    const markers: Marker[] = []
    for (let covid19DataPlace of covid19DataPlaces) {
      const codePlace = covid19DataPlace.code as string
      const marker: Marker = setMarker({dataPlaces, covid19DataPlaces,  codePlace})
      markers.push(marker)
    }
    return markers
  }

// export const setMarkers = (dataPlaces: Place[], covid19DataPlaces: Covid19Data[]) => covid19DataPlaces.map(covid19DataPlace => {
//   setMarker({
//     dataPlaces: dataPlaces, 
//     covid19DataPlaces: covid19DataPlaces, 
//     codePlace: covid19DataPlace.code as string
//   })
// })
