import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAs2Pmgh7WWDSyFjSwuXeGbKvBLJKnfxTc",
    authDomain: "chat-app-33611.firebaseapp.com",
    databaseURL: "https://chat-app-33611-default-rtdb.firebaseio.com",
    projectId: "chat-app-33611",
    storageBucket: "chat-app-33611.appspot.com",
    messagingSenderId: "12836222273",
    appId: "1:12836222273:web:19c8fcffb57fb812655dc0"
  };

  firebase.initializeApp(firebaseConfig);
   const database = firebase.database();
   const messageRef =  database.ref('messages');

   export const pushMessage = ({ name, text }) => {
       messageRef.push({ name, text });
   };

