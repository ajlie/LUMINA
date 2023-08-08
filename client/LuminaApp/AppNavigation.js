// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Navigation from './Components/Navigation';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name = "Navigation" component={Navigation} />
    </Stack.Navigator>
  );
};

export default AppNavigator;