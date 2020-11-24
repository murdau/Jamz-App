import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { color } from "react-native-reanimated";
import colors from "./colors";
import Navigation from './Navigation';

export default class Regform extends React.Component {
  render() {
    return (
      <View style={styles.regform}>
        <Text style={styles.header}>Create Your Account</Text>

        <TextInput
          style={styles.textinput}
          placeholder="Enter full name"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          style={styles.textinput}
          placeholder="Enter your email"
          underlineColorAndroid={"transparent"}
        />

        <TextInput
          style={styles.textinput}
          placeholder="create password"
          secureTextEntry={true}
          underlineColorAndroid={"transparent"}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}>Next..</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    alignSelf: "stretch",
    backgroundColor: "#AB79B9",/*"#8D559B",*/
    paddingBottom: 80
  },
  header: {
    fontSize: 30,
    color: "#fff",
    paddingBottom: 100,
    marginBottom: 100,
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1
  },
  textinput: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "#fff",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    borderRadius: 50,
    backgroundColor: "#8D559B",
    marginTop: 30
  },
  btntext: {
    color: "#fff",
    fontWeight: "bold"
  }
});