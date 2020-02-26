<template>
  <AbsoluteLayout class="map">
    <MapBox
      left="0"
      top="0"
      width="100%"
      height="100%"
      :accessToken="accessToken"
      mapStyle="traffic_night"
      :latitude="userLatitude"
      :longitude="userLongitude"
      zoomLevel="5"
    ></MapBox>
  </AbsoluteLayout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
// import { Mapbox } from 'nativescript-mapbox'

@Component({
  // components: {
  //   Mapbox
  // }
})
export default class MapComponent extends Vue {
  @Prop() accessToken!: string | undefined
  @Prop({default: "45.137451890638886"}) userLatitude!: string
  @Prop({default: "-68.13734351262877"}) userLongitude!: string
}
</script>
