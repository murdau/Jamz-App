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
import { getUsers } from './mockAPI';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create ({
    container: {
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: colors.blud
    },
    accountsTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'Helvetica',
        marginBottom: 18,
        color: colors.white
    },
    savedAccounts: {
        fontSize: 14,
        fontFamily: 'Helvetica',
    },
    accountsButton:{
    backgroundColor: '#8a42f4',
      borderColor: colors.blud,
      borderWidth: 1,
      borderRadius: 60,
      padding: 10,
      margin: 15,
      height: 40,
    }
})

export default class AccountScreen extends React.Component {
    state = { users: [], hadLoadedUsers: false, userLoadingErrorMesaage:''};
    loadUsers() {
        this.setState({ hasLoadedUsers: false, userLoadingErrorMessage: '' });
        getUsers()
          .then((res) =>
            this.setState({
              hasLoadedUsers: true,
              users: res.users,
            }),
          )
          .catch(this.handleUserLoadingError);
      }
    
      handleUserLoadingError = (res) => {
        if (res.error === 401) {
          this.props.navigation.navigate('Login');
        } else {
          this.setState({
            hasLoadedUsers: false,
            userLoadingErrorMessage: res.message,
          });
        }
      }
      componentDidMount(){
          this.loadUsers();
      }
      render(){
          return(
                 <View style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#AB79B9"}}>
                  <Text style={styles.accountsTitle}>Accounts</Text>
                  {this.state.users.map((user) =>(
                      <Text style={styles.savedAccounts} key={user.email}>{user.email}</Text>
                  ))}
                  <Button style={styles.accountsButton} title="Log Out" onPress={() => this.props.navigation.push('Login')}/>
                </View>
          )
      }
}