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

// Add NativeScript plugin
import { TNSFontIcon, fonticon } from 'nativescript-fonticon'

import store from "./store"

// Import languages
// @ts-ignore
import i18n from "./setup/i18n"

import VueDevtools from "nativescript-vue-devtools"

// Add view components
import AppNavigator from "./views/AppNavigator.vue"

if (TNS_ENV !== "production") {
  Vue.use(VueDevtools)
}

// Load TNSFonticon
TNSFontIcon.debug = true
TNSFontIcon.paths = {
  fa: './assets/css/fontawesome.css',
  far: './assets/css/regular.css',
  fas: './assets/css/solid.css',
  fab: './assets/css/brand.css'
}
TNSFontIcon.loadCss()
Vue.filter('fonticon', fonticon)

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === "production"

// Add Mapbox component
Vue.registerElement('Mapbox', () => require('nativescript-mapbox').MapboxView)

new Vue({
  i18n,
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
      i18n.locale = lang
      console.log("El idioma del navegador es: " + val)
    } else {
      console.log("No se encuentra el idioma del navegador")
    }
  },
  render: h => h("frame", [h(AppNavigator)])
}).$start()
