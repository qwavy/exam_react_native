import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TextInput, Button, AsyncStorage } from 'react-native';
import { useState,useEffect } from 'react'
// import {AsyncStorage} from '@react-native-async-storage/async-storage'


export default function Map({navigation}) {

  const [city, setCity] = useState('')
  const [region, setRegion] = useState('')


  // const getData = async () => {
  //   try {
  //     // await AsyncStorage.getItem('region')
  //     .then(value => {
  //       if (value !== null) {
  //         navigation.navigate('MapCity')
  //       }
  //     })
  //   } catch(error){
  //     console.log(error)
  //   }
  // }

  
  // useEffect(() => {
  //   getData()
  // }, [])

  const getMap = () => {

    const options = {
      method: 'GET',
      headers: { 'X-Api-Key': 'derVAGp+zXFPFruSlsdTOg==lxgIFbguhbsG671A' },
      contentType: 'application/json',
    }
    fetch(`https://api.api-ninjas.com/v1/city?name=${city}`, options)
      .then(response => response.json())
      .then(response => {
        // const obj = {
        //   latitude: response[0].latitude,
        //   longitude: response[0].longitude,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421
        // }
        // setRegion(obj)
        // AsyncStorage.setItem('region',region)
        navigation.navigate('MapCity', {latitude: response[0].latitude, longitude: response[0].longitude,})
      })
      .catch(err => console.error(err));

    
  }


  return (
    <View style={styles.container}>

      <TextInput onChangeText={setCity} style={styles.inp} />
      <Button title='getMap' onPress={getMap} />

      {/* <MapView style={styles.map} region={region}/> */}

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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  inp: {
    height: 60,
    width: 200,
    border: 10,
    margin: 12,
    backgroundColor: '#FF8C00'
  }
});