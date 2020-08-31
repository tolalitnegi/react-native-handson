import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View style={{ padding: 20, backgroundColor: 'rgb(200, 200, 200)' }} >

      <Text style={styles.text}>Home: Click one of the button below </Text>

      <Button title="See Components" onPress={() => {
        console.log('....button pressed');
        props.navigation.navigate('components');
      }} />

      <TouchableOpacity onPress={() => {
        console.log('....touchable opacity pressed');
        props.navigation.navigate('list');
      }} >
        <Text style={styles.text}>Tab to see List </Text>
      </TouchableOpacity>

      <Button title="Counter State Example" onPress={() => {
        props.navigation.navigate('stateHooks');
      }} />

      <Button title="Color State Example" onPress={() => {
        props.navigation.navigate('colors');
      }} />
      <Button title="Color Adjuster Example" onPress={() => {
        props.navigation.navigate('colorAdjuster');
      }} />

      <Button title="Color Adjuster Redux Example" onPress={() => {
        props.navigation.navigate('colorsRedux');
      }} />

      <Button title="TextInput Example" onPress={() => {
        props.navigation.navigate('textInput');
      }} />

      <Button title="Layout Example" onPress={() => {
        props.navigation.navigate('layout');
      }} />



    </View>);

};

const styles = StyleSheet.create({
  text: {
    fontSize: 15
  }
});

export default HomeScreen;
