/**
 * @file Information and help about Covid-19
 *
 * @copyright Ignacio López-Amor Pinillos 2020
 * @author Ignacio López-Amor Pinillos <ignaciolopezamor@gmail.com>
 * @license MIT
 * @version 0.1.0
 */

import Vue from "nativescript-vue"

import { device, isAndroid, isIOS } from "tns-core-modules/platform"

import store from "./store"

// Import languages
import i18n from "./setup/i18n"

import VueDevtools from "nativescript-vue-devtools"

// Add view components
// import AppNavigator from './AppNavigator'
import App from "./components/App.vue"

if (TNS_ENV !== "production") {
  Vue.use(VueDevtools)
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === "production"

// Add Mapbox component
Vue.registerElement('Mapbox', () => require('nativescript-mapbox').MapboxView)

new Vue({
  store,
  beforeCreate() {
    // Set the platform OS global variable
    Vue.prototype.IS_ANDROID = isAndroid
    Vue.prototype.IS_IOS = isIOS
    console.log(`Running on Android? ${isAndroid}`)
    console.log(`Running on iOS? ${isIOS}`)

    // // Set app language
    const val = device.language
    const lang = val.slice(0, 2)
    if (lang) {
      // const lang = val.replace('-', '')
      // const lang = val.slice(0, 2)
      i18n.locale = lang
      console.log("El idioma del navegador es: " + val)
      // this.$store.commit("shared/SET_LANGUAGE", lang)
    } else {
      console.log("No se encuentra el idioma del navegador")
    }
  },
  render: h => h("frame", [h(App)])
}).$start()
