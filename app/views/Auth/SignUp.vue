<template>
  <Page actionBarHidden="true">
    <StackLayout class="signUp__wrapper">
      <Label
        class="signUp__title"
        :text="$t('lang.views.signup.title')"
      />

      <!-- TERMS OF SERVICE $ PRIVACY POLICY -->
      <FlexboxLayout
        flexWrap="wrap"
        class="accept__wrapper"
      >
        <Label
          class="accept__text-text"
          :text="$t('lang.views.signup.accept_text_1')"
          textWrap="true"
        />
        <Label
          class="accept__text-link"
          :text="$t('lang.views.signup.accept_terms')"
          textWrap="true"
          @tap="toTermsOfService"
        />
        <Label
          class="accept__text-text"
          :text="$t('lang.views.signup.accept_text_2')"
          textWrap="true"
        />
        <Label
          class="accept__text-link"
          :text="$t('lang.views.signup.accept_privacy')"
          textWrap="true"
          @tap="toPrivacyPolicy"
        />
      </FlexboxLayout>

      <!-- SIGN UP BUTTON -->
      <Button
        class="-primary -rounded-lg signUp__button"
        :text="$t('lang.views.signup.button')"
        @tap="onSignUp"
      />
    </StackLayout>
  </Page>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator'

// Views
import PrivacyPolicy from '@/views/Privacy/PrivacyPolicy.vue'
import TermsOfService from '@/views/Privacy/TermsOfService.vue'
import AppNavigator from '@/views/AppNavigator.vue'

export default class SignUp extends Vue {
   toPrivacyPolicy() {
      this.$navigateTo(PrivacyPolicy)
    }
    toTermsOfService() {
      this.$navigateTo(TermsOfService)
    }
    onSignUp() {
      this.$navigateTo(AppNavigator)
    }
}
</script>
<style lang="scss" scoped>
.signUp {
  background-color: white;
}
.signUp__wrapper {
  background-color: whitesmoke;
  margin: {
    top: 20;
    left: 16;
    right: 16;
  }
  border: {
    radius: 25%;
    width: 1;
    color: teal;
  }
}
.signUp__title {
  text-align: left;
  font: {
    size: 20;
    weight: 900;
  }
  margin: {
    top: 24;
    left: 16;
  }
  padding {
    right: 24;
    left: 24;
  }
  color:teal;
}
.accept__wrapper {
  padding: {
    top: 16;
    right: 16;
    left: 24;
    bottom: 8;
  }
}
.accept__text-link {
  color: teal;
  font-weight: bold;
}
.signUp__button {
  margin-bottom: 16;
  padding: {
    left:24;
    right: 24;
  }
}
</style>
