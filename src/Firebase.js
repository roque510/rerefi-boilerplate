 import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyBgcAPcCOAeYpQmC1HzSHfKl1skBJ9_RV0",
    authDomain: "atiname-fe6dc.firebaseapp.com",
    databaseURL: "https://atiname-fe6dc.firebaseio.com",
    projectId: "atiname-fe6dc",
    storageBucket: "atiname-fe6dc.appspot.com",
    messagingSenderId: "1072376659690"
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref('Torneo/');

