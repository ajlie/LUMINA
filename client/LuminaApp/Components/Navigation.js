import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomePage/HomeScreen';
import MemoryScreen from './MemoryPage/MemoryPage'
import MemoryCalender from './MemoryPage/MemoryCalender'
import JournalScreen from './JournalPage/JournalCategories';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen name="Journal" component = {JournalScreen}/>
    <Tab.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }}/>
    <Tab.Screen name="Memory" component={MemoryScreen} />
  </Tab.Navigator>
  )
}

export default Navigation