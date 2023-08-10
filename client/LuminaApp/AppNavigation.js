// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginMain from './Login/LoginMain'
import Navigation from './Components/Navigation';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoginMain">
      <Stack.Screen name="LoginMain" component={LoginMain} />
      <Stack.Screen name = "Navigation" component={Navigation} />
    </Stack.Navigator>
  );
};

export default AppNavigator;