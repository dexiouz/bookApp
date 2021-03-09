import React, {useContext} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
const Tab = createBottomTabNavigator();

//import App Screens
import {Home, Book, BookMark, Settings, Cart} from '../../../Screens/App';
const AppStackScreens = () => { 
  return (
    <Tab.Navigator
      initialRouteName="Home"
      // labelStyle={{
      //   color: 'pink'
      // }}
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: "#9C9EA8",
        showLabel: false,
        style: {
          borderRadius: 10,
          // backgroundColor: 'red',
          height: 60,
          marginBottom: 10,
          width: '90%',
          alignSelf: 'center'
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../../assets/images/Vector.png')}
              style={{tintColor: color, width: size-4, height: size-4}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BookMark"
        component={BookMark}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="bookmark-outline" color={color} size={size-4} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="cart-outline" color={color} size={size + 4} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="setting" color={color} size={size-4  } />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStackScreens;
