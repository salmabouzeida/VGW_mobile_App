import React from 'react';
import {StyleSheet, View,TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather'
import {Text} from 'galio-framework'; 
const DetailsBtn = ({action,iconName,title,subTitle}) => {
  return (
    <TouchableOpacity onPress={action}>
    <View style={Btnstyles.main}>
      <Button
        icon={
          iconName
        }
        title=""
        buttonStyle={Btnstyles.innerBtn}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ["#0a4dad", "#0a6bad"],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
      />
      <View>
        <Text color={"#56e39c"} style={Btnstyles.txt} size={20}>
         {title}
        </Text>
        <Text p size={13} style={Btnstyles.txt} color={"white"}>
        {subTitle}
        </Text>
      </View>
      <Icon name="chevron-right" style={Btnstyles.icn} />
    </View>
  </TouchableOpacity>
  );
};

export default DetailsBtn;

export const Btnstyles = StyleSheet.create({
    main: {
      margin: 5,
      backgroundColor: "#313342",
      borderRadius: 10,
      height: 90,
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
      //opacity:0.7
      //justifyContent: 'space-evenly',
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
      fontFamily: "Roboto"
    },
    icn: {
      color: "white",
      fontSize: 25,
      fontWeight:'bold',
      //alignContent: "space-around",
      //justifyContent:'flex-end',
      //paddingRight:50,
      position:'absolute',
      right:15
    
    },
   
  });
  