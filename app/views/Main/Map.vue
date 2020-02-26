<template>
  <StackLayout>
    <MapComponent
      :accessToken="accessToken"
      userLatitude="45.137451890638886"
      userLongitude="-68.13734351262877"
    />
  </StackLayout>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapboxToken } from '@/setup/Mapbox'
import MapComponent from '@/components/Main/MapComponent.vue'
@Component ({
  components: {
     MapComponent
  }
})
export default class Map extends Vue {
  private accessToken = mapboxToken
}
</script>
