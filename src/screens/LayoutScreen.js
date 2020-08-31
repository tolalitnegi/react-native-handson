import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LayoutScreen = () => {
  return (
    <View>
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>Box Model</Text>
      </View>

      <View style={styles.flexView}>
        <Text style={styles.textStyles}>Flex Child 1</Text>
        <Text style={styles.textStyles}>Flex Child 2</Text>
        <Text style={styles.textStyles}>Flex Child 3</Text>
      </View>

      <View style={styles.positionView}>
        <Text style={styles.textStyles}>Position Child 1</Text>
        <Text style={styles.text2styles}>Position Child 2</Text>
        <Text style={styles.textStyles}>Position Child 3</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  positionView: {
    height: 300,
    borderWidth: 2,
    borderColor: 'green',
  },
  flexView: {
    margin: 10,
    height: 150,
    borderWidth: 2,
    borderColor: 'blue',
    flexDirection: 'row', // default is column
    // alignItems: 'flex-start', // default is strech (full width)
    justifyContent: 'space-around'

  },
  viewStyles: {
    borderWidth: 3,
    margin: 13,
    borderColor: "red"
  },
  textStyles: {
    borderWidth: 2,
    margin: 10,
    padding: 13,
    backgroundColor: 'rgb(23,232,22)',
    borderColor: 'green'
  },
  text2styles: {
    borderWidth: 2,
    position: 'absolute',
    backgroundColor: 'rgba(23,11,22, 0.3)',
    top: 5,
    left: 33,
    bottom: 0,
    right: 0, // ...StyleSheet.absoluteFillObject
  }
});

export default LayoutScreen;