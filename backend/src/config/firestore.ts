import admin from 'firebase-admin';

var serviceAccount = require('../../buddy-starter-training-api-firebase-adminsdk-5i4dr-da9b2299ac.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const firestoreDatabase = admin.firestore();

export default admin;
