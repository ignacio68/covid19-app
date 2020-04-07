import firebase from 'nativescript-plugin-firebase'

interface GetCollection {
  collectionName: any,
  documentName?: any,
  options?: any
}

const setCollection = (collectionName) => firebase.firestore.collection(collectionName)
const setDocumentRef = (collectionName, documentName) => collectionName.doc(documentName)

export function getCollection(data: GetCollection) {
  const dataCollection = setCollection(data.collectionName)
  const documentRef = setDocumentRef(dataCollection, data.documentName)
    documentRef.get()
      .then((snapshot) => {
        const markersInfo: any[] = []
        snapshot.forEach(doc => {
          console.log(`${doc.id} => ${JSON.stringify(doc.data())}`)
          const marker: any = {
            id: doc.id,
            totalConfirmed: doc.data.C,
            totalDeath: doc.data.D
          }
          markersInfo.push(marker)
      })
      return markersInfo
    })
    .catch(error => console.log(`getCollection error: ${error.message}`))
}
