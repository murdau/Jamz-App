import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,ActivityIndicator,ScrollView
    ,StatusBar,Image,TouchableOpacity ,Alert,Container,Linking ,TextInput , Dimensions, SafeAreaView} from 'react-native';
const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height
import Button from 'react-native-button';
const window = Dimensions.get('window');
const GLOBAL = require('./Global');
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Navigation from './Navigation';

export default class Cart extends Component {

    constructor(props){
        super(props);
        const { navigation } = this.props;
        this.state = {
            cartItems: [],
            totalAmount: 0,
            finalPayAmount: 0
        }
    }

    _keyExtractor = (item, index) => item.productID;

    componentDidMount(){
        this.props.navigation.addListener('focus', this._handleStateChange);
    }

    _handleStateChange= state=>{
        //         alert(JSON.stringify(GLOBAL.cartItems))
        // console.log(JSON.stringify(GLOBAL.cartItems))

        var calcAmount = 0
        var ar = GLOBAL.cartItems
        for(let i=0 ; i<ar.length; i++ ){
            calcAmount = calcAmount + parseInt(ar[i].price) 
        }
        this.setState({cartItems: GLOBAL.cartItems,
            totalAmount: calcAmount,
            finalPayAmount: calcAmount + 3
        })

    }


    buttonClickListeners = () =>{
        this.props.navigation.navigate('Map')

    }


    removeItem=(itemData)=>{
    }


    addMore=(itemData)=>{

    }


    removeMore=(itemData)=>{
        if(itemData.item.quantity == 0){
            this.removeItem(itemData)
        }else{

        }
    }

    selectedFirst=(itemData)=>{
    }


  _renderItem=({item, index}) => {
        return (
    <TouchableOpacity style={{width:wp('94%'), margin:7,height:hp('18%'),borderRadius:8,backgroundColor:'white',}}
    activeOpacity={0.99} onPress={()=> this.selectedFirst(item)}>
      <View style  = {{width:wp('94%'), height:hp('18%'),backgroundColor:'white',shadowColor: "#000",
          elevation:4, flexDirection:'row',alignItems:'center',borderRadius:8, 
      }}>

    <Image style={{width:wp(23), height:hp(13),borderWidth:1.4, marginLeft:wp(3),borderRadius:5,borderColor:'#E60000', resizeMode:'cover',}} source={item.image}/>

    <View style={{backgroundColor:'white', width:wp('45%'),  flexDirection:'column',marginLeft:wp(3)}}>
          <Text style = {{fontSize:15, color:'#000000',width:wp('39%'),}}
          numberOfLines={2}>
              {item.name}
          </Text>
          <View style={{width:wp('40%'), flexDirection:'row', justifyContent:'space-between', }}>

          <Text style = {{fontSize:13,color:'black',width:wp(27),marginTop:hp(1)}}>
             ${item.price}
          </Text>
          </View>

      </View>
      <TouchableOpacity style={{width:wp(5), height:hp(5), resizeMode:'contain',position:'absolute', top:2, right:wp(1)}}
      onPress={()=> this.removeItem(item)}>
          {/*Use a cross icon here to remove product from cart*/} 
        <Image style={{width:wp(3.5), height:hp(4), resizeMode:'contain',}} source={require('./user.png')}/>
      </TouchableOpacity>
      </View>
    </TouchableOpacity>
    )
}


    render() {
        return (

<SafeAreaView>
<ScrollView>
{this.state.cartItems.length != 0 && (
   <>
            <FlatList style= {{flexGrow:0,marginVertical:hp(1.5), marginHorizontal:wp(1.5)}}
                      data={this.state.cartItems}
                      numColumns={1}
                      keyExtractor = { (item, index) => index.toString() }
                      renderItem={this._renderItem}
                      extraData={this.state}
            />


        <View style = {{width:wp(94),height:hp(17),backgroundColor:'white',marginVertical:hp(1) ,
        marginHorizontal:wp(3),flexDirection :'column',borderRadius:8, elevation:4}}>

          <View style={{width:wp(94), backgroundColor:'white', height:hp(5),flexDirection:'row',alignSelf:'center', justifyContent:'space-between', alignItems:'center', marginTop:hp(1) }}>
          <Text style={{fontSize:15, color:'black', marginLeft:wp(3.5)}}>Cart Total</Text>
           <Text style={{fontSize:15, color:'black', marginRight:wp(3.5),textAlign:'left'}}>${this.state.totalAmount}</Text>
          </View>


          <View style={{width:wp(94), backgroundColor:'white', height:hp(5),flexDirection:'row',alignSelf:'center', justifyContent:'space-between', alignItems:'center', }}>
          <Text style={{fontSize:15, color:'black', marginLeft:wp(3.5)}}>Delivery</Text>
          <Text style={{fontSize:15, color:'black', marginRight:wp(3.5),textAlign:'left'}}>$3 (fixed)</Text>
          </View>

          <View style={{width:wp(94), backgroundColor:'white', height:hp(5),flexDirection:'row',alignSelf:'center', justifyContent:'space-between', alignItems:'center', }}>
          <Text style={{fontSize:15, color:'#E60000', marginLeft:wp(3.5)}}>Subtotal</Text>
          <Text style={{fontSize:15, color:'#E60000', marginRight:wp(3.5),textAlign:'left'}}>${this.state.finalPayAmount}</Text>
          </View>

        </View>


                <Button
                containerStyle={{width:wp('70%'),padding:16, height:hp(7.5), overflow:'hidden', borderRadius:40,
                 backgroundColor: 'purple', elevation: 5, alignSelf:'center',  marginTop:hp(15), marginBottom:hp(5)}}
                style={{fontSize: 18, color: 'white', alignSelf: 'center'}}
                onPress={this.buttonClickListeners}
                >
                PLACE ORDER
                </Button>

</>
  )}


  {this.state.cartItems.length==0 && (

            <Text style={{fontSize : 15,marginTop:15,color :'black',alignSelf:'center', textAlign:'center'}}>
            Empty Cart.. Add some Items from Explore!
            </Text>

    )}


</ScrollView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },

});