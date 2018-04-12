import React, { Component } from 'react';

import {
    Text,
    View,
    Button,
    Image,
    ImageBackground,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import ToggleSwitch from 'toggle-switch-react-native';

import Slider from "react-native-slider";

export default class EmpresasScreen extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'User   ',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../Img/Persona.png')}
                style={{width: 22, height: 22, tintColor: 'white'}}>
            </Image>
        )
    }

    state = {
        value1: 0.0,
        value2: 0.0
    };

    onToggle(isOn){
        alert('Changed to ' + isOn)
    }

    render(){
        return (
            <View style= {styles.container}>
                <ImageBackground source={require('../Img/BackGround.jpg')} style={styles.backgroundImage}>
                    <View style={styles.content}>
                        <ScrollView>
                            <Text style={styles.logo}> - SIMPLEPASS - </Text>
                            <Text style={styles.logo2}> - Configurações - </Text>

                            <View style={styles.containerSlider}>
                                <Slider
                                    value1={this.state.value1}
                                    onValueChange={value1 => this.setState({ value1 })}
                                />
                                <Text>
                                    Value1: {this.state.value1}
                                </Text>
                            </View>

                            <View style={styles.containerSlider}>
                                <Slider
                                    value2={this.state.value2}
                                    onValueChange={value2 => this.setState({ value2 })}
                                />
                                <Text>
                                    Value2: {this.state.value2}
                                </Text>
                            </View>

                            <ToggleSwitch onToggle={this.onToggle} onColor="#2196F3" size="medium" label="Promoções   " />

                            <TouchableOpacity onPress={ () => this.props.navigation.navigate('LoginScreen')} style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Apagar Registros   </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={ () => this.props.navigation.navigate('LoginScreen')} style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Sair</Text>
                            </TouchableOpacity>
                        </ScrollView>
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
    containerSlider: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "stretch",
        justifyContent: "center",
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
    buttonContainer: {
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
        marginBottom: 20,
        textShadowColor: '#252525',
        textShadowOffset: {width: 4, height: 4},
        textShadowRadius: 20,
        marginBottom: 5,
    },
})