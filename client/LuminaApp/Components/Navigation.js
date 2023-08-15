import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomePage/HomeScreen';
import MemoryScreen from './MemoryPage/MemoryPage'
import MemoryCalender from './MemoryPage/MemoryCalender'
import JournalScreen from './JournalPage/JournalCategories';
import NavigationJournal from './Navigation/NavigationJournal';
import NavigationHome from './Navigation/NavigationHome';
import NavigationMemory from './Navigation/NavigationMemory';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
  <Tab.Navigator initialRouteName="Home" screenOptions={{
    tabBarStyle: {
      backgroundColor: '#180B2E',
      height: 90, 
      paddingTop: 10,
    },
  }}
  >
  
    <Tab.Screen name="Journal" component = {JournalScreen} options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, focused }) => (
            <NavigationJournal name="journal" color={color} focused={focused} />
          ),
        }}
/>
    <Tab.Screen name="Home" component={HomeScreen}  options={{ 
      headerShown: false,
      tabBarLabel: '',
      tabBarIcon: ({ color, focused }) => (
        <NavigationHome name="journal" color={color} focused={focused} />
      ),
    }}
      />
    <Tab.Screen name = "Memory" component={MemoryScreen} options={{ 
      headerShown: false,
      tabBarLabel: '',
      tabBarIcon: ({ color, focused }) => (
        <NavigationMemory name="journal" color={color} focused={focused} />
      ), 
      }}
      />
  </Tab.Navigator>
  )
}

export default Navigation