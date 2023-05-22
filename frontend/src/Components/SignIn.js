import React, { Component } from 'react'
import Button from '@mui/material/Button';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    //All these are from project setting when u ll register ur app on firebase
    apiKey: "AIzaSyB0HEYMJJR9t2f9tUbjBXQhReDhBcW5HWA",
    authDomain: "instaclone-41096.firebaseapp.com",
    projectId: "instaclone-41096",
    storageBucket: "instaclone-41096.appspot.com",
    messagingSenderId: "1029164283626",
    appId: "1:1029164283626:web:e64e55dc51455ae4c94993"
};

const app = initializeApp(firebaseConfig);

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: null,
            password: null
        }
    }

    login = () => {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, this.state.emailId, this.state.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                localStorage.setItem("users", JSON.stringify(user));
                window.location.reload();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }



    render() {
        return (
            <div>
                <input className='loginpage_text' onChange={(event) => { this.state.emailId = event.currentTarget.value; }} type='text' placeholder='Phone number, username, or email' />
                <input className='loginpage_text' onChange={(event) => { this.state.password = event.currentTarget.value; }} type='password' placeholder='Password' />
                {/* <button className='loginpage_button' onClick={this.login}>Log In</button> */}
                <Button variant="contained" className='loginpage_button' onClick={this.login}>Log In</Button>

            </div>
        )
    }
}
