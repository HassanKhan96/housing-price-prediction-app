import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IntroScreen = () => {

    const navigation = useNavigation();

    return(
        <View style={{flex:1, alignItems: 'center',  backgroundColor: 'white'}}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: '20%'}}>
                Welcome
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 19}}>
                Data Mining and Warehousing Project - House cost prediction 
            </Text>
            <Image 
                source={require('../../assets/main.png')}
                style={{ height: 200, width: 300, borderRadius: 20, marginTop: '3%'}}
            />
            <Text style={{ fontSize: 18, marginTop: '10%', textAlign: 'center'}}>
                Project Supervisor: Ma'am Amber Khan
            </Text>

            <Text style={{ fontSize: 18, marginTop: '4%', textAlign: 'center'}}>
                Group members:
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 19, marginTop: '5%', fontWeight: 'bold'}}>
                Muhammad Hassan (588 ){"\n"}
                Hassan Parwani (560){"\n"}
                Fahad Shaikh (550)
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('GetDataScreen')} style={styles.ButtonStyle}>
                    <Text style={{ color: 'black', fontWeight: 'bold'}}>
                        Get Started
                    </Text>  
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
  welcomeContainer: {
      marginTop: (Dimensions.get('window').height)/12, 
      marginBottom: (Dimensions.get('window').height)/12
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
  signupText: {
      flexDirection: 'row',
       marginTop: (Dimensions.get('window').height)/29
  },
  
  });

export default IntroScreen;