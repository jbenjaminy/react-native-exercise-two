import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

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
                <Text>App!</Text>
            </View>
        );
    }
}

export default App;
