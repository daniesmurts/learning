import React, { useState }from 'react';
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    const [name, setName] =useState('');


    return (
        <View>
            <Text>Enter Password</Text>
            <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setName(newValue) }
            />
            {name.length < 4 ? <Text>Must be longer than 4 characters</Text> : null }
        </View>
    

    );
};

const styles = StyleSheet.create({
    input: {
            margin: 15,
            borderColor: 'maroon',
            borderWidth: 2,
            borderRadius:7,
            height:50
    }

});

export default TextScreen;