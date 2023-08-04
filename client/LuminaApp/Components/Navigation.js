import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomePage/HomeScreen';
import MemoryScreen from './MemoryPage/MemoryPage'
import JournalScreen from './JournalPage/JournalScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
  <Tab.Navigator>
    <Tab.Screen name="Journal" component = {JournalScreen}/>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Memories" component={MemoryScreen} />
  </Tab.Navigator>
  )
}

export default Navigation