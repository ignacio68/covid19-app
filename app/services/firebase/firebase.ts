import firebase from 'nativescript-plugin-firebase';

export function firebaseInit() {
  firebase.init({
    persist: true
  })
}

