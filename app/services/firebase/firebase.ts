import firebase from 'nativescript-plugin-firebase'

export function firebaseInit() {
  firebase
    .init({
      persist: true
    })
    .then(
      data => {
        console.log('firebase.init done')
        return data
      },
      error => console.log(`firebase.init error: ${error}`)
    )
}
