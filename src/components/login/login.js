
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import LoginForm from './loginForm.js';

export default class login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={style.container}>
        <View style={style.logoContainer}>
            <Image 
              style ={style.logo}
              source = {require('../../images/hero-logo.png')}
            />
            <Text style={style.title}>An app made by Phat</Text>
        </View>
        <View style={style.formContainer}>
            <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer:{
      alignItems:'center',
      flexGrow: 1,
      justifyContent: 'center'
    },
    logo:{
      width: 150,
      height: 150
    },
    title:{
      color: '#FFF',
      marginTop:10,
      width: 160,
      textAlign:'center',
      opacity: 0.9
    }
})