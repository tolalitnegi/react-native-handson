import React, { useState } from "react";
import { Text, Image, FlatList, StyleSheet, View, Button } from "react-native";

const ColorStateScreen = () => {

  const [colors, newColorsArray] = useState([]);

  return (
    <View style={{ backgroundColor: "rgb(2,29,32)", padding: 10 }}>

      <Button title="Add Color" onPress={() => {
        newColorsArray([...colors, `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`]);
      }} />
      {/* {
      colors.map((color) => {
        return (<View key={color} style={{ backgroundColor: color, padding: 20 }}><Text>{color}</Text></View>);
      })
      } */}

      <FlatList 
        data = {colors}
        vertical
        keyExtractor ={ color => color }
        renderItem={(colorItem)=>{
          return <View key={colorItem.item} style={{ backgroundColor: colorItem.item, padding: 20 }}><Text>Color RGB IS: {colorItem.item}</Text></View>
        }}
      />


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

export default ColorStateScreen;
