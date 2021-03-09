import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const App = createStackNavigator();

//import Auth Screens;
import {BookDetails, Home, PreviewPage} from '../../../../Screens/App'
const AuthStackScreens = () => (
  <App.Navigator headerMode="none" initialRouteName="Home">
    <App.Screen name="Home" component={Home} /> 
    <App.Screen name="BookDetails" component={BookDetails} /> 
    <App.Screen name="PreviewPage" component={PreviewPage} /> 
  </App.Navigator>
);

export default AuthStackScreens;
