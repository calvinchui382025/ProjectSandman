/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
// import { FontAwesome } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
// import ModalScreen from '../screens/ModalScreen';
// import NotFoundScreen from '../screens/NotFoundScreen';
import Stats from '../screens/Stats';
import Workouts from '../screens/Workouts';
import Forum from '../screens/Forum';
import Database from '../screens/Database';
// import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
// const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createMaterialBottomTabNavigator();
const iconSize = 22;

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
            <MaterialCommunityIcons
              name='home'
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
              name={'silverware-fork-knife'} 
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
            <MaterialIcons 
              name={'library-books'} 
              size={iconSize} 
              color={Colors[colorScheme].background} 
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}

// function RootNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
//       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
//       <Stack.Group screenOptions={{ presentation: 'modal' }}>
//         <Stack.Screen name="Modal" component={ModalScreen} />
//       </Stack.Group>
//     </Stack.Navigator>
//   );
// }

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
// const BottomTab = createBottomTabNavigator<RootTabParamList>();
// const iconSize = 22;

// function BottomTabNavigator() {
//   const colorScheme = useColorScheme();

//   return (
//     <BottomTab.Navigator
//       initialRouteName="TabOne"
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme].tint,
//       }}>
//       <BottomTab.Screen
//         name="TabOne"
//         component={Stats}
//         options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
//           title: 'Stats',
//           tabBarIcon: ({ color }) => {
//             return (
//               <MaterialIcons 
//                 name={'stats'} 
//                 size={iconSize} 
//                 color={color} 
//               />
//             )
//           },
//           // headerRight: () => (
//           //   <Pressable
//           //     onPress={() => navigation.navigate('Modal')}
//           //     style={({ pressed }) => ({
//           //       opacity: pressed ? 0.5 : 1,
//           //     })}>
//           //     <FontAwesome
//           //       name="info-circle"
//           //       size={25}
//           //       color={Colors[colorScheme].text}
//           //       style={{ marginRight: 15 }}
//           //     />
//           //   </Pressable>
//           // ),
//         })}
//       />
//       <BottomTab.Screen
//         name="TabTwo"
//         component={Workouts}
//         options={{
//           title: 'Workouts',
//           tabBarIcon: ({ color }) => (
//             <FontAwesome5 
//               name={'dumbbell'} 
//               size={iconSize} 
//               color={color} 
//             />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name="TabThree"
//         component={Forum}
//         options={{
//           title: 'Forum',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons 
//               name={'silverware-fork-knife'} 
//               size={iconSize} 
//               color={color} 
//             />
//           ),
//         }}
//       />
//       <BottomTab.Screen
//         name="TabFour"
//         component={Database}
//         options={{
//           title: 'Database',
//           tabBarIcon: ({ color }) => (
//             <MaterialIcons 
//               name={'library-books'} 
//               size={iconSize} 
//               color={color} 
//             />
//           ),
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// }

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
// }
