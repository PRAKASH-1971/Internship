import React,{ useEffect, useRef, useState } from 'react'
import {StyleSheet,View,Image,Text,Button,Pressable} from "react-native"
import OtpContainer from './OtpContainer'
// import OtpContainer from './OtpContainer'

const OtpPage = (props) => {
  return (
    <View style={{ flex: 1,backgroundColor:'white',width:'100%',height:'70%',marginTop:'-50px',   alignItems:'center',justifyContent:'flex-start' }}>
      
    <Image
      source={require("../assets/Images/mailicon.png")}
      style={{ width: '75%', height: 125, margin:'auto' }}
    />
    <View  style={{backgroundColor: "#243D88",height:'40%',marginBottom:'10px', width: '90%',alignItems: "center",borderRadius: 29,}}>

    <Text style={styles.textp} >Enter the OTP</Text>
    <Text style={styles.textps} >We have sent OTP to</Text>

    <OtpContainer/>

     <Text style={styles.otpagain}>Resend OTP in</Text>  
     
      <Pressable style={styles.button} onPress={()=>props.navigation.navigate("MAP")}>
      <Text style={styles.text}>Submit </Text>
    </Pressable>
    </View>


  </View>
  )
}

const styles = StyleSheet.create({
    textp: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginTop: 20,
    },
    
    textps: {
        fontSize: 13,
        fontWeight: "bold",
        color: "white",
        marginTop: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 60,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 13,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    otpagain: {
        fontSize: 13,
        fontWeight: "bold",
        color: "white",
        marginBottom: 20,
      },
})

export default OtpPage