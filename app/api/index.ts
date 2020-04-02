// export * from './*'
import { setMarker } from '@/services/map'
import { Place, Covid19Data, Marker } from '@/services/types'

export const setMarkers = (dataPlaces: Place[], covid19DataPlaces: Covid19Data[]) => {
    const markers: Marker[] = []
    for (let covid19DataPlace of covid19DataPlaces) {
      const marker = setMarker(dataPlaces, covid19DataPlaces,  covid19DataPlace.code = '') // FIXME: resolve type conflict
      // TODO: assign the new marker to markers array
    }
  }
  