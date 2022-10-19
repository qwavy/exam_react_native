import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from './appp/navigation/AppNavigator'

export default function App(){
  return(
    <NavigationContainer>
      <AppNavigator></AppNavigator>
    </NavigationContainer>
  )
}