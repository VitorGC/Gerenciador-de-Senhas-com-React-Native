/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! Ual "
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js Heheh
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/

import React from 'react';
import {Text, View} from 'react-native';

import { TabNavigator } from "react-navigation";

import EmpresasScreen from './tabs/EmpresasScreen';
import TelaEmpresasScreen from './tabs/TelaEmpresasScreen';
import ListViewScreen from './tabs/ListView';
import QRCodeScreen from './tabs/QRCode';
import UserScreen from './tabs/UserScreen';


var MainScreenNavigator = TabNavigator({
    Tab1: {screen: EmpresasScreen},
    Tab2: {screen: TelaEmpresasScreen},
    Tab3: {screen: ListViewScreen},
    Tab4: {screen: UserScreen},
    Tab5: {screen: QRCodeScreen},
},{
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    //animationEnabled: true,
    //backBehavior: 'initialRoute',
    tabBarHidden: true, // make the tab bar hidden
    //tabBarButtonColor: '#ffff00', // change the color of the tab icons and text (also unselected)
    //tabBarSelectedButtonColor: '#ff9900', // change the color of the selected tab icon and text (only selected)
    //tabBarBackgroundColor: '#551A8B', // change the background color of the tab bar
    //tabBarTranslucent: true, // change the translucent of the tab bar to false
    //tabBarTextFontFamily: 'Avenir-Medium', //change the tab font family
    //tabBarLabelColor: '#ffb700', // iOS only. change the color of tab text
    //tabBarSelectedLabelColor: 'red', // iOS only. change the color of the selected tab text
    //forceTitlesDisplay: true, // Android only. If true - Show all bottom tab labels. If false - only the selected tab's label is visible.
    //tabBarHideShadow: true, // iOS only. Remove default tab bar top shadow (hairline)
    tabBarOptions: {
        activeTintColor: 'white',
        activeBackgroundColor: 'darkgreen',
        inactiveTintColor: 'black',
        inactiveBackgroundColor: 'green',
        showIcon: true,
        labelStyle: {
            fontSize: 12,
            padding: 0,
            height: 13,
            position: 'absolute'
        },
        style: {
            backgroundColor: 'rgba(121, 85, 72, 0.1)',
            shadowColor: 'black',
            opacity: 0.5,
            shadowOpacity: 0.1,
            shadowRadius: 0.5,
            shadowOffset:{
                height: 0.5,
            },
            //display: 'none',
        },
    }
});

MainScreenNavigator.navigationOptions = {
    title: "Voltar  "
};

export default MainScreenNavigator;