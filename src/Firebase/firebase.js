import  {firebase} from '@firebase/app';
import 'firebase/storage';
 import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDc-uV2UAF1PyfZGUSTSwq8Q2ZsgzV8-Mc",
    authDomain: "firegram-imagegallery.firebaseapp.com",
    projectId: "firegram-imagegallery",
    storageBucket: "firegram-imagegallery.appspot.com",
    messagingSenderId: "60113069876",
    appId: "1:60113069876:web:c4caee634b1258dee3e761"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export {projectStorage,
     projectFirestore,
     timestamp
} ;