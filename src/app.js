import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/login-form';

class App extends Component {
    /*
        Use lifecycle method for firebase config, before app is rendered.
        Set FIREBASE_* in a local .env (see .env.example). Do not commit real keys.
    */
    componentWillMount() {
        firebase.initializeApp({
            apiKey: process.env.FIREBASE_API_KEY || 'YOUR_FIREBASE_API_KEY',
            authDomain: process.env.FIREBASE_AUTH_DOMAIN || 'YOUR_PROJECT.firebaseapp.com',
            databaseURL: process.env.FIREBASE_DATABASE_URL || 'https://YOUR_PROJECT.firebaseio.com',
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET || 'YOUR_PROJECT.appspot.com',
            messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || 'YOUR_MESSAGING_SENDER_ID'
        });
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <LoginForm />
            </View>
        );
    }
}

export default App;
