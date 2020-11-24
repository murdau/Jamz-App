import React, {Component} from 'react';
import {StyleSheet,Text,Alert, View,Dimensions} from 'react-native';
const window = Dimensions.get('window');
const { width, height } = Dimensions.get('window');
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Marker } from 'react-native-maps';
import Button from 'react-native-button';

const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
type Props = {};
 
export default class App extends Component<Props> {
 
  constructor(props) {
      super(props)
      this.state = {
      		marginBottom:1,
          initialPosition: {
       				latitude: 0,
       				longitude: 0,
       				latitudeDelta: 0,
       				longitudeDelta: 0,
     			},
      }
    }
 
     componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)
 
      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
 
      this.setState({initialPosition: initialRegion})
 
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: false, timeout: 20000,});
  }
 
 
  _onMapReady = () => this.setState({marginBottom: 0})
 
   render() {
 
			return (
 
      <View style={styles.container}>
          <View style={{marginLeft:20, marginRight:20,marginTop:50}}>
          <Text style={{fontSize:20, fontWeight: 'bold',color:'#2b2829',marginLeft:65}}>Your order is on the way!</Text>
          <MapView
                provider={PROVIDER_GOOGLE}
                style={{width:width-40, height:300, marginTop:10,borderRadius:10, marginBottom:this.state.marginBottom}}
                region={this.state.initialPosition}
                showsMyLocationButton={true}
                showsUserLocation={true}
                onMapReady={this._onMapReady}
 
                >
                <Marker
                    coordinate={this.state.initialPosition}
                    title={'User'}
                    description={'You are here!'}
                  />
          </MapView>

          
        </View>
        
<View style={{backgroundColor:'white',color :'white',flexDirection:'column' , flex: 1 ,margin: 10, height: 225,borderRadius :10,width : window.width- 20, shadowColor: '#000',
           shadowOffset: { width: 0, height: 1 },
           shadowOpacity: 0.6,
           shadowRadius: 2,
           elevation: 5 }}>

					<Text style={{fontSize:20, fontWeight: 'bold',color:'#2b2829',alignSelf: 'center', marginTop: 20}}>Order Details</Text>
   
   
   <Button
                    style={{padding:10,fontSize: 15,marginTop:400,marginBottom:10, color: 'black',backgroundColor:'grey',
                    marginLeft:330,width:50,height:40,borderRadius:25}}
                    styleDisabled={{color: 'red',}}
                    onPress={() => {alert('click')}}>
							Help?
			</Button>
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