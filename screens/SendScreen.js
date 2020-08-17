import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text, Button, Input} from 'galio-framework';
import {GlobalStyles} from '../styles/global';
import DetailsBtn from '../components/DetailsBtn';
import AntdIIcon from 'react-native-vector-icons/AntDesign';
import {Coins} from '../utils/Coins';
const SendScreen = ( {route}) => {
  const [selectedUnit, setSelectedUnit] = useState('USD');
  const [value, setValue] = useState('12000');
  const [color1, setColor1] = useState('white');
  const [color2, setColor2] = useState('white');
  const [coinLogo, setCoinLogo] = useState(Coins[0].iconUrl);
  const [coinSymbol, setCoinSymbol] = useState('');
  useEffect(() => {
    const symbol = route.params.coinSymbol;
    console.log(symbol);
    setCoinSymbol(symbol);
    let coinImg = Coins.find((elm) => elm.symbol == symbol);
    console.log('Coin IMAGE', coinImg);
    setCoinLogo(coinImg.iconUrl);
  }, []);
  return (
    <ImageBackground
      source={require('../assets/images/VGWAppBackground.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={GlobalStyles.maincreen}>
        <View > 
          <Image
            source={coinLogo}
            style={{
              marginBottom: 15,
              marginTop:5,
              height: 70,
              width: 70,
              position: 'absolute',
              top: 2,
              alignSelf: 'center',
              zIndex: 1,
            }}
          />
        </View>
        <View style={SendStyles.main}>
          <View style={SendStyles.Btns}>
            <TouchableOpacity
              style={SendStyles.btnItem}
              onPress={() => {
                setColor1('#50d090');
                setColor2('white');
                setSelectedUnit('BTC');
                setValue(1);
              }}>
              <Text h5 color={color1}>
                BTC
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={SendStyles.btnItem}
              onPress={() => {
                setColor1('white');
                setColor2('#50d090');
                setSelectedUnit('USD');
                setValue('12000');
              }}>
              <Text h5 color={color2}>
                USD
              </Text>
            </TouchableOpacity>
          </View>
          <Text h3 color={'white'} style={SendStyles.value}>
            {value} {selectedUnit}
          </Text>
        </View>
        <View style={SendStyles.main2}>
          <View
            style={{
              width: 170,
              height: 100,
              backgroundColor: '#313342',
              borderRadius: 10,
              marginRight: 35,
              marginVertical: 10,
              left: 25,
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text color="#50d090" style={{fontSize: 20}}>
              10,043,13
            </Text>
            <Text color="white" style={{fontSize: 22, marginTop: 10}}>
              Balance
            </Text>
          </View>
          <View
            style={{
              width: 170,
              height: 100,
              backgroundColor: '#313342',
              borderRadius: 10,
              marginLeft: 35,
              marginVertical: 10,
              right: 25,
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text color="#50d090" style={{fontSize: 20}}>
              $ 10,043,13
            </Text>
            <Text color="white" style={{fontSize: 22, marginTop: 10}}>
              USD Value
            </Text>
          </View>
        </View>
        <Input
          placeholder="Input Bitcion Adress"
          rounded
          placeholderTextColor="#50d090"
          style={SendStyles.input}
          bgColor={'transparent'}
          right={true}
          icon="qrcode"
          family="antdesign"
        />
        <DetailsBtn
          iconName={
            <AntdIIcon
              name="idcard"
              size={20}
              color="white"
              style={{alignSelf: 'center'}}
            />
          }
          title="View Contact"
          subTitle="Choose a saved contact adress"
          action={() => {
            console.log('Pruchase clicked');
          }}
        />
        <Button round style={{width: '90%', alignSelf: 'center'}}>
          Next
        </Button>
      </View>
    </ImageBackground>
  );
};

export default SendScreen;

const SendStyles = StyleSheet.create({
  // logo: {
  //   alignSelf: 'center',
  //   height: '30%',
  //   width: '30%',
  //   resizeMode: 'contain',
  //   marginVertical: 10,
  // },

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
  main2: {
    marginVertical: 10,
    backgroundColor: 'transparent',
    borderRadius: 10,
    //height: 50,
    //width: 50,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginHorizontal: 20,
    //flex: 5,
  },
  main3: {
    margin: 20,
    backgroundColor: '#313342',
    borderRadius: 10,
    //height: 50,
    //width: 50,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginHorizontal: 20,
    //flex: 5,
  },
  Btns: {
    //height: 250,
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  btnItem: {
    marginHorizontal: 20,
  },
  value: {
    marginTop: 25,
  },
  input: {
    width: '90%',
    height: 45,
    alignSelf: 'center',
  },
});
