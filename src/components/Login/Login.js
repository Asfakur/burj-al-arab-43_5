
import firebase from "firebase/app";
import React, { useContext } from 'react';
import "firebase/auth";
import firebaseConfig from './firebase.config';


const Login = () => {
    firebase.initializeApp(firebaseConfig);
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                console.log(user);
            }).catch((error) => {
                
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handleGoogleSignIn}>Google Sign in</button>
        </div>
    );
};

export default Login;