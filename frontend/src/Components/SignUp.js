import React, { useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';



import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from 'firebase/app';

export default function SignUp() {

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


    const [users, setUsers] = useState({
        emailId: "",
        name: "",
        userName: "",
        password: ""
    })

    const { emailId, name, userName, password } = users

    const onInputChange = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
    }
    const newSignUp = () => {

        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, emailId, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                let payload = {
                    userId: user.uid,
                    userName: userName,
                    name: name,
                    profileImage: "www.devil.com/testing"
                }

                axios.post("http://localhost:8080/user", payload)
                    .then(response => response.json())
                    .then(data => {
                        localStorage.setItem("users", JSON.stringify(user));
                        window.location.reload();
                    })
                    .catch(error => {

                    })

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

        setUsers("")
    }

    return (
        <div>
            {/* 1. 1st way of targeting value of input field--onChnage event using setState func above */}
            {/* <input className='loginpage_text' onChange={this.provideEmail} type='text' name='emailId' value={this.state.emailId} placeholder='Mobile number, or email' /> */}

            {/* 2. 2nd way of targeting value of input field--onChnage event using currentTarget above */}
            {/* <input className='loginpage_text' onChange={this.provideEmail} type='text' placeholder='Mobile number, or email' /> */}

            {/* 3. 3rd way-- use "inline-function"--instead of creating func(provideEmail) for onChnage event  */}
            <input className='loginpage_text' onChange={onInputChange} name='emailId' type='text' placeholder='Mobile number, or email' />

            <input className='loginpage_text' onChange={onInputChange} name='userName' type='text' placeholder='Username' />
            <input className='loginpage_text' onChange={onInputChange} name='name' type='text' placeholder='Full Name' />
            <input className='loginpage_text' onChange={onInputChange} name='password' type='password' placeholder='Password' />
            {/* <button type='button' className='loginpage_button' onClick={newSignUp}>Sign Up</button> */}
            <Button variant="contained" className='loginpage_button' onClick={newSignUp}>Sign Up</Button>
        </div>
    )
}
