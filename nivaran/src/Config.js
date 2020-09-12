import* as firebase from 'firebase'

const settings ={timestampInSnapshots: true}

var firebaseConfig = {
    apiKey: "AIzaSyCULAWBw_f4CMIUddYzIZoCQqG-7qcVwzQ",
    authDomain: "nivaran-52e14.firebaseapp.com",
    databaseURL: "https://nivaran-52e14.firebaseio.com",
    projectId: "nivaran-52e14",
    storageBucket: "nivaran-52e14.appspot.com",
    messagingSenderId: "267785599941",
    appId: "1:267785599941:web:3a3756c4270335bad869ac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestone.settings(settings);

  export default firebase;