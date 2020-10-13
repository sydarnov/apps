import React, { useState } from 'react';  //ustState is react hook 
import { StyleSheet, Text, View, KeyboardAvoidingView, Image } from 'react-native';
import Signin from './components/Signin'


export default function App() {

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>

      <View style={styles.logoContainer}>

        <Image style={styles.logo} source={require('./logo.jpg')} />

      </View>


      <View>

        <View >
          <Signin />
        </View>
      </View>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({

  logoContainer: {
    alignItems: 'center',
    
  },

  logo:
  {
    width: 500,
    height: 330,

  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    
  }

});
