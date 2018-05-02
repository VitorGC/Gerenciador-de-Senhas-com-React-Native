import { AppRegistry } from 'react-native';
//import App from './App';
//import App from './loginInit';
//import App from './tabs/LoginScreen';
import App from './firstPage';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBlw4UhthCXxjD7gZxdeJGkvBNZEV33mYQ",
    authDomain: "simplepassword-89a27.firebaseapp.com",
    databaseURL: "https://simplepassword-89a27.firebaseio.com",
    projectId: "simplepassword-89a27",
    storageBucket: "simplepassword-89a27.appspot.com",
    messagingSenderId: "370145099892"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
AppRegistry.registerComponent('NovoProjeto', () => App);
