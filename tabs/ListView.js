import React from 'react';
import {
    View,
    ListView,
    StyleSheet,
    Text,
    Button,
    Image,
    ScrollView,
    ImageBackground,
} from 'react-native';
import demoData from './TabListView/Data';
import Row from './TabListView/Row';
import Header from './TabListView/Header';
import Footer from './TabListView/Footer';
import SectionHeader from './TabListView/SectionHeader';

export default class ListViewScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'ListView   ',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../Img/Empresas.png')}
                style={{width: 22, height: 22, tintColor: 'white'}}>
            </Image>
        )
    }

    constructor(props) {
        super(props);

        const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
        const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
            getSectionData,
            getRowData,
        });

        const { dataBlob, sectionIds, rowIds } = this.formatData(demoData);
        this.state = {
            dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds),
        };
    }

    formatData(data) {
        // We're sorting by alphabetically so we need the alphabet
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

        // Need somewhere to store our data
        const dataBlob = {};
        const sectionIds = [];
        const rowIds = [];

        // Each section is going to represent a letter in the alphabet so we loop over the alphabet
        for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {
            // Get the character we're currently looking for
            const currentChar = alphabet[sectionId];

            // Get users whose first name starts with the current letter
            const users = data.filter((user) => user.name.first.toUpperCase().indexOf(currentChar) === 0);
            if (users.length > 0) {
                // Add a section id to our array so the listview knows that we've got a new section
                sectionIds.push(sectionId);

                // Store any data we would want to display in the section header. In our case we want to show
                // the current character
                dataBlob[sectionId] = { character: currentChar };

                // Setup a new array that we can store the row ids for this section
                rowIds.push([]);

                // Loop over the valid users for this section
                for (let i = 0; i < users.length; i++) {
                    // Create a unique row id for the data blob that the listview can use for reference
                    const rowId = `${sectionId}:${i}`;

                    // Push the row id to the row ids array. This is what listview will reference to pull
                    // data from our data blob
                    rowIds[rowIds.length - 1].push(rowId);

                    // Store the data we care about for this row
                    dataBlob[rowId] = users[i];
                }
            }
        }

        return { dataBlob, sectionIds, rowIds };
    }

    render() {
        return (
            <View style= {styles.container}>
                <ImageBackground source={require('../Img/BackGround.jpg')} style={styles.backgroundImage}>
                    <View style={styles.content}>
                        <ScrollView>
                            <Text style={styles.logo}> - SIMPLEPASS - </Text>
                            <Text style={styles.logo2}> - Empresas - </Text>
                            <ListView
                            style={styles.container}
                            dataSource={this.state.dataSource}
                            renderRow={(data) => <Row {...data} />}
                            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                            renderHeader={() => <Header />}
                            renderFooter={() => <Footer />}
                            renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
                            />
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
        marginTop: 20,
    },separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
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
