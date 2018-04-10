
import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, ScrollView, Image, Button } from 'react-native';

export default class TelaEmpresasScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Empresas   ',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../Img/Empresas.png')}
                style={{width: 22, height: 22, tintColor: 'white'}}>
            </Image>
        )
    }

    _onPressButton() {
        Alert.alert('Selecionou a Empresa!')
    }

    _onLongPressButton() {
        Alert.alert('Detalhes da Aplicação!')
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>

                    <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableHighlight</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableOpacity onPress={this._onPressButton}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableOpacity</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableWithoutFeedback
                        onPress={this._onPressButton}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton}
                                        underlayColor="white">
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Touchable with Long Press</Text>
                        </View>
                    </TouchableHighlight>

                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 50,
                        marginLeft: 10,
                        marginRight: 10
                    }}>
                        <Text style={styles.FonteNova}>'Finalmente Barry'</Text>
                        <Text style={styles.FonteNova}>Corre Barry, Corre!</Text>
                        <Text style={styles.FonteNova}>Vamos Barry, Corre!</Text>
                        <Text style={styles.FonteNova}>Now!</Text>
                        <Text style={styles.FonteNova}>Now! Vamos Barry, Corre! Corre Barry, Corre! 'Finalmente Barry' !!!!!</Text>
                    </View>
                </View>
            </ScrollView>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    },
    FonteNova: {
        textAlign: 'center',
        fontFamily: 'sans-serif'
    }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Touchables);