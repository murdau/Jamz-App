import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, SafeAreaView, Button, TextInput, FlatList } from 'react-native';
import Navigation from './Navigation';
import colors from './colors';
import { Entypo } from '@expo/vector-icons';
import { createPortal, render } from 'react-dom';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginPage from './LoginPage';

const Tab = createMaterialBottomTabNavigator();
const screen = Dimensions.get('window');

/*function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Map" component={Map}/>
        </Tab.Navigator>
    )
}*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AB79B9'
    },
    row: {
        backgroundColor: colors.black,
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    taskbar: {
        backgroundColor: colors.blue,
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerText: {
        fontSize: 20,
        fontFamily: "Helvetica",
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.white
    },
    input: {
        margin: 15,
        height: 45,
        padding:10,
        width: screen.width*0.8,
        alignSelf: 'center',
        borderColor: colors.fuchsia,
        borderWidth: 1,
        backgroundColor: colors.black,
        borderRadius: 50,
        color: colors.white,
     },
     backButton: {
        position:'absolute',
        left:0,
        right:80,
        top:0,
        bottom:0,
        marginLeft:11,
        marginTop:18,
        marginRight: 245,
        marginBottom: 600,
        backgroundColor: 'red'
     },
     mapButton: {
        position:'absolute',
        left:0,
        right:80,
        top:0,
        bottom:0,
        marginLeft:11,
        marginTop:600,
        marginRight: 245,
        marginBottom: 18,
        backgroundColor: 'red'
     },
     wrapper: {
        flex:1
     },
     textInputWrapper: {
        margin: 20,
        backgroundColor: "red",
     },
     topWrapper: {
        backgroundColor: "blue"
     },
     list: {
        backgroundColor: "green"
     }
});

export default({navigation}) => {
    return(
<View style={styles.container}>
    <SafeAreaView style={styles.container}>
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.push('Search')}>
          <Entypo name="back" size={28} color={colors.white}/>
    </TouchableOpacity>
    <Text style={styles.headerText}>Restaurants</Text>
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "                                Search"
               placeholderTextColor = '#fff'/*"#915C83"*/
               autoCapitalize = "none"/>
    <TouchableOpacity style={styles.mapButton} onPress={() => navigation.push('Map')}>
        <Entypo name="location"/>
    </TouchableOpacity>
    </SafeAreaView>
</View>
    )
}