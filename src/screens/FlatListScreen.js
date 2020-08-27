import React from 'react';
import { FlatList, Text, View } from 'react-native';

const FlatListScreen = () => {

  const frndsArr = [
    { name: "Steve", age: 32 },
    { name: "Rogers", age: 31 },
    { name: "Morrision", age: 34 },
    { name: "James", age: 35 },
    { name: "Michael", age: 36 },
    { name: "Samantha", age: 39 }
  ]
  return (
    <View style={{ color: 'white' }}>
      <Text style={{ fontSize: 30, backgroundColor: 'blue', color: 'white'  }}>List of friends</Text>
      <FlatList
        keyExtractor={friend => friend.name}
        data={frndsArr}
        vertical
        renderItem={({ item }) => {

          return (<Text style={{ padding: 10, marginBottom: 10, fontSize: 20, backgroundColor: 'yellow' }}
          >{`${item.name} - Age: ${item.age}`}</Text>);
        }}
      />
    </View>
  )
};

export default FlatListScreen;