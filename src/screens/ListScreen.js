import React from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: 22},
        {name: 'Friend #2', age: 22},
        {name: 'Friend #3', age: 22},
        {name: 'Friend #4', age: 22},
        {name: 'Friend #5', age: 22},
        {name: 'Friend #6', age: 22},
        {name: 'Friend #7', age: 22},
        {name: 'Friend #8', age: 22},
        {name: 'Friend #9', age: 22}
    ];
    return( 
    <FlatList 
    // horizontal
    // showsHorizontalScrollIndicator={false}
    keyExtractor={(friend)=> friend.name}
    data={friends} 
    renderItem={({item})=> {
        return <Text style={styles.textStyle}>{item.name} - Age:{item.age}</Text>

    }} 
    /> 
    );


    return <Text> List Screen </Text>
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;