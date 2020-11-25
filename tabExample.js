/*import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import HelpScreen from './Help';
import LoginPage from './LoginPage';
import { Entypo } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        /* For transulcent toolbar do:
            barStyle={{paddingBottom: 48}}>
            <Tab.Screen options={{
                tabBarLabel: 'Login',
                tabBarIcon: ({ color }) => (
                    <Entypo name="users" size={24} color={'#fff'}/>
                ),
            }} name="Login" component={LoginPage}/>
            <Tab.Screen name="Help" component={HelpScreen}/>
        </Tab.Navigator>
    )
}
*/
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Navigation from './Navigation';
import React from "react";
import LoginPage from './LoginPage';
import homePage from './Home';
import AccountScreen from './accounts';
import Map from './Map';
import MainPage from './MainPage';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#500e93"
      barStyle={{ backgroundColor: '#b74cee' }}
    >
      <Tab.Screen
        name="Main"
        component={MainPage}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-marker-circle" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}