import React , {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextInputScreen =  () => {
  const [name, setName] = useState('');
  return (
    <View>
            <Text>Enter your name</Text>

      <TextInput 
        style={styles.input}
        autoCapitalize="none"
        value={name}
        onChangeText={setName}
        autoCorrect={false}
      />
      <Text>My name is : {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 10
  }
})

export default TextInputScreen;