import React, { Component } from 'react';

import {
    Text,
    View,
    Button,
    Image,
    ScrollView,
    ImageBackground,
    AppRegistry,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
} from 'react-native';

import RadioButton from 'radio-button-react-native';
import DatePicker from 'react-native-datepicker';

export default class CadastroScreen extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            value: 0
        },{
            date: "2000-01-01"
        }

    }

    handleOnPress(value){
        this.setState({value:value})
    }

    static navigationOptions = {
        tabBarLabel: 'Empresas   ',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../Img/Empresas.png')}
                style={{width: 22, height: 22, tintColor: 'white'}}>
            </Image>
        )
    }

    render(){
        return (

            <View style= {styles.container}>
                <ImageBackground source={require('../Img/BackGround.jpg')} style={styles.backgroundImage}>
                    <View style={styles.content}>
                        <ScrollView>
                            <Text style={styles.logo}> - SIMPLEPASS - </Text>
                            <Text style={styles.logo2}> - Cadastro - </Text>

                            <View style={styles.inputContainer}>
                                <TextInput underLineColorAndroid='transparent' style={styles.input}
                                           placeholder='Nome'>
                                </TextInput>

                                <TextInput underLineColorAndroid='transparent' style={styles.input}
                                           placeholder='Email'>
                                </TextInput>

                                <TextInput SecureTextEntry={true} underLineColorAndroid='transparent' style={styles.input}
                                           placeholder='Password'>
                                </TextInput>

                                <TextInput SecureTextEntry={true} underLineColorAndroid='transparent' style={styles.input}
                                           placeholder='Confirm Password'>
                                </TextInput>

                                <TextInput underLineColorAndroid='transparent' style={styles.input}
                                           placeholder='Cel. (XX) X - XXXX - XXXX'>
                                </TextInput>

                                <View style={styles.radiusB}>
                                    <Text>Sexo</Text>
                                    <RadioButton currentValue={this.state.value} value={0} onPress={this.handleOnPress.bind(this)}>
                                        <Text>Masculino  </Text>
                                    </RadioButton>

                                    <RadioButton currentValue={this.state.value} value={1} onPress={this.handleOnPress.bind(this)}>
                                        <Text>Feminino  </Text>
                                    </RadioButton>
                                </View>

                                <DatePicker
                                    style={{width: 200}}
                                    date={this.state.date}
                                    mode="date"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    minDate="1900-01-01"
                                    maxDate="2018-04-12"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 36
                                        }
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => {this.setState({date: date})}}
                                />

                                <TouchableOpacity onPress={ () => this.props.navigation.navigate('LoginScreen')} style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>Confirmar</Text>
                                </TouchableOpacity>

                            </View>
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
    radiusB: {
        marginBottom:10,
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
        alignItems: 'center',
    },

})

AppRegistry.registerComponent('Cadastro', () => cadastro);