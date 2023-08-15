// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginMain from './Login/LoginMain'
import Home from './Components/HomePage/HomeScreen'
import Journal from './Components/JournalPage/JournalCategories';
import JournalScreen from './Components/JournalPage/JournalScreen';
import LoadingScreen from './LoadingScreen';
import Memory from './Components/MemoryPage/MemoryPage';
import MemoryCreator from './Components/MemoryPage/MemoryCreator';
import MemoryCalender from './Components/MemoryPage/MemoryCalender';
import Navigate from './Components/Navigation';

const Stack = createStackNavigator();

//starts the navigation of the screens, login is what is shown in the beginning, then for navigation bar rather than a bar use buttons on the home screen 
// reason: easier and cleaner look as well as flexible UI
const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoginMain">
      <Stack.Screen name = "LoadingScreen" component={LoadingScreen} options={{ headerShown: false }} />
      <Stack.Screen name = "LoginMain" component={LoginMain} options={{ headerShown: false }} />
      <Stack.Screen name = "Home" component={Home}  options={{ headerShown: false }}/>
      <Stack.Screen name = "Navigate" component={Navigate}  options={{ headerShown: false }}/>
      <Stack.Screen name = "Journal" component={Journal}  options={{ headerShown: false }}/>
      <Stack.Screen name = "JournalScreen" component={JournalScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name = "Memory" component={Memory}  options={{ headerShown: false }}/>
      <Stack.Screen name = "MemoryCreate" component={MemoryCreator} options={{ headerShown: false }}/>
      <Stack.Screen name = "MemoryCalender" component={MemoryCalender} options={{ headerShown: false }}/>

    </Stack.Navigator>
  );
};

export default AppNavigator;