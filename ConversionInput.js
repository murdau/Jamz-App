import React from 'react';
import { TouchableOpacity, TextInput, View, StyleSheet, Text, Dimensions } from 'react-native';
import colors from './colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginVertical: 10,
        marginVertical: 20,
        borderRadius: 5,
        flexDirection: "row"
    },
    button: {
        padding: 15,
        borderRightColor: colors.border,
        borderRightWidth: 1,
        width:screen.width*0.6
    },
    buttonText: {
        fontSize: 18,
        color: colors.blue,
        fontWeight: "bold",
    },
    input: {
        width: screen.width*0.8,
        flex: 1,
        padding: 10,
        color: colors.textLight,
    }
});

export const ConversionInput = ({text, value, onButtonPress, onChangeText, keyBoardType}) => {

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onButtonPress} styles={styles.button}>
             <TextInput style={styles.input}/>
            </TouchableOpacity>
            <TextInput style={styles.input}/>
        </View>
    );
};