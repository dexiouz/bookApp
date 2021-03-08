import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const AuthStack = createStackNavigator();

//import Auth Screens;
import {Login} from '../../../Screens/Auth'
const AuthStackScreens = () => (
  <AuthStack.Navigator headerMode="none" initialRouteName="Signin">
    <AuthStack.Screen name="Login" component={Login} /> 
  </AuthStack.Navigator>
);

export default AuthStackScreens;
