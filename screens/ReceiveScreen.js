import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {GlobalStyles} from '../styles/global';
import {Icon} from 'galio-framework';
import QRCode from 'react-native-qrcode-svg';
import DetailsBtn from '../components/DetailsBtn';
import AntdIIcon from 'react-native-vector-icons/AntDesign';
import {Coins} from '../utils/Coins';
import WalletBtn from '../components/WalletBtn';
const ReceiveScreen = ({route, navigation}) => {
  const [coinLogo, setCoinLogo] = useState(Coins[0].iconUrl);
  const [coinSymbol, setCoinSymbol] = useState('');
  useEffect(() => {
    const symbol = route.params.coinSymbol;
    console.log(symbol);
    setCoinSymbol(symbol);
    let coinImg = Coins.find((elm) => elm.symbol == symbol);
    console.log("Coin IMAGE",coinImg); 
    setCoinLogo(coinImg.iconUrl);
  }, []);
  return (
    <ImageBackground
      source={require('../assets/images/VGWAppBackground.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={GlobalStyles.maincreen}>
        <View style={{marginTop:10}}>
        <Image source={coinLogo} style={{marginBottom:25, height:70, width:70,position:'absolute',top:2,alignSelf:'center',zIndex:1}} />
        <View style={ReceiveStyles.main}>
         
         <QRCode value="http://awesome.link.qr" size={180} />
       </View>
        </View>
       
        <View
          style={{
            // width: 250,
            height: 100,
            backgroundColor: '#313342',
            borderRadius: 10,
            marginHorizontal: 5,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#50d090',
              alignSelf: 'center',
              marginTop: 10,
            }}>
            {' '}
            Your {coinSymbol} Adress
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            height: 70,
            backgroundColor: '#313342',
            borderRadius: 10,
            marginHorizontal: 5,
          }}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                color: '#50d090',
                alignSelf: 'center',
                margin: 10,
                marginTop: 20,
              }}>
              {' '}
              Click Here To Copy Adress
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10}}>
          <DetailsBtn
            iconName={
              <AntdIIcon
                name="idcard"
                size={20}
                color="white"
                style={{alignSelf: 'center'}}
              />
            }
            title="Buy Cryptocurency"
            subTitle="Purchase in-app or find Bitcion ATML"
            action={() => {
              console.log('Pruchase clicked');
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ReceiveScreen;

const ReceiveStyles = StyleSheet.create({
  main: {
    margin: 20,
    backgroundColor: '#313342',
    borderRadius: 10,
    height: 300,
    // flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    //flex:3
  },
});
