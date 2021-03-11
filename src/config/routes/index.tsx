import React, {useMemo, useEffect, useReducer, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View} from 'react-native';
import {AuthContext} from '../../context/authContext';
import {NavigationContainer} from '@react-navigation/native';  
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackScreens from './AuthNavigation';
import AppStackScreens from './AppNavigation';
import {ActivityIndicator} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import Entypo from 'react-native-vector-icons/Entypo';
import {Empty} from '../../components';
const AppRoute = () => {
  const netInfo = useNetInfo();
  const handleSignOut = async () => {
    try {
      await AsyncStorage.removeItem('token');
    }catch(e){
      console.log('There was an error')
    } 
  };
  const initialLoginState = {
    isLoading: true,
    userEmail: null,
    userToken: null,
  };

  const loginReducer = (prevState:any, action: any) => {
  
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userEmail: action.email,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userEmail: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);
  const authContext = useMemo(
    () => ({
      signIn: async (token : string, email: string) => {
        try {
          await AsyncStorage.setItem('token', token);
          await AsyncStorage.setItem('email', email)
        } catch (e) {
          console.log(e, "Error")
        }
        dispatch({type: 'LOGIN', email, token});
      },
      signOut: async () => {
        await handleSignOut();
        dispatch({type: 'LOGOUT'});
      },
    }),
    []
  );
  const getToken = async () => {
    let userToken = null;
    try {
      userToken = await AsyncStorage.getItem('token');
    } catch (e) {
      console.log("Error");
    }
    dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
  };
  useEffect(() => {
    getToken();

  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
       <>
       {/* check if device is connected to internet */}
        {netInfo.isConnected.toString() === 'true' ? (
          <NavigationContainer>
            {loginState.userToken !== null ? (
              <AppStackScreens />
            ) : (
              <AuthStackScreens />
            )}
          </NavigationContainer>
        ) : (
          <Empty
            message="Please check your network connection"
            networkIcon={<Entypo name="line-graph" color="red" size={38} />}
          />
        )}
      </>
    </AuthContext.Provider>
  );
};

export default AppRoute;
