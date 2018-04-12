'use strict';

import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    Button,
    Image,
    View,
    ScrollView,
    ImageBackground,
} from 'react-native';

//import QRCodeScanner from 'react-native-qrcode-scanner';

export default class QRCodeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'QRCode   ',
        tabBarIcon: ({tintColor}) => (
            <Image
            source={require('../Img/QRCode.png')}
            style={{width: 22, height: 22, tintColor: 'white'}}>
            </Image>
        )
    }
    onSuccess(e) {
        Linking
            .openURL(e.data)
            .catch(err => console.error('An error occured', err));
    }

    render() {
        return (
            <View style= {styles.container}>
                <ImageBackground source={require('../Img/BackGround.jpg')} style={styles.backgroundImage}>
                    <View style={styles.content}>
                        <ScrollView>
                            <Text style={styles.logo}> - SIMPLEPASS - </Text>
                            <Text style={styles.logo2}> - QRCode - </Text>
                                //<QRCodeScanner
                                    //onRead={this.onSuccess.bind(this)}
                                    topContent={
                                        <Text style={styles.centerText}>
                                            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
                                        </Text>
                                    }
                                    bottomContent={
                                        <TouchableOpacity style={styles.buttonTouchable}>
                                            <Text style={styles.buttonText}>OK. Got it!</Text>
                                        </TouchableOpacity>
                                    }
                                />
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
    },
    logo: {
        color: 'white',
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
        marginBottom: 20,
    },
    logo2: {
        color: 'white',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 4, height: 4},
        textShadowRadius: 20,
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('default', () => QRCodeScreen);