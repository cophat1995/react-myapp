import React, { Component } from 'react';
import {Text,View,Animated,TouchableOpacity, ToolbarAndroid} from 'react-native';

export default class Details extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ToolbarAndroid style={{backgroundColor:'red', height:56}}
          title="AwesomeApp"
          actions={[{title: 'Settings', show: 'always'}]} />
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
        </FadeInView>
        <TouchableOpacity style={{backgroundColor:'green'}}
          onPress={() => {this.props.navigation.goBack()}}
        >
          <Text style={{color:'#fff', fontSize:20, padding:5}}>Go Back!!!</Text>
        </TouchableOpacity>
        <Text>{this.props.navigation.state.params.item}</Text>
      </View> 
    );
  }
}
class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 3000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }
  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
