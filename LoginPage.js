import React, { Component, useState } from 'react'
import { View,
         Text,
         TouchableOpacity, 
         TextInput, 
         StyleSheet, 
         Image, 
         Dimensions, 
         Keyboard,  
         AppRegistry,
         Animated,
         Easing
         } from 'react-native'
import colors from './colors'
import Navigation from './Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { login } from './mockAPI';

const screen = Dimensions.get('window');

/*class Inputs extends Component {*/
export default ({navigation}) => { 
   /*const [errorMessage, setErrorMessage] = useState('');*/
   const loginUser = () => {
      /*setErrorMessage('');*/
      login('test@test.ca', 'password')
      .then(() => {
         navigation.push('Search');
      })
      .catch((err) => console.log('error', err.message));
   };
  /*state = {
      email: '',
      password: '',
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, password) => {
      alert('email: ' + email + ' password: ' + password)
   }
   render() {*/
      return (
         <View style = {styles.container}>
             <View>
                 <Image source={require('./JamzLOGOREAL.png')} style={styles.image}/>
             </View>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "                                Email"
               placeholderTextColor = '#fff'/*"#915C83"*/
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "                            Password"
               placeholderTextColor = '#fff'/*"#915C83"*/
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress={loginUser}/*{ () => navigation.push("Search")
                  () => this.login(this.state.email, this.state.password)}*/
               >
               <Text style = {styles.submitButtonText}>                                    Submit </Text>
            </TouchableOpacity>
               <Text style={styles.account}>Dont have an account?</Text>
            <TouchableOpacity onPress={() => navigation.push("Registration")}>
               <Text style={styles.signup}>Sign up</Text>
            </TouchableOpacity>
            <Text style={styles.or}>or</Text>
            <TouchableOpacity onPress={() => navigation.push("Search")}> 
               <Text style={styles.guestText}>Proceed as a Guest</Text>
            </TouchableOpacity>
         </View>
      )
   }
/*export default Inputs*/
const styles = StyleSheet.create({
   container: {
      paddingTop: 100,
      paddingBottom: 200,
      backgroundColor: colors.blud
   },
   guestText: {
      fontWeight: 'bold',
      fontFamily: 'Helvetica',
      color: colors.white,
      marginLeft: 120,
      paddingTop: 10
   },
   input: {
      margin: 15,
      height: 70,
      padding:10,
      width: screen.width*0.8,
      alignSelf: 'center',
      borderColor: colors.fuchsia,
      borderWidth: 1,
      backgroundColor: colors.black,
      borderRadius: 50,
      color: colors.white,
   },
   submitButton: {
      backgroundColor: '#8a42f4',
      borderColor: colors.blud,
      borderWidth: 1,
      borderRadius: 60,
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Helvetica',
   },
   image: {
    position: 'relative',
    width: screen.width*0.5,
    height: screen.width*0.18,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 90,
    marginBottom: 60
   },
   account: {
      color: colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Helvetica',
      marginLeft: 115
   },
   signup: {
      fontWeight: 'bold',
      fontFamily: 'Helvetica',
      color: colors.white,
      marginLeft: 160,
      marginTop: 10
   },
   or: {
      marginLeft: 180,
      color: colors.white,
      marginTop: 10,
      fontFamily: 'Helvetica'
   }
})