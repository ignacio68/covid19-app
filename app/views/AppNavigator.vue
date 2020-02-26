<template>
    <Page>
        <ActionBar title="COVID-19 App"/>
        <BottomNavigation selectedIndex="0">
          <TabStrip>
            <TabStripItem>
            <Label text="Maps"/>
            <!-- <Image src="font://&#xf015;" class="fas"/> -->
            </TabStripItem>
            <TabStripItem>
            <Label text="Info"/>
            <!-- <Image src="font://&#xf015;" class="fas"/> -->
            </TabStripItem>
          </TabStrip>
          <TabContentItem>
            <Frame>
              <Map />
            </Frame>
          </TabContentItem>
          <TabContentItem>
            <Frame>
              <Info />
            </Frame>
          </TabContentItem>
        </BottomNavigation>
    </Page>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Map from './Main/Map.vue'
  import Info from './Main/Info.vue'
  @Component({
    components: {
      Map,
      Info
    }
  })
  export default class AppNavigator extends Vue {
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }
</style>
