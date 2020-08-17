import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';
import DetailsBtn from '../components/DetailsBtn';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntdIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {GlobalStyles} from '../styles/global';
import {Coins} from '../utils/Coins';

const DashboardScreen = ({route, navigation}) => {
  const [coinLogo, setCoinLogo] = useState(Coins[0].iconUrl);
  const [coinSymbol, setCoinSymbol] = useState('');
  useEffect(() => {
    const symbol = route.params.symbol;
    let coinImg = Coins.find((elm) => elm.symbol == symbol);
    setCoinSymbol(symbol);
    setCoinLogo(coinImg.iconUrl);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/images/VGWAppBackground.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={GlobalStyles.maincreen}>
        <Image source={coinLogo} style={OptionStyles.logo} />
        <ScrollView>
          <DetailsBtn
            iconName={
              <FeatherIcon
                // onPress={()=>{
                //   navigation.navigate('Send')
                // }}
                name="send"
                size={20}
                color="white"
                style={{alignSelf: 'center'}}
              />
            }
            title="Send"
            subTitle="Send any amount to a specific adress"
            action={() => {
              navigation.navigate('Send', {coinSymbol: coinSymbol,});
            }}
          />
          <DetailsBtn
            iconName={
              <AntdIcon
                name="qrcode"
                size={20}
                color="white"
                style={{alignSelf: 'center'}}
              />
            }
            title="Receive"
            subTitle="Receive crypto into your wallet"
            action={() => {
              navigation.navigate('Receive', {
                coinSymbol: coinSymbol,
              });
            }}
          />
          <DetailsBtn
            iconName={
              <IonIcon
                name="chatbubble-ellipses-sharp"
                size={20}
                color="white"
                style={{alignSelf: 'center'}}
              />
            }
            title="About"
            subTitle="Read more about us and FAQ "
            action={() => {
              console.log('About clicked');
            }}
          />
          <DetailsBtn
            iconName={
              <AwesomeIcon
                name="history"
                size={20}
                color="white"
                style={{alignSelf: 'center'}}
              />
            }
            title="View History"
            subTitle="Check Your history and view all transactions"
            action={() => {
              console.log('History clicked');
            }}
          />
          <DetailsBtn
            iconName={
              <AntdIcon
                name="creditcard"
                size={20}
                color="white"
                style={{alignSelf: 'center'}}
              />
            }
            title="Purchase"
            subTitle="Purchase crypto from our trusted partners"
            action={() => {
              console.log('Pruchase clicked');
            }}
          />
        </ScrollView>
        <View
          style={{
            height: 10,
          }}></View>
      </View>
    </ImageBackground>
  );
};

export default DashboardScreen;

const OptionStyles = StyleSheet.create({
  Send: {
    color: '#50d090',
    height: '50%',
    alignSelf: 'center',
    fontSize: 30,
  },
  logo: {
    alignSelf: 'center',
    height: '30%',
    width: '30%',
    resizeMode: 'contain',
    marginVertical: 5,
  },
});
