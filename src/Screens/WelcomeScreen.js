import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

// import Icon from 'react-native-vector-icons/MaterialIcons';

import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 

 
const slides = [
  {
    key: 1,
    text: 'Welcome to HCPA',
    details: 'In this app you can predict any house price. We have traind app for prediction of house prices',
    image: require('../../assets/slider_1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    text: 'Prediction method',
    details: 'Predicting House Prices with Linear Regression',
    image: require('../../assets/slider_2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    text: 'Start Prediction Now',
    details: 'It’s as simple as that. Just add area of house and your price will be shown in the app.',
    image: require('../../assets/slider_3.png'),
    backgroundColor: '#22bcb5',
  }
];

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

  renderItem = ({ item }) => {

    console. disableYellowBox = true;
    
    return (
      <View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={item.image} 
                  style={styles.imageStyle}
            />
              <View style={{ marginTop: '5%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{  fontSize: 28, fontWeight: 'bold'}}>
                  {item.text}
                </Text>
                <Text style={{marginTop: '3%', textAlign: 'center', marginHorizontal: '8%', color: 'grey'}}>
                    {item.details}
                </Text>   
              </View>
          </View>
      </View>
    );
  }


const WelcomeScreen = () => {
      
  const navigation = useNavigation();

  return(
    <>
    <StatusBar barStyle="white" backgroundColor="#FFBE00" />
      <View style={styles.container}>
        <View style={styles.introView}>
          <AppIntroSlider 
                showNextButton={false}
                renderItem={renderItem} 
                data={slides} 
                dotStyle={styles.dotStyle} 
                activeDotStyle={styles.activeDotStyle} />
        </View>

        <TouchableOpacity 
            onPress={() => navigation.navigate('IntroScreen')}
            style={styles.nextButton}>
          <SimpleLineIcons name="arrow-right" size={24} color="white" />
        </TouchableOpacity>
      </View>
      </>
  );
} 



const styles = StyleSheet.create({
  container: {
    flex: 1,  
    alignItems: 'center', 
    backgroundColor: 'white'
  },
  introView: {
    height: height/1.4,
    width: 300, 
    marginTop: height/15
  },
  dotStyle: {
    backgroundColor: 'grey', 
    marginTop: -height/3,
  },
  activeDotStyle: {
    marginTop: -height/3, 
    backgroundColor: 'black', 
    width: 20
  },
  nextButton: {
    justifyContent: 'center', 
    alignItems: 'center',
    width: width/5.1,
    height: height/10, 
    borderRadius: 30, 
    backgroundColor: 'black',
    marginTop: '10%',
    
  }, 
  imageStyle: {
    height: height/2.1, 
    width: width,
    borderRadius: 90
  }
});

export default WelcomeScreen;