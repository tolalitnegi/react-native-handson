import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  return (
    <View style={{backgroundColor: "red", padding: 10}}>
    <Text style={styles.textStyles}>Hello golu its an app built in react native</Text>
    <Image source={require("../../assets/mountain.jpeg")} />
  </View>
  );
}

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 20,
    color: "white",
    padding: 3
  }
});

export default ComponentsScreen;
