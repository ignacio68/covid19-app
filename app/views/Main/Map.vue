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
      />
      <Button
        @tap="onTap"
      />
    </StackLayout>
  </Page>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapboxToken } from '@/setup/Mapbox'
import MapComponent from '@/components/Main/MapComponent.vue'
// import { Repository } from '@/services'

// const myRepository = new Repository()

@Component({
  components: {
    MapComponent
  }
})
export default class Map extends Vue {
  private accessToken: string = mapboxToken
  created() {
    console.log(this.accessToken)
  }
  onTap() {
    console.log('Me has pulsado!!')
    // const country = 'Spain'
    // myRepository.getCountryCoordenates(country)
  }
}
</script>
