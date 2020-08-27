import React, { useState } from "react";
import { Text, Image, StyleSheet, View, Button } from "react-native";

const CounterStateScreen = () => {

  const [counter, changeCounter ] = useState(0);

  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.textStyles}>Counter value is : {counter}</Text>

      <Button style={styles.textStyles} title="Increment" onPress={() => {
        changeCounter(counter +5);
      }} />

      <Button style={styles.textStyles} title="Decrement" onPress={() => {
        changeCounter(counter-5);
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white",
    padding: 10
  }
});

export default CounterStateScreen;
