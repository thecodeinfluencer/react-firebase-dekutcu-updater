import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //Your firebase config here
  //Create project at firebase io
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

//Firebase Firestore Persistancefirebase
firebase
  .firestore()
  .enablePersistence()
  .then(() => {
    console.log("Firestore persistance enabled successfully");
  })
  .catch(function (err) {
    if (err.code === "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
      console.log("Multiple tabs open, persistence can only be enabled");
    } else if (err.code === "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
      console.log("The current browser does not support ");
    }
  });

export default firebase;
