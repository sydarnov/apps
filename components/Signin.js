import React,{useState} from 'react';  //ustState is react hook 
import {  StyleSheet, Text, View ,TextInput, TouchableOpacity } from 'react-native';


export default function App() {

  return (

    <View style={styles.container}>
        <Text style={styles.welcomenote}>Welcome</Text>

        <View>
        <TextInput  style={styles.input} placeholder='User Name' />
        <TextInput  style={styles.input} placeholder='Password' secureTextEntry />
        </View>

        <TouchableOpacity style={styles.buttonLogin }>
          <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

    </View>


  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginVertical:100,
        
      },

welcomenote:{
    textAlign:'center',
    fontWeight:'bold',
    marginVertical:10,
    fontSize:20,
    opacity:0.5,

},

input:{
    height:40,
    backgroundColor: '#ddd',
    marginBottom: 20,
    color: '#000000', 
    paddingHorizontal:20,
    borderRadius: 100,
   },

   buttonLogin:{

    backgroundColor: '#29809b',
    paddingVertical:15,
    borderRadius: 100,



   },
   buttonText:{
       textAlign:'center',
       color:'#fff',
       fontWeight:'bold'
   },

});
