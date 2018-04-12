import React from 'react';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import {
    StackNavigator
} from 'react-navigation';

import LoginScreen from './tabs/LoginScreen';
import CadastroScreen from './tabs/CadastroScreen';
import Menu from './Menu';

export default class App extends React.Component{
    render() {
        return (
            <AppNavigator />
        );
    }
}

const AppNavigator = StackNavigator({
    LoginScreen: { screen: LoginScreen },
    CadastroScreen: { screen: CadastroScreen },
    Menu: {screen: Menu},
},
    {
        mode: 'modal',
        headerMode: 'none',
    })