import 'react-native-gesture-handler';
import { Text, View } from "react-native";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './presentation/navigation/Nagigation';

export default function App(){
  return(
    <NavigationContainer>
     <Navigation />
    </NavigationContainer>
  )
}