<template>
  <Page>
    <ActionBar title="COVID-19 App" />
    <BottomNavigation selectedIndex="0">
      <TabStrip>
        <TabStripItem>
          <Label
            :text="$t('lang.views.main.tabbar_map')"
          />
          <!-- <Image src="font://&#xf015;" class="fas"/> -->
        </TabStripItem>
        <TabStripItem>
          <Label
            :text="$t('lang.views.main.tabbar_charts')"
          />
          <!-- <Image src="font://&#xf015;" class="fas"/> -->
        </TabStripItem>
        <TabStripItem>
          <Label
            :text="$t('lang.views.main.tabbar_info')"
          />
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
          <Charts />
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
import { getCollection } from '@/infraestructure/firestore'
import Map from './Main/Map.vue'
import Charts from './Main/Charts.vue'
import Info from './Main/Info.vue'
@Component({
  components: {
    Map,
    Charts,
    Info
  }
})
export default class AppNavigator extends Vue {
  created() {
    const myCollection = getCollection({collectionName: 'covid19-spain'})
    console.log(JSON.stringify(myCollection))
  }
}
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}
</style>
