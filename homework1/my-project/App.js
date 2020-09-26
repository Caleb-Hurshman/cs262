import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
//import Text from "react-native-web/src/exports/Text";

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy Coffee', key: '1' },
    { text: 'Create an App', key: '2' },
    { text: 'Play on the Switch', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('Yikes', 'To-dos must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data = {todos}
              renderItem = {({ item }) => (
                  <TodoItem item={item} pressHandler = {pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
})
