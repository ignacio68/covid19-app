<template>
  <Page>
    <ActionBar :title="$t('views.service.title')">
      <NavigationButton
        android.systemIcon="ic_menu_back"
        @tap="$navigateBack"
      />
    </ActionBar>
    <StackLayout>
      <Label
        class="text"
        :text="$t('views.service.main')"
        textWrap="true"
      />
    </StackLayout>
  </Page>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class TermsOfService extends Vue {}
</script>
<style lang="scss" scoped>
.text {
  vertical-align: center;
  text-align: center;
  margin-top: 16px;
  font-size: 20;
}
</style>
