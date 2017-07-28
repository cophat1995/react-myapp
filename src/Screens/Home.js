import React, { Component } from 'react';
import { Text,View,TouchableOpacity,Alert,Keyboard, TextInput,  } from 'react-native';

export default class Home extends Component {
  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow () {
    alert('Keyboard Shown');
  }

  _keyboardDidHide () {
    alert('Keyboard Hidden');
  }
  render() {
    return (   
      <View style={{flex:1, /*justifyContent:'center'*/ alignItems:'center'}}>
        <Text>Hello</Text>
        <TouchableOpacity style={{backgroundColor:'green'}}
          onPress={() => {this.props.navigation.navigate('ManHinh_Detail', { item: 'Heeloo!!!'})}}
        >
          <Text style={{color:'#fff', fontSize:20, padding:5}}>Go to details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:'#841584'}}
          onPress={this._handleAlert}
        >
          <Text style={{color:'#fff', fontSize:20, padding:5}}>Show Alert!!!</Text>
        </TouchableOpacity>

        <TextInput
          onSubmitEditing={Keyboard.dismiss}
        />
        <TouchableOpacity style={{backgroundColor:'red', alignItems:'center'}}
          onPress={() => {this.props.navigation.navigate('DrawerOpen')}}
        >
          <Text style={{color:'#fff', fontSize:20, padding:5}}> Go Menu!!!</Text>
        </TouchableOpacity>
      </View>  
    ); 
  }
  _handleAlert(){
    Alert.alert(
      'Day la title',
      'Can I help you ???',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
}
