<template>
  <AbsoluteLayout class="map">
    <MapBox
      ref="map"
      left="0"
      top="0"
      width="100%"
      height="100%"
      :accessToken="accessToken"
      mapStyle="traffic_night"
      :latitude="userLatitude"
      :longitude="userLongitude"
      zoomLevel="zoomLevel"
      :hideCompass="true"
      :disableRotation="true"
      :mapReady="onMapReady()"
    ></MapBox>
  </AbsoluteLayout>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator'
// import { Mapbox } from 'nativescript-mapbox'

@Component({
  // components: {
  //   Mapbox
  // }
})
export default class MapComponent extends Vue {
  @Prop(String) readonly accessToken!: string | undefined
  @Prop({default: "5"}) readonly zoomLevel!: string
  @Prop({default: "45.137451890638886"}) readonly userLatitude!: string
  @Prop({default: "-68.13734351262877"}) readonly userLongitude!: string


  @Emit('onMapReady')
  onMapReady(){}

}
</script>
