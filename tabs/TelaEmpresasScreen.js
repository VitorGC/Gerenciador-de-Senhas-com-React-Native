
import React, { Component } from 'react';
import {
    Alert,
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    View,
    ScrollView,
    Image,
    Button,
    ImageBackground,
} from 'react-native';

export default class TelaEmpresasScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Registros   ',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../Img/Registro.png')}
                style={{width: 22, height: 22, tintColor: 'white'}}>
            </Image>
        )
    }

    _onPressButton() {
        Alert.alert('Selecionou a Empresa!')
    }

    _onLongPressButton() {
        Alert.alert('Detalhes da Empresa!')
    }


    render() {
        return (
            <View style= {styles.container}>
                <ImageBackground source={require('../Img/BackGround.jpg')} style={styles.backgroundImage}>
                    <View style={styles.content}>
                        <ScrollView>
                            <Text style={styles.logo}> - SIMPLEPASS - </Text>
                            <Text style={styles.logo2}> - Registros - </Text>
                            <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton}
                                                underlayColor="white">
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>Univem   </Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton}
                                                underlayColor="white">
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>Unimar   </Text>
                                    <Image source={require('../Img/Seta.png')} style={styles.setaImage}/>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton}
                                                underlayColor="white">
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>Burguer's   </Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton}
                                                underlayColor="white">
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>Mercado São José   </Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton}
                                                underlayColor="white">
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>Casa de Carnes Alvorada   </Text>
                                </View>
                            </TouchableHighlight>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
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
    button: {
        marginBottom: 30,
        //width: 260,
        height: 50,
        alignItems: 'center',
        backgroundColor: '#2196F3',
        justifyContent: 'center',
    },
    buttonText: {
        padding: 20,
        color: 'white',
    },
    FonteNova: {
        textAlign: 'center',
        fontFamily: 'sans-serif'
    },
    setaImage: {
        width: 22,
        height: 22,
        tintColor: 'white',
        marginLeft:30,
    },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Touchables);