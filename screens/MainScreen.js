import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {GlobalStyles} from '../styles/global';
import {VictoryLine, VictoryChart, VictoryTheme} from 'victory-native';
import {NavBar,Text} from 'galio-framework';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import WalletBtn from '../components/WalletBtn';
import {Coins} from '../utils/Coins';
const MainScreen = ({navigation}) => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  return (
    <ImageBackground
      source={require('../assets/images/VGWAppBackground.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={GlobalStyles.maincreen}>
        <NavBar
          title="Dashboard"
          transparent={true}
          titleStyle={styles.titleStyle}
          left={
            <Icon
              name="bars"
              style={{
                fontSize: 20,
                color: 'white',
              }}
              onPress={() => {
                
              }}
            />
          }
          right={
            <Icon
              name="refresh"
              style={{
                fontSize: 20,
                color: 'white',
              }}
              onPress={() => {
                //props.navigation.openDrawer();
              }}
            />
          }
        />
        <View
          style={{
            height: 300,
            // flex: 1,
            //alignItems: "center",
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text h5 style={GlobalStyles.txt} color={'#50d090'}>
            $3,109.34 !
          </Text>
          <VictoryChart width={400} height={200} maxDomain={{y: 120}}>
            <VictoryLine
              animate={{
                duration: 2000,
                onLoad: {duration: 1000},
              }}
              interpolation="natural"
              data={data}
              style={{
                data: {
                  //height: 300,
                  stroke: 'rgba(192, 56, 103, 1)',
                  strokeWidth: 5,
                  shadowColor: '#fff',
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.34,
                  shadowRadius: 6.27,

                  elevation: 10,
                },
                parent: {
                  border: '10px solid #FFF',
                },
              }}
            />
          </VictoryChart>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginVertical: 10,
              marginBottom: 20,
              //marginLeft: 20,
            }}>
            <Text style={GlobalStyles.chartText}>Jun</Text>
            <Text style={GlobalStyles.chartText}>Jul</Text>
            <Text style={GlobalStyles.chartText}>Aug</Text>
            <Text style={GlobalStyles.chartText}>Sep</Text>
            <Text style={GlobalStyles.chartText}>Oct</Text>
          </View>
        </View>
        <ScrollView>
            {
              Coins.map(elm=><WalletBtn
                key={Math.random().toString()}
                title={elm.symbol}
                amount={"1,043.12"}
                subTitle={elm.name}
                imgs={elm.iconUrl}
                onPress={() => {
                 navigation.navigate('Dashboard',{
                   symbol:elm.symbol
                 });
                 
                }}
              />)
            }
          
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Montserrat-Thin',
  },
});
