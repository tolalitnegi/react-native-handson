import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorAdjusterButton = ({ color, handler, currentColorValue }) => {

  return (
    <View style={{ padding: 10 }}>
      <Text>Update {color}</Text>
      <Button title={`More ${color}`} onPress={() => {
        if (currentColorValue !== 256) {
          console.log('clicked more button' + color + currentColorValue + handler  );
          handler(currentColorValue + 1);
        }
      }} />
      <Button title={`Less ${color}`} onPress={() => {
        if (currentColorValue !== 0) {
          handler(currentColorValue - 1);
        }
      }} />
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

export default ColorAdjusterButton;
