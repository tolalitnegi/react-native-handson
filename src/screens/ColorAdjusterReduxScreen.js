import React, { useReducer } from "react";
import { Text, Image, FlatList, StyleSheet, View, Button } from "react-native";
import ColorAdjusterReduxButtons from './ColorAdjusterReduxButtons';


const reducer = (state, action) => {
  switch (action.color) {
    case "red":
      if (action.type === 'increment') {
        return { ...state, red: state.red + action.incrementBy }
      }
      return { ...state, red: (state.red - action.decrementBy) }
    case "green":
      if (action.type === 'increment') {
        return { ...state, green: state.green + action.incrementBy }
      }
      return { ...state, green: (state.green - action.decrementBy) }
    case "blue":
      if (action.type === 'increment') {
        return { ...state, blue: state.blue + action.incrementBy }
      }
      return { ...state, blue: (state.blue - action.decrementBy) }
    default:
      return state;
  }
}
const ColorAdjusterReduxScreen = () => {

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  // state is {red: 0, green: 0, blue: 0}
  const {red, green, blue} = state;

  return (
    <View style={{ padding: 10 }}>
      <Text  style={{fontWeight: 'bold', paddingBottom: 20}}>Colors adjuster Redux example , click buttons below to change RGB </Text>

      <ColorAdjusterReduxButtons color="Red" handler={dispatch}  />
      <ColorAdjusterReduxButtons color="Green" handler={dispatch}  />
      <ColorAdjusterReduxButtons color="Blue" handler={dispatch} />

      <View style={{ padding: 10, width: 200, height: 80, backgroundColor: `rgb(${red},${green},${blue})` }}>
        <Text style={styles.textStyles}>RGB: {`rgb(${red},${green},${blue})`}</Text>
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

export default ColorAdjusterReduxScreen;
