import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack";

import Home from "./Home";
import LoginPage from "./LoginPage";
import colors from "./colors";
import accounts from './accounts';
import Registration from './Registration';
import MainPage from './MainPage';
import Map from './Map';
import HelpScreen from './Help';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
    <MainStack.Navigator
     /*headerMode="screen"
     initialRouteName="Login"*/>
        <MainStack.Screen name="Login" component = {LoginPage} options={{ headerShown: false}} />
        <MainStack.Screen name="Search" component = {Home} options={{ headerShown: false}}/>
        <MainStack.Screen name="Accounts" component = {accounts}/>
        <MainStack.Screen name="Registration" component = {Registration}/>
        <MainStack.Screen name="Main" component = {MainPage} options={{ headerShown: false }}/>
        <MainStack.Screen name="Map" component = {Map} options={{headershown:false}}/>
        <MainStack.Screen name="Help" component = {HelpScreen}/>
    </MainStack.Navigator>
);

export default () => (
    <NavigationContainer>
        <MainStackScreen/>
    </NavigationContainer>
);