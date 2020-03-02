<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <MapComponent
        :accessToken="accessToken"
        :zoomLevel="6"
        userLatitude="39.8729940"
        userLongitude="-3.67089492"
        @onMapReady="showMarkers($event)"
      />
    </StackLayout>
  </Page>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import mapbox from 'nativescript-mapbox'
import { mapboxToken } from '@/setup/Mapbox'
import MapComponent from '@/components/Main/MapComponent.vue'
// import { countriesList } from '@/repository'

@Component({
  components: {
    MapComponent
  }
})
export default class Map extends Vue {

  private accessToken: string = mapboxToken


  showMarkers(args) {
    console.log('Estoy en showMarkers')
    console.log(`args: ${args}`)
    args.map.addMarkers([
      {
        lat: 39.87299401,
        lng: -3.67089492
      }
    ])
  }
}
</script>
