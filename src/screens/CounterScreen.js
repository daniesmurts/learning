import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) =>
{
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + action.payload}
        case 'decrement':
            return {...state, count: state.count - action.payload}
    
        default:
            return state;
    }
}
const CounterScreen =() => {

    const [state, dispatch] = useReducer (reducer,{count: 0})

    return(
        <View>
            <Button  title="+" onPress={ () =>{
                //dont do this
                //counter++;
                dispatch({type: 'increment', payload: 150})

            }}/>
            <Button title="-" onPress={ () =>{
                //dont do this
                //counter--;
                dispatch({type: 'decrement', payload: 150})
            }}/>
            <Text style={styles.pText}>Current Count: {state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    pText:{
        textAlign: "center",
        fontWeight: "bold",
        marginTop:50
    },

});

export default CounterScreen;