import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {GlobalStyles} from '../styles/global';
import {Text} from 'galio-framework';
import {Input, Block} from 'galio-framework';
import {Button} from 'galio-framework';

const VerificationSreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/VGWAppBackground.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={GlobalStyles.maincreen}>
        <Image
          source={require('../assets/images/VegaWalletAppIcon1024Green.png')}
          style={localStyles.logo}
        />

        <Text style={GlobalStyles.txt} color={'white'}>
          In Order to Send And Receive you need to put your Passphrase and
          private key
        </Text>
        <View style={localStyles.inputFields}>
          <Input
            placeholder="Passphrase"
            rounded
            placeholderTextColor="#50d090"
            style={localStyles.input}
            bgColor={'transparent'}
          />
          <Input
            placeholder="Private Key"
            rounded
            placeholderTextColor="#50d090"
            style={localStyles.input }
            bgColor={'transparent'}
          />
        </View>

   

        <Button
          round
          color="#FE2472"
          style={GlobalStyles.BtnStyle}
          textStyle={{fontSize: 18}}
          onPress={() => {
            navigation.navigate('main');
          }}>
         Confirm
        </Button>
     
       
      </View>
    </ImageBackground>
  );
};

export default VerificationSreen;

const localStyles = StyleSheet.create({
  inputFields: {
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 45,
    marginBottom:20
  },
  logo: {
    height: '30%',
    width: '30%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
