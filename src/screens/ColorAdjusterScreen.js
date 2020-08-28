import React, { useState } from "react";
import { Text, Image, FlatList, StyleSheet, View, Button } from "react-native";
import ColorAdjusterButtons from './ColorAdjusterButtons';

const ColorAdjusterScreen = () => {

  const [red, updateRed] = useState(110);
  const [green, updateGreen] = useState(210);
  const [blue, updateBlue] = useState(130);

  return (
    <View style={{ padding: 10 }}>
      <Text style={{fontWeight: 'bold', paddingBottom: 20}}>Colors adjuster useState example , click buttons below to change RGB </Text>

      <ColorAdjusterButtons color="Red" handler={updateRed} currentColorValue={red}/>
      <ColorAdjusterButtons color="Green" handler={updateGreen} currentColorValue={green}/>
      <ColorAdjusterButtons color="Blue" handler={updateBlue} currentColorValue={blue}/>
      
      <View style={{padding: 10, width:200, height: 80, backgroundColor: `rgb(${red},${green},${blue})`}}>
        <Text>RGB: {`rgb(${red},${green},${blue})`}</Text>
      </View>
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

export default ColorAdjusterScreen;
