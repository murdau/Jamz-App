import React, {Component} from 'react';
import {StyleSheet,Text,Alert,TextInput, View,Dimensions} from 'react-native';
const window = Dimensions.get('window');
const { width, height } = Dimensions.get('window');
import Button from 'react-native-button';
 
export default class HelpScreen extends Component {
 
  constructor(props) {
        super(props);
        this.state={
            review:'',
				}        
    }
 
   render() {
 
			return (
 
      <View style={styles.container}>
          <View style={{marginLeft:20, marginRight:20,marginTop:85}}>
          <Text style={{fontSize:20, fontWeight: 'bold',color:'#2b2829',alignSelf:'center'}}>Help Menu</Text>
          

          
        </View>
        

<Button
                    style={{padding:10,fontSize: 25,marginTop:60,marginBottom:10, color: 'black',backgroundColor:'grey',
                    alignSelf:'center',width:400,height:60,borderRadius:25}}
                    styleDisabled={{color: 'red',}}
                    onPress={() => {alert('click')}}>
							Stolen Drone?
			</Button>
   
<Button
                    style={{padding:10,fontSize: 25,marginTop:10,marginBottom:10, color: 'black',backgroundColor:'grey',
                    alignSelf:'center',width:400,height:60,borderRadius:25}}
                    styleDisabled={{color: 'red',}}
                    onPress={() => {alert('click')}}>
							Incorrect Order?
			</Button>

<Button
                    style={{padding:10,fontSize: 25,marginTop:10,marginBottom:10, color: 'black',backgroundColor:'grey',
                    alignSelf:'center',width:400,height:60,borderRadius:25}}
                    styleDisabled={{color: 'red',}}
                    onPress={() => {alert('click')}}>
							TestButton?
			</Button>

<View style={{backgroundColor:'white',color :'white',margin: 10, marginTop:100, height: 225,borderRadius :10,width : window.width- 20, shadowColor: '#000',
           shadowOffset: { width: 0, height: 1 },
           shadowOpacity: 0.6,
           shadowRadius: 2,
           elevation: 5 }}>
 <Text style={{fontSize:15,fontWeight:'bold',color:'black',marginTop:10, alignSelf:'center'}}>Submit a complaint</Text>

      <TextInput style={{ fontSize: 16, borderWidth: 1,width:'100%', borderColor:'lightgrey', marginBottom:10, height:170}}
           placeholder="Enter here"
           returnKeyType='go'
           onChangeText={(text)=> this.setState({review : text})}
           autoCorrect={false}
           value ={this.state.review}
           textAlignVertical= {'top'}
        />

			</View>
        
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AB79B9',
  },
});