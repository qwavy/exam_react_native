import * as React from 'react';
import { View, StyleSheet, Button,TextInput, Text } from 'react-native';
import * as Speech from 'expo-speech';
import {useState,useEffect} from 'react'

export default function Bot() {
  const [commands,setCommands] = useState('')
  const [name,setName] = useState('')


  const speak = () => {


    
    
    const res = commands.split(" ")
    for(let i = 0; i < res.length;i++){
      setName(res[i])
    }if (commands === 'hello') {
      Speech.speak('hello, whats your name')
    }else if (commands == 'Nurs') {
      Speech.speak(`nice to meet you ${name}`)
      setName('Nurs')
    }
    else if(commands == 'how are you'){
      Speech.speak(`iam fine thank you? `)
    }
    else{
      Speech.speak('dont know')
    }


    // const checkName = () => {
    //   if(commands == 'my name is '){
    //     alert(commands)
    //   }
    // }
    // if(commands == 'hello'){
    //   Speech.speak('hello, What is your name?')
    //     if('')
    // }
    // // else if(commands == 'my name is '){
    // //   const res = commands.split(' ')
    // //   alert(res)
    // // }

  };

  return (
    <View style={styles.container}>
      <TextInput onChangeText={setCommands} style={styles.inp}/>
      <Button title="Press to hear some words" onPress={speak} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  inp: {
    height:40,
    border:10,
    margin:12
  }
})