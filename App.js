import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetDataScreen from './src/Screens/GetDataScreen';
import ResultScreen from './src/Screens/ResultScreen';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import IntroScreen from './src/Screens/IntroScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false}} name="Welcome" component={WelcomeScreen} />
        <Stack.Screen options={{ headerShown: false}} name="IntroScreen" component={IntroScreen} />
        <Stack.Screen options={{ headerShown: false}} name="GetDataScreen" component={GetDataScreen} />
        <Stack.Screen options={{ headerShown: false}} name="ResultScreen" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
