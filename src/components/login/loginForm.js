
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native';

export default class loginForm extends Component {
  render() {
    return (
      <View style={style.container}>
        <StatusBar 
            barStyle='light-content'
        />
        <TextInput
            placeholder='username or email'
            placeholderTextColor = 'rgba(255,255,255,0.7)'
            returnKeyType='next'
            onSubmitEditing={()=> this.passwordInput.focus()}
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            style={style.input} 
        />
        <TextInput
            placeholder='password'
            placeholderTextColor = 'rgba(255,255,255,0.7)'
            returnKeyType='go'
            secureTextEntry
            style={style.input}
            ref={(input) => this.passwordInput = input} 
        />

        <TouchableOpacity style={style.buttonContainer}>
            <Text style={style.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
    container: {
        padding: 20
    },
    input:{
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginBottom: 10,
      color: '#FFF',
      paddingHorizontal: 10
    },
    buttonContainer:{
        textAlign: 'center',
        paddingVertical:15,
    },
    buttonText:{
        textAlign: 'center',
        color: '#FFFFFF'
    }

})