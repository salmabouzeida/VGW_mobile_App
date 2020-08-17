import React from 'react'
import { StyleSheet, View ,TouchableOpacity,Image} from 'react-native'
import Icon from "react-native-vector-icons/AntDesign";
import {Text} from 'galio-framework' ; 
const WalletBtn = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
        <View style={Btnstyles.main}>
          <Image
            style={{ width: 45, height: 45, marginHorizontal: 9 }}
            source={props.imgs}
          />
  
          <View>
            <View style={Btnstyles.mainTitle}>
              <Text color={"#56e39c"} style={Btnstyles.titleTxt} size={20}>
                {props.title}
              </Text>
              <Text color={"#56e39c"} style={Btnstyles.titleTxt2} size={20}>
                {props.amount}
              </Text>
            </View>
  
            <Text p size={15} style={Btnstyles.txt} color={"white"}>
              {props.subTitle}
            </Text>
            <View style={Btnstyles.data}>
              <Text style={Btnstyles.solde}>$120.13</Text>
              <Text style={Btnstyles.pourcentage}> (+2.04 %)</Text>
            </View>
          </View>
          <TouchableOpacity style={Btnstyles.touch}>
            <Icon name="right" style={Btnstyles.icn} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
}

export default WalletBtn ; 

export const Btnstyles = StyleSheet.create({
    main: {
      margin: 5,
      backgroundColor: "#313342",
      borderRadius: 15,
      height: 90,
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
      //opacity: 0.7
      //justifyContent: 'space-evenly',
    },
    mainTitle: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
      //paddingHorizontal:50
    },
    innerBtn: {
      alignSelf: "center",
      height: 50,
      width: 50,
      borderRadius: 10,
      marginHorizontal: 10
    },
    txt: {
      marginVertical: 2,
      fontFamily: "Roboto-Bold"
    },
    titleTxt2: {
      marginVertical: 2,
      fontFamily: "Roboto-Bold",
      //marginHorizontal:50,
      position: "absolute",
      left: 10,
      alignSelf: "flex-end",
      marginLeft: 180
    },
    titleTxt: {
      marginVertical: 2,
      fontFamily: "Roboto-Bold",
      alignSelf: "flex-start",
      //position:'absolute',
      marginRight: 250
      //marginHorizontal:50
    },
    data: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignContent: "space-between"
    },
  
    icn: {
      color: "white",
      fontSize: 30,
      fontWeight:'bold',
      //alignContent: "space-around",
      //justifyContent:'flex-end',
      //paddingRight:50,
    },
    touch: {
      position: "absolute",
      right: 20
    },
  
    solde: {
      marginVertical: 2,
      fontFamily: "Roboto-Bold",
      color: "white"
    },
    pourcentage: {
      marginVertical: 2,
      fontFamily: "Roboto-Bold",
      color: "#56e39c"
    }
  });
  
