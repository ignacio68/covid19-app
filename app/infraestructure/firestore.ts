import firebase from 'nativescript-plugin-firebase'

interface Collection {
  collectionName: string
  documentName: string
  ids: string[]
  options?: any
}

const setCollection = (collectionName: string): any =>
  firebase.firestore.collection(collectionName)

const setDocumentRef = (dataCollection, documentName: string | undefined) =>
  dataCollection.doc(documentName)

const configureMarker = (doc: any, id: string) => {
  const marker: any = {
    id: id,
    totalConfirmed: doc[id].C,
    totalDeath: doc[id].D
  }
  console.log(`marker id: ${marker.id}`)
  console.log(`marker totalConfirmed: ${marker. totalConfirmed}`)
  console.log(`marker totalDeath: ${marker.totalDeath}`)
  return marker
}

export function getCollection(data: Collection) {
  const dataCollection: any = setCollection(data.collectionName)
  console.log(`dataCollection: ${JSON.stringify(dataCollection)}`)
  const documentRef: any = setDocumentRef(dataCollection, data.documentName)
  console.log(`documentRef: ${JSON.stringify(documentRef)}`)
  documentRef
    .get()
    .then(snapshot => {
      if (snapshot.exists) {
        console.log(`Document data: ${JSON.stringify(snapshot.data())}`)
      } else {
        console.log(`Document doesn't exist`)
      }
      const placesId = data.ids
      console.log(`placesId: ${placesId}`)
      const doc = snapshot.data()
      const markersInfo: any[] = []

      placesId.map(place => {
        const marker = configureMarker(doc, place)
        console.log(`marker: ${JSON.stringify(marker)}`)
        markersInfo.push(marker)
      })
      return markersInfo
    })
    .catch(error => console.log(`getCollection error: ${error.message}`))
}
