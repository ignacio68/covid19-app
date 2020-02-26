<template>
    <Page>
        <ActionBar title="COVID-19 App"/>
        <StackLayout>
            <MyComp msg="Covid-19 App" />
            <Map
              :accessToken="accessToken"
              userLatitude="45.137451890638886"
              userLongitude="-68.13734351262877"
            />
        </StackLayout>
    </Page>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import MyComp from './MyComp.vue'
  import Map from './Main/Map.vue'
  import { mapboxToken } from '@/setup/Mapbox'

  @Component({
    components: {
      MyComp,
      Map
    }
  })
  export default class App extends Vue {
    private accessToken = mapboxToken
   }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
