<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <MapComponent
        :accessToken="accessToken"
        :zoomLevel="3"
        userLatitude="39.8729940"
        userLongitude="-3.67089492"
        @onMapReady="showMarkers($event)"
      />
    </StackLayout>
  </Page>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapboxToken } from '@/setup/Mapbox'
import MapComponent from '@/components/Main/MapComponent.vue'
import { setMarkers } from '@/api'
import { getCollection } from '@/infraestructure/firestore'
import { Covid19Data } from '@/services/types'
import { comunidadesAutonomas } from '@/repository'
// import { countriesList } from '@/repository'

@Component({
  components: {
    MapComponent
  }
})

export default class Map extends Vue {

  private accessToken = mapboxToken

  get markersInfo():any {
    return getCollection({collectionName: 'covid19-spain', documentName:'20200310'})
  }

  get markers() {
    return setMarkers(comunidadesAutonomas, this.markersInfo)
  }

  private showMarkers = args => args.map.addMarkers(this.markers)

  // async showMarkers(args) {
  //   await setMarkers()
  //   .then(markers => {
  //     console.log(`Map:markers: ${JSON.stringify(markers)}`)
  //     args.map.addMarkers(markers)
  //   })
  // }
}
</script>
