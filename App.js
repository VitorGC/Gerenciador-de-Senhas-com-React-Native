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
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
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

/*import React, { Component } from 'react';
import {
    StyleSheet,
    AppRegistry,
    TextInput,
    Button,
    Text,
    View
} from 'react-native';

export default class UselessTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

    render() {
        return (

            <View style={
                {
                    justifyContent: 'center'
                }
            }>

                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, alignItems: 'center',}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
            </View>

        );
    }
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
//AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------


/*import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press Me"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press Me"
                        color="#841584"
                    />
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="This looks great!"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="OK!"
                        color="#841584"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------


import React, { Component } from 'react';
import {
        Alert,
        AppRegistry,
        Image,
        Platform,
        ScrollView,
        StyleSheet,
        Text,
        TextInput,
        TouchableHighlight,
        TouchableOpacity,
        TouchableNativeFeedback,
        TouchableWithoutFeedback,
        View
    } from 'react-native';

import { Card, ListItem, Button } from 'react-native-elements';

export default class Touchables extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    _onLongPressButton() {
        Alert.alert('You long-pressed the button!')
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>

                    <Card title="Empresas" >
                        {
                            users.map((u, i) => {
                                return (
                                    <View key={i} style={styles.user}>
                                        <TouchableOpacity onPress={this._onPressButton}>
                                            <View style={styles.buttonList}>
                                                <Image
                                                    style={styles.image}
                                                    //resizeMode="cover"
                                                    source={{ uri: u.avatar }}
                                                />
                                                <Text style={styles.name}>{u.name}
                                                </Text><Image
                                                style={styles.image}
                                                //resizeMode="cover"
                                                source={{ uri: u.avatar }}
                                                />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                );
                            })
                        }
                    </Card>

                    <Card title="CARD WITH DIVIDER">
                        {
                            users.map((u, i) => {
                                return (
                                    <View key={i} style={styles.user}>
                                        <TouchableOpacity onPress={this._onPressButton}>
                                            <View style={styles.button}>
                                                <Text style={styles.buttonText}>TouchableOpacity</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                );
                            })
                        }
                    </Card>

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
                        <Text style={styles.FonteNova}>Yes Mans</Text>
                        <Text style={styles.FonteNova}>We did't</Text>
                        <Text style={styles.FonteNova}>We did't</Text>
                        <Text style={styles.FonteNova}>We did ITTTTTTTTTTTT</Text>
                    </View>
                </View>
            </ScrollView>

        );
    }
}
const styles = StyleSheet.create({

    name:{
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'sans-serif'
    },
    image:{
        width: 50,
        height: 50,
        backgroundColor: '#2196F3',
    },
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
    buttonList: {
        marginBottom: 30,
        width: 260,
        height: 50,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 4,
        flexDirection: 'row',
        flex: 1,
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

const users = [
    {
        name: 'Univem',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'Unimar',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'Unesp',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    }
    //...more users here
]

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Touchables);