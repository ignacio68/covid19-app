<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <MapComponent
        :accessToken="accessToken"
        zoomLevel="14"
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

  showMarkers(args) {
    console.log('Estoy en showMarkers')
    console.log(console.dir(args))
    const markers = getMarkers()
    args.map.addMarkers([
      markers
    ])
    // args.map.addMarkers([
    //   {
    //     lat: 39.87299401,
    //     lng: -3.67089492
    //   },
    //   {
    //     lat: 46.48372145,
    //     lng: 2.60926281
    //   }
    // ])
  }
}
</script>
