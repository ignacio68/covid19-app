import test from 'tape'
import * as firebase from '@firebase/testing'
import * as fs from 'fs'
import { assert } from 'console'

/*
 * ============
 *    Setup
 * ============
 */
const projectId = 'covid19-app'
const firebasePort = require('../../../firebase.json').emulators.firestore.port
const port = firebasePort /** Exists? */ ? firebasePort : 8080
const coverageUrl = `http://localhost:${port}/emulator/v1/projects/${projectId}:ruleCoverage.html`

const rules = fs.readFileSync('../../firestore.rules', 'utf8')

/**
 * Creates a new app with authentication data matching the input.
 *
 * @param {object} auth the object to use for authentication (typically {uid: some-uid})
 * @return {object} the app.
 */
function authedApp(auth) {
  return firebase.initializeTestApp({ projectId, auth }).firestore()
}

/**
 * ======================================
 *  Before, after, beforeEach, afterEach
 * ======================================
 */

const before = test
const after = test

// beforeEach
// const setup = () => {
//   const fixtures = async () => {
//         // Clear the database between tests
//       await firebase.clearFirestoreData({ projectId });
//   }
function setup() {
  const fixtures = async () => {
        // Clear the database between tests
      await firebase.clearFirestoreData({ projectId });
  }

  // Insert your fixture code here.
  // Make sure you're creating fresh objects each
  // time setup() is called.

  return fixtures
}

// afterEach
const teardown = (fixtures) => {

  // Dispose of your fixtures here

}

/**
 * ============
 *  Test Cases
 * ============
 */
before ('before', async t => {
  t.pass(await firebase.loadFirestoreRules({ projectId, rules }))
  t.end()
})

test('It should', t => {
  //Arrange
  setup()
  const db = authedApp({ uid: "ignacio "})
  const profile = db.collection("users").doc("ignacio")
})

after ('after', async t => {
  t.pass(Promise.all(firebase.apps().map(app => app.delete())))
  t.end()
})

// TODO: Refactoring and Implement
// if (process.env.NODE_ENV !== 'test') {
//   const admin = admin.initializeApp()
//   const firestore = admin.firestore
//   const db = admin.firestore()
//   const auth = admin.auth;
// }

// if (process.env.NODE_ENV === 'test') {
//   const firebasetest = require('@firebase/testing')
//   const admin = firebasetest.initializeAdminApp({ projectId });
//   const db = admin.firestore()
//   const auth = admin.auth
//   const firestore = admin.firestore
// }

// module.exports = { db, admin, firestore, auth }
