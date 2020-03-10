import firebase from 'nativescript-plugin-firebase'

interface GetCollection {
  collectionName: string,
  documentName?: string,
  options?: any
}

const setCollection: any = (collectionName: string) => firebase.firestore.collection(collectionName)
const setDocumentRef: any = (dataCollection: any, documentName: string) => dataCollection.doc(documentName)

export function getCollection(data: GetCollection) {
  const dataCollection = setCollection(data.collectionName)
  // const documentRef = setDocumentRef(dataCollection, data.documentName)
    dataCollection.get()
      .then((snapshot) => {
        snapshot.forEach(doc => console.log(`${doc.id} => ${doc.data()}`))
      })
    .catch(error => console.log(`getCollection error: ${error.message}`))
  }
