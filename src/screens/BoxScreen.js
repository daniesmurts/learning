import React from 'react';
import { Text, View, StyleSheet } from "react-native";


const BoxScreen =() => {
    return(
        <View style={styles.viewStyle}>
            <View style={styles.textOneStyle}/>
            <View style={styles.textTwoStyle}/>
            <View style={styles.textThreeStyle}/>
        </View>

    );
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: 'black',
        height: 120,
        
    },
    textOneStyle:{
        borderWidth: 3,
        borderColor: "#823E28",
        backgroundColor: "#823E28",
        height:40,
        width:40,
        alignSelf: 'flex-end',
        
    
    },
    textTwoStyle:{
        borderWidth: 3,
        borderColor: "#e7d7c6",
        backgroundColor: "#e7d7c6",
        flex:1,
        height:40,
        width:40,
        position:'absolute'
    
    },
    textThreeStyle:{
        borderWidth: 3,
        borderColor: "#444741",
        backgroundColor: "#444741",
        height:40,
        width:40,
        alignSelf: 'center',
    
    }


});

export default BoxScreen;