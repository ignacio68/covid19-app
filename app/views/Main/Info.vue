<template>
  <Page actionBarHidden="true">
    <StackLayout horizontalAligment="center">
      <Label
        class="h1"
        text="Info Page"
        textWrap="true"
      />
    </StackLayout>
  </Page>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Map extends Vue {
}
</script>
