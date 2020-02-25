<template>
    <Page>
        <ActionBar title="COVID-19 App"/>
        <StackLayout>
            <Label class="message" text="Root Component"/>
            <MyComp msg="Covid-19 App"
        </StackLayout>
    </Page>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import MyComp from './MyComp.vue'

  @Component({
    components: {
      MyComp
    }
  })
  export default class App extends Vue {
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
