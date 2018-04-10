import React from 'react';

import {Text, View, Button, Image} from 'react-native';

export default class LoginScreen extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'Login "',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../Img/Home.png')}
                style={{width: 22, height: 22, tintColor: 'white'}}>
            </Image>
        )
    }
    render(){
        return <View Style={
        {
            flex:1,
            justifyContent: 'center',
            alingItens: 'center'
        }
            }>
            <Text style={{fontSize:30}}>
                This is Tab 1
            </Text>

        </View>
    }
}