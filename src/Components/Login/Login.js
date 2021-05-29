import React from 'react';
import logo from '../../Images/logos/logo.png';
import firebaseConfig from './FirebaseConfig';
import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from 'react';

import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import btn from '../../Images/icons/google-btn.png';


const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loginUser, setLoginUser] = useContext(UserContext);
    console.log(loginUser);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, img: photoURL }
                setLoginUser(signedInUser);
                authToken();

            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);

            });
    }

    const authToken = () => {
        firebase.auth().currentUser.getIdToken()
            .then((idToken) => {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            })
            .catch((error) => {
                // Error occurred.
            });
    }

    return (
        <div className="text-center mt-5">
            <img style={{ height: '50px' }} src={logo} alt="" />
           
            <div class="card offset-md-4 mt-5"  style={{width: "30rem", height:"22rem"}}>
                <div class="card-body">
                    <h2 class="card-title mt-5">Login With</h2>
                  
                    
                    <button className="btn btn-outline-secondary mt-5 w-75 rounded-pill"  onClick={handleGoogleSignIn}>
                    <img style={{height:'25px', marginLeft:'-90px'}} src={btn} alt=""/> <span className="ms-5">Continue with Google</span></button>
                    
                    <h6 class="card-subtitle mb-2 text-muted mt-5">Don't have an account? 
                     <a className="ms-2" href="#">Create an account</a> </h6>
                </div>
            </div>
        </div>
    );
};

export default Login;