import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function ResultScreen({ route, navigation }) {

    const { itemParam } = route.params;
    const { InputData} = route.params;
    console.log(itemParam);

  return (
    <View style={styles.container}>
        <Text>For the area {InputData}</Text>
      <Text>The Predicted Price of house is {itemParam}</Text>
      <StatusBar style="auto" />
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
});