import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCPYN11a6IrVSmTQJ0fAWrFAYGL-gj5Kns",
    authDomain: "e-commerce-react-ce6e8.firebaseapp.com",
    projectId: "e-commerce-react-ce6e8",
    storageBucket: "e-commerce-react-ce6e8.appspot.com",
    messagingSenderId: "755154225863",
    appId: "1:755154225863:web:d28ad8fc8b31d133914ce2",
    measurementId: "G-R9X27ZZ6ZT"
}

export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

   if (!snapShot.exists) {
       const { displayName, email } = userAuth
       const createdAt = new Date()

       try { 
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
       } catch (error) {
        console.log('error creating user', error.message)
       }
   }

   return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})
export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase