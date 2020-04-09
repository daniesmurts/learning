import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const MyName = 'Smurts';

const ComponentsScreen = () => {
    return (
    <View>
    <Text style ={styles.textStyle}>Getting started with react native!</Text>
    <Text style ={styles.subHeader}> My name is {MyName} </Text>
    </View>
    );
};


const styles = StyleSheet.create ({
    textStyle: {
        fontSize: 45
    },
    subHeader: {
        fontSize: 20
    }
});


export default ComponentsScreen;