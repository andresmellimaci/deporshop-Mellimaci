import firebase from "firebase/app";
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAy9bWSZTBqRkX-7qCYYwcITstY8cvW0eY",
    authDomain: "coderhouse-ecommerce-am.firebaseapp.com",
    projectId: "coderhouse-ecommerce-am",
    storageBucket: "coderhouse-ecommerce-am.appspot.com",
    messagingSenderId: "416316617390",
    appId: "1:416316617390:web:8a3a498927a240bce3f33f"
});

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}