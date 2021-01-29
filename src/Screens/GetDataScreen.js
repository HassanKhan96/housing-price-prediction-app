import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as tf from '@tensorflow/tfjs';
import {bundleResourceIO } from '@tensorflow/tfjs-react-native';


export default function GetDataScreen() {

    const navigation = useNavigation();

    const [area, setArea] = useState('');
    const [activity, setActivity] = useState(false);
    const [model,setModel] = useState({});

    useEffect(()=>{
        loadModel()
    },[])
    const loadModel = async () => {
        await tf.ready()
        const modelJson = await require('../../model/model.json');
        const modelWeights = await require('../../model/group1-shard1of1.bin');

        const myModel = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeights));
        setModel(myModel);
        
    }
    const StartPrediction = async () => {
        setActivity(true)
        const res = await model.predict(tf.tensor1d([parseFloat(area)])).dataSync()
        // Perform your all Action here
        // once you successfully get the house price please pass it to below function as a argument 

        // just pass the result or predicted result in onSuccess function ( .then function )
         onSuccess(res[0].toFixed());
        

    }

    function onSuccess(result) {
        setActivity(false)
        navigation.navigate('ResultScreen', {
            itemParam: result,
            InputData: area
            
        })
    }

  return (
    <View style={styles.container}>
                <Text style={{ marginTop: '20%'}}>
                    Enter Area of house for Predication
                </Text>
            <View style={styles.backgroundStyle}>

                <TextInput 
                    style={styles.InputTextStyle}
                    placeholder="Area"
                    autoCapitalize="none"
                    autoCorrect={false}
                    editable={true}
                    label="Area"
                    value={area}
                    onChangeText={setArea}   
                    keyboardType='numeric' 
                        
                />
            </View>
            <TouchableOpacity onPress={() => StartPrediction()} style={styles.ButtonStyle}>
                {activity ? 
                    <ActivityIndicator size="small" color="white" />
                :
                    
                    <Text style={{ color: 'black', fontWeight: 'bold'}}>
                        Start Prediction
                    </Text>
                }
                
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  
  },
  backgroundStyle: {
    backgroundColor: '#f0f5f5',
    height: (Dimensions.get('window').height)/14,
    marginHorizontal: 15,
    borderRadius: 20,
    flexDirection: 'row',
    width: '80%',
    marginTop: (Dimensions.get('window').height)/70
    
},

InputTextStyle: {
    fontSize: 18,
    flex:1,
    marginLeft: '5%'
},
ButtonStyle: {
    backgroundColor: '#FFBE00',
    height: (Dimensions.get('window').height)/14,
    marginHorizontal: 15,
    borderRadius: 20,
    flexDirection: 'row',
    width: '83%',
    marginTop: (Dimensions.get('window').height)/19,
    justifyContent: 'center',
    alignItems: 'center'
    
},


});