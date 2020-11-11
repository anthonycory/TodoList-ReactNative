import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import Todolist from './components/Todolist'
import Addtodo from './components/Addtodo'


export default function App() {
  const [names, setname] = useState([
    {name : 'Anthony', key: '1'},
    {name : 'Kevin', key: '2'},
    {name : 'Lorenzo', key: '3'},
    {name : 'Francis', key: '4'},
  ]);

  const Pressdelete = (key) => {
    console.log(key)
     setname((prevNames) => {
      return prevNames.filter(name => name.key != key);
    })
  }

  const submittab = (text) => {
setname((prevNames) =>{
  return [
    { name: text, key: Math.random().toString()},
    ...prevNames,]
})
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewtodo}>
        <Text style={styles.title}>TODO LIST APP</Text>
      </View>
      <View>
          <Addtodo submittab={submittab}/>
          <View>

          <FlatList
          data={names}
          renderItem={({item}) => (
            <Todolist item={item} Pressdelete={Pressdelete}/>
          )
        } />
          </View>
      </View>
  </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#303030'
  },
  viewtodo: {
    width: '100%',
    backgroundColor: '#663ab3',
    padding: 10,
    marginTop: 30,
    color: 'white'
  },
  title: {
    color: 'white'
  }
});