<template>
  <StackLayout>
    <Map
      :accessToken="accessToken"
      userLatitude="45.137451890638886"
      userLongitude="-68.13734351262877"
    />
  </StackLayout>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MapComponent from './Main/Map.vue'
@Component ({
  Map: MapComponent
})
export default class Map extend Vue {
  private accessToken = mapboxToken
}
</script>
