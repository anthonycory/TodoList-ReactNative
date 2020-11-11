import React from 'react'
import  {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function Todolist({item, Pressdelete}) {
    return(
        <TouchableOpacity onPress={() => Pressdelete(item.key)}>
                <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        color: 'white',
        padding: 10,
        backgroundColor: '#424242',
        flexDirection: 'row'
    }
  });