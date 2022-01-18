/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import Stats from '../screens/Stats';
import Workouts from '../screens/Workouts';
import Forum from '../screens/Forum';
import Database from '../screens/Database';
import LinkingConfiguration from './LinkingConfiguration';

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//======================================================
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
//======================================================
const Tab = createMaterialBottomTabNavigator();
const iconSize = 22;
//======================================================
function RootNavigator() {
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator
      initialRouteName='Stats'
      backBehavior='order'
      shifting
      // activeColor='orange'
      // inactiveColor='white'
    >
      <Tab.Screen 
        name="Stats" 
        component={Stats}
        options={{
          tabBarLabel: 'Stats',
          tabBarColor: 'turquoise',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name='stats-chart'
              color={Colors[colorScheme].background}
              size={iconSize}
            />
          )
        }}
      />
      <Tab.Screen 
        name="Workouts" 
        component={Workouts}
        options={{
          tabBarLabel: 'Workouts',
          tabBarColor: 'darkturquoise',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 
              name={'dumbbell'} 
              color={Colors[colorScheme].background} 
              size={iconSize} 
            />
          )
        }}
      />
      <Tab.Screen 
        name="Forum" 
        component={Forum}
        options={{
          tabBarLabel: 'Forum',
          tabBarColor: 'lightseagreen',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons 
              name={'forum'} 
              color={Colors[colorScheme].background} 
              size={iconSize} 
            />
          )
        }}
      />
      <Tab.Screen 
        name="Database" 
        component={Database}
        options={{
          tabBarLabel: 'Database',
          tabBarColor: 'teal',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 
              name={'database'} 
              size={iconSize} 
              color={Colors[colorScheme].background} 
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}