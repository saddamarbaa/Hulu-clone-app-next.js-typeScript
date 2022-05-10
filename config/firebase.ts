import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAIN_SENDER_ID,
  appId: process.env.APPID,
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)

export { auth }
