import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/login-form';

class App extends Component {
    /*
        Use lifecycle method for firebase config, before app is rendered.
    */
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDn42UXaXnYi5r08wMuDS-YmQEk57aCQsw',
            authDomain: 'react-native-auth-1ea19.firebaseapp.com',
            databaseURL: 'https://react-native-auth-1ea19.firebaseio.com',
            storageBucket: 'react-native-auth-1ea19.appspot.com',
            messagingSenderId: '939471548555'
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
