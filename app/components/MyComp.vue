<template>
  <Label class="message" :text="message" textWrap="true" />
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
  @Component
  export default class MyComp extends Vue {
    @Prop() private msg: string
  }
</script>