import React from 'react';
import {View, Text} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from './screens/RegisterScreen';
import MainScreen from './screens/MainScreen';
import DashboardScreen from './screens/DashboardScreen';
import SendScreen from './screens/SendScreen';
import ReceiveScreen from './screens/ReceiveScreen';

import VerificationSreen from './screens/VerificationSreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" headerMode="none">
        <Stack.Screen name="home" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="main" component={MainScreen}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen}/>
        <Stack.Screen name="Send" component={SendScreen}/>
        <Stack.Screen name="Receive" component={ReceiveScreen}/>
        <Stack.Screen name="Verif" component={VerificationSreen}/>

      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
