import { StatusBar } from 'expo-status-bar';
import React from 'react';
import colors from './colors';
import { StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, 
    Linking, 
    ScrollView, 
    Keyboard, 
    ImageBackground,
    Dimensions,
    Button,
    Animated,
    SafeAreaView
} from 'react-native';
import { ConversionInput } from './ConversionInput';
import { Entypo } from "@expo/vector-icons";
import Navigation from './Navigation';
import { AnimatedBackgroundColorView } from 'react-native-animated-background-color-view';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { getUsers } from './mockAPI';

const screen = Dimensions.get('window');

export default class homePage extends React.Component/*function App() */{
  state = { users: [], hadLoadedUsers: false, userLoadingErrorMessage:''};

  loadUsers(){
    this.setState({ hadLoadedUsers: false, userLoadingErrorMessage:''});
    getUsers()
      .then((res) => 
        this.setState({
          hadLoadedUsers: true,
          users: res.users,
        }),
        )
        .catch(this.handleUserLoadingError)
      }
      handleUserLoadingError = (res) => {
        if (res.error === 401){
          this.props.navigation.push('Login');
        } else{
          this.setState({
            hadLoadedUsers: false,
            userLoadingErrorMessage: res.message,
          });
        }
      }
      componentDidMount(){
        this.loadUsers();
      }
  render() {
  return (
    <View style={styles.container}>
      <AnimatedBackgroundColorView 
      color={colors.blud}
      initialColor={colors.white}
      delay='250'
      duration='10400'
      style={styles.animatedcolors}>
        <TouchableOpacity style={styles.userButton} onPress={() => this.props.navigation.navigate('Accounts')}>
          <Entypo name="users" size={28} color={colors.white}/>
        </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
          <Entypo name="back" size={28} color={colors.white}/>
        </TouchableOpacity>
      <View style={styles.container}>
      <Image source={require('./JamzLOGOREAL2.png')} style={styles.Image} resizeMode='contain'/>
      </View>
      <Text style={styles.text2}>What are you craving?</Text>
      <View>
        <ConversionInput onButtonPress={() => alert('todo!')}/>
      </View>
      <TouchableOpacity style={styles.exploreButton} onPress={() => this.props.navigation.navigate('Tab')}>
          <Text style={styles.text2}>            Explore  <Entypo name="magnifying-glass" size={18} color={colors.white}/></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Help')}>
          <Text style={styles.text3}>Help <Entypo name="info-with-circle" size={16} color={colors.white}/></Text>
      </TouchableOpacity>
      <Text style={styles.text}></Text>
      <StatusBar style="auto" />
      </AnimatedBackgroundColorView>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*backgroundColor: colors.blud,*/
    alignItems: 'center',
    justifyContent: 'center',
  },
  userButton: {
    marginLeft: 310,
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 8,
  },
  animatedcolors: {
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  },
  Image: {
    paddingTop: screen.height*0.4,
    position: 'relative',
    width: screen.width*0.55,
    height: screen.width*0.55,
    marginTop: 30
  },
  text: {
    color: colors.white,
    fontSize: 14,
    marginBottom: 80,
    justifyContent: 'center',
    flex: 1
  },
  text2: {
    color: colors.white,
    fontSize: 16,
    marginTop: -2,
    fontWeight: 'bold',
    fontFamily: 'Helvetica'
  },
  button: {
    padding: 10,
    margin: 15,
    height: 40,
    backgroundColor: colors.violet,
    borderRadius: 8,
  },
  exploreButton: {
      position: "relative",
      marginTop: 10,
    padding: 10,
    margin: 15,
    height: 40,
    backgroundColor: colors.violet,
    borderRadius: 8,
    width: screen.width*0.5
  },
  text3: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
  header: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  headerText: {
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    fontSize: 14,
  },
  backButton: {
    /*
    marginRight: 310,
    paddingTop: 0,
    paddingBottom:0,
    height: 40,
    /*backgroundColor: colors.blud,
    borderRadius: 8,
    position:'relative',
    textAlignVertical: 'top'
    */
   position:'absolute',
   left:0,
   right:80,
   top:0,
   bottom:0,
   marginLeft:15,
   marginTop:22
  }
});