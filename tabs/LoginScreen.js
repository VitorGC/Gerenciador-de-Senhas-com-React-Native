import React, { Component } from 'react';

import {
    Text,
    View,
    Button,
    Image,
    ImageBackground,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    AsyncStorage,

} from 'react-native';

import {
    StackNavigator
} from 'react-navigation';

import CadastroScreen from './CadastroScreen.js'

export default class LoginScreen extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'Login "',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../Img/Home.png')}
                style={{width: 22, height: 22, tintColor: 'white'}}>
            </Image>
        ),
    }
    render(){
        return (

            <View style= {styles.container}>
                <ImageBackground source={require('../Img/BackGround.jpg')} style={styles.backgroundImage}>
                    <View style={styles.content}>
                        <Text style={styles.logo}> - SIMPLEPASS - </Text>

                        <View style={styles.inputContainer}>
                            <TextInput underLineColorAndroid='transparent' style={styles.input}
                                placeholder='Email'>
                            </TextInput>

                            <TextInput SecureTextEntry={true} underLineColorAndroid='transparent' style={styles.input}
                                placeholder='Password'>
                            </TextInput>
                        </View>

                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Menu')} style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>

                        <Text style={styles.forgotText}> Esqueceu seus dados de login?   </Text>
                        <TouchableOpacity onPress={ () => null}>
                            <Text style={styles.forgotTextNegri}> Obtenha ajuda para entrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.login} style={styles.buttonFaceContainer}>
                            <Text style={styles.buttonText}>Entrar com o Facebook</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.login} style={styles.buttonGoogleContainer}>
                            <Text style={styles.buttonText}>Entrar com o Google</Text>
                        </TouchableOpacity>

                        <Text style={styles.forgotText}>Não tem uma conta?   </Text>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('CadastroScreen')}>
                            <Text style={styles.forgotTextNegri}>Cadastre-se. </Text>
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
            </View>

        )
    }
}

const styles = StyleSheet.create({
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
    inputContainer: {
        margin: 20,
        marginBottom: 0,
        padding: 20,
        paddingBottom: 10,
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    input: {
        fontSize: 16,
        height: 40,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,1)',
    },
    buttonContainer: {
        alignSelf: 'stretch',
        margin: 20,
        padding: 20,
        height: 25,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.6)',
        justifyContent:'center',
    },
    buttonFaceContainer:{
        alignSelf: 'stretch',
        margin: 10,
        padding: 20,
        height: 25,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'rgba(0,0,255,0.8)',
        justifyContent:'center',
    },
    buttonGoogleContainer: {
        alignSelf: 'stretch',
        margin: 10,
        padding: 20,
        height: 25,
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,0,0,0.8)',
        justifyContent:'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        //color: '#ffffff',
    },
    forgotTextNegri: {
        fontSize: 14,
        fontWeight: 'bold',
        flexDirection:'row',
        textAlign: 'center',
    },
    forgotText: {
        fontSize: 14,
        flexDirection:'row',
        textAlign: 'center',
    }

})
