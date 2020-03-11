<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <FontIcon
        type="fab"
        name="fa-reddit"
        color="#0B87DE"
        :fontSize="100"
        class="p-t-20"
      />
      <Label
        class="h2 text-center bold p-t-10"
        :text="$t('lang.views.welcome.title')"
        textWrap="true"
      />
      <Button
        :text="$t('lang.views.welcome.signup')"
        class="-primary"
        @tap="toSignUp"
      />
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SignUp from '@/views/Auth/SignUp.vue'
import FontIcon from '@/components/Core/FontIcon.vue'

@Component({
  components: {
    FontIcon
  }
})
export default class Welcome extends Vue {
  toSignUp() {
      this.$navigateTo(SignUp)
    }
}
</script>
//
<style lang="scss" scoped>
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20px;
}
</style>
