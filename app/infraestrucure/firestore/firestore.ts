import firebase from 'nativescript-plugin-firebase'

export class collection {
  private dataCollection: any
  constructor(collectionName: string) {
    this.dataCollection = firebase.firestore.collection(collectionName)
  }
  getCollection(options: any) {
    this.dataCollection.get({ source: options.source })
      .then((snapshot) => { })
    .catch(error => console.log(`getCollection error: ${error}`))
  }
}
