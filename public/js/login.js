// Initialize Firebase
var config = {
  apiKey: "AIzaSyAMSMRy70ebQVjud8ka4356YPorrb4FYHY",
  authDomain: "reel-talk-app.firebaseapp.com",
  databaseURL: "https://reel-talk-app.firebaseio.com",
  projectId: "reel-talk-app",
  storageBucket: "reel-talk-app.appspot.com",
  messagingSenderId: "76965363317"
};
firebase.initializeApp(config);

// eslint-disable-next-line no-unused-vars
function googleSignIn() {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      console.log(result);
      console.log("Google account successfully linked!");
    })
    .catch(function(err) {
      console.log(err);
      console.log("login failed");
    });
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log(user.uid);
  }
});
