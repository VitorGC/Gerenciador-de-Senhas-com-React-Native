import React, { Component } from 'react';

import {
    Text,
    View,
    AppRegistry,
    StyleSheet,
} from 'react-native';

import {
    Navigator,
} from 'react-navigation';

import Login from  './tabs/LoginScreen';

export default class loginInit extends React.Component{

    render(){
        return (

            <Navigator initialRoute = {{id: 'LOGINSCREEN'}}
            renderScene = {this.navigatorRenderScene} />

        );
    }

    navigatorRenderScene(route, navigator) {
        _navigator = navigator;
        switch (route.id){
            case 'LOGINSCREEN':
                //return ( <Login navigator = {navigator} />);
                return <Login />
        }
    }
}

AppRegistry.registerComponent('loginInit', () => loginInit)