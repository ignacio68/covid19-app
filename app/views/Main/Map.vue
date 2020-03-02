<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <Label
        :text="$t('lang.views.welcome.header')"
        textWrap="true"
      />
      <MapComponent
        :accessToken="accessToken"
        zoomLevel="5"
        userLatitude="39.8729940"
        userLongitude="-3.67089492"
        :onMapReady="onMapReady()"
      />
      <Button
        @tap="onTap"
      />
    </StackLayout>
  </Page>
</template>
<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator'
// import mapbox from 'nativescript-mapbox'
import { mapboxToken } from '@/setup/Mapbox'
import MapComponent from '@/components/Main/MapComponent.vue'
import { countriesList } from '@/repository'
// import { covid19Data } from '@/utils/covid19'
// import { Repository } from '@/services'

// const myRepository = new Repository()

@Component({
  components: {
    MapComponent
  }
})
export default class Map extends Vue {
  @Ref() readonly map!: MapComponent

  private accessToken: string = mapboxToken

  created() {
    console.log(this.accessToken)
  }
  onMapReady(args) {
    args.map.addMarkers([
      {
        lat: 39.87299401,
        lng: -3.67089492
      }
    ])
  }
  onTap() {
    console.log('Me has pulsado!!')
    // const country = 'Spain'
    // myRepository.getCountryCoordenates(country)
  }
}
</script>
