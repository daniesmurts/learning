import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  
  
  return (
  <View>
  <Text style={styles.text}>Hello World</Text>
  <Button 
  onPress={()=> navigation.navigate('Components') }
  title="Components" />
  <Button 
  onPress={()=> navigation.navigate('List')} title="Lists" />
  </View>
  );
  };

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
