import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorAdjusterReduxButton = ({ color, handler, currentColorValue }) => {

  return (
    <View style={{ padding: 10 }}>
      <Text>Update {color}</Text>
      <Button title={`More ${color}`} onPress={() => {
        handler({ type: 'increment', incrementBy: 15, color: color.toLowerCase() });

      }} />
      <Button title={`Less ${color}`} onPress={() => {
        handler({ type: 'decrement', decrementBy: 15, color: color.toLowerCase() });
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

export default ColorAdjusterReduxButton;
