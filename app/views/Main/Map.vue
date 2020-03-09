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
import { getMarkers } from '@/services/map'

@Component({
  components: {
    MapComponent
  }
})

export default class Map extends Vue {

  private accessToken: string = mapboxToken

  async showMarkers(args) {
    await getMarkers()
    .then(markers => {
      console.log(`Map:markers: ${JSON.stringify(markers)}`)
      args.map.addMarkers(markers)
    })
  }
}
</script>
