import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';
import {GlobalStyles} from '../styles/global';
import {Text} from 'galio-framework';
import {Input, Block} from 'galio-framework';
import {Button} from 'galio-framework';
import {Icon} from 'galio-framework';
import axios from "axios";
import Base64 from 'base-64'
const LoginScreen = ({navigation}) => {
  const [email,setEmail]=useState(''); 
  const [Password,setPassword]=useState('');
  const login= async (email,pass)=>{
   console.log("Email", Base64.encode(email)); 
   console.log("Passowrd",Base64.encode(pass));
  


    try{
      let response =   await  axios.post('https://api.vegawallet.net:8443/vgw/api/userLogin',
       JSON.stringify({
        email_id: Base64.encode(email),
        hashed_password: Base64.encode(pass)
      }),
        {
          headers:{
           
            "Content-Type": "application/x-www-form-urlencoded",
             "Accept": "application/json"
          }
        }
      ); 
      console.log(response); 
      let result = await response.json() ; 
      console.log(result); 
    }catch(err)
    {
      console.log("Error",err); 
    }
   
   }
   const login2 =()=>
   {
    var data = JSON.stringify({"email_id":"YWxsb3ZhcnJAZ21haWwuY29t","hashed_password":"OTlNdXN0YW5n"});

    var config = {
      method: 'post',
      url: 'https://api.vegawallet.net:8443/vgw/api/userLogin',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
   }
  return (
    <ImageBackground
      source={require('../assets/images/VGWAppBackground.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={GlobalStyles.maincreen}>
        <Image source={require('../assets/images/VegaWalletAppIcon1024Green.png')} style={localStyles.logo}/>
        <Text h5 style={GlobalStyles.txt} color={'#50d090'}>
          Welcome To VegaWallet!
        </Text>
        <Text h5 style={GlobalStyles.txt} color={'white'}>
          Please Choose A sign In Method{' '}
        </Text>
        <View style={localStyles.inputFields}>
          <Input
            placeholder="Email"
            rounded
            placeholderTextColor="#50d090"
            style={localStyles.input}
            bgColor={'transparent'}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Input
            placeholder="Password"
            rounded
            placeholderTextColor="#50d090"
            style={localStyles.input}
            bgColor={'transparent'}
            value={Password}
            onChangeText={text => setPassword(text)}
          />
        </View>

        <TouchableOpacity>
          <Text color={'#FE2472'} style={GlobalStyles.label}>
            Forgot Password ?{' '}
          </Text>
        </TouchableOpacity>

        <Button
          round
          color="#FE2472"
          style={GlobalStyles.BtnStyle}
          textStyle={{fontSize: 18}}
          onPress={() => {
            // navigation.navigate('Verif');
            // console.log(email); 
            // console.log(Password); 
            //login(email,Password); 
            login2(); 
          }}>
          Sign In
        </Button>
        {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate('Register');
        }}>
        <Text color={'#FE2472'} style={GlobalStyles.label2}>
          Don't have an account ? signup
        </Text>
      </TouchableOpacity> */}
        <View style={localStyles.signupView}>
          <Text color={'#FE2472'} style={GlobalStyles.label2}>
            Don't have an account ?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text color={'#FE2472'} style={GlobalStyles.label2}>
              signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const localStyles = StyleSheet.create({
  input: {
    width: '90%',
    height: 45,
  },
  inputFields: {
    paddingHorizontal: 5,
    alignItems: 'center',
    //alignSelf: 'center',
  },
  signupView: {
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
  },
  logo:{
    height:'30%',
    width:'30%',
    alignSelf:'center', 
    resizeMode:'contain'
  }
});
