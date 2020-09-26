import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ pressHandler, item }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    }
})