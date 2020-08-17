import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import {GlobalStyles} from '../styles/global';
import {Text,Input,Button} from 'galio-framework';
const RegisterScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/VGWAppBackground.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={GlobalStyles.maincreen}>
      <Image source={require('../assets/images/VegaWalletAppIcon1024Green.png')} style={localStyles.logo}/>
      <Text h5 style={[GlobalStyles.txt,localStyles.title]} color={'#50d090'} >
        Create A New Account
      </Text>
      <Input
          placeholder="Name"
          rounded
          placeholderTextColor="#50d090"
          style={{height: 50, marginVertical: 10, marginleft: 10}}
          style={localStyles.input} bgColor={'transparent'}
        />
     
        <Input
          placeholder="Email"
          rounded
          placeholderTextColor="#50d090"
          style={{height: 50, marginVertical: 10, marginleft: 10}}
          style={localStyles.input} bgColor={'transparent'}
        />
        <Input
          placeholder="Phone"
          rounded
          placeholderTextColor="#50d090"
          style={{height: 50, marginVertical: 10}}
          style={localStyles.input} bgColor={'transparent'}
        />
        <Input
          placeholder="Password"
          rounded
          placeholderTextColor="#50d090"
          style={{height: 50, marginVertical: 10, marginleft: 10}}
          style={localStyles.input} bgColor={'transparent'}
        />
        <Input
          placeholder="Confirm Password"
          rounded
          placeholderTextColor="#50d090" 
          style={{height: 50, marginVertical: 10}}
          style={localStyles.input} bgColor={'transparent'}
        />

        <Button round uppercase color="#FE2472" style={GlobalStyles.BtnStyle}>
          Register
        </Button>
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;
const localStyles=StyleSheet.create({
  input: {
    width:'90%',
    height:45,
    marginLeft:20
  },
  title:{
    marginBottom:20
  }, 
  logo:{
    height:'30%',
    width:'30%',
    alignSelf:'center', 
    resizeMode:'contain'
  }
})