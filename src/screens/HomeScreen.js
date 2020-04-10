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
  <Button 
  onPress={()=> navigation.navigate('Image')} title="Images" />
  <Button 
  onPress={()=> navigation.navigate('Counter')} title="Counter" />
  <Button 
  onPress={()=> navigation.navigate('Color')} title="Color Screen" />
  <Button 
  onPress={()=> navigation.navigate('Sqaure')} title="Sqaure" />
  </View>
  
  );
  };

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20
  }
});

export default HomeScreen;
