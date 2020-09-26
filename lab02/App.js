import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
    const [name, setName] = useState('John Doe');
    const [age, setAge] = useState('0');
    const [birthdays, setBirthdays] = useState([]);
    const [newAge, updateNewAge] = useState(1);
    
    const birthday = () => {
        updateNewAge(newAge+1)
        setBirthdays(
           birthdays.concat({key: newAge.toString()})
        );
        setAge(newAge.toString())
    }
  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
      style={styles.input}
      placeholder='e.g. John Doe' 
      onChangeText={(val) => setName(val)}/>

      <Text>{name} is {age} years old.</Text>
      <View style={styles.buttonContainer}>
        <Button title='Birthday' onPress={birthday} />
      </View>
      <FlatList
        data={birthdays}
        renderItem={({ item }) =>  (
            <Text>{item.key}</Text>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
      marginTop: 20
  },
  input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 10,
      width: 200,
  }
});