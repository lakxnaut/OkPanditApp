import { View, Text,TextInput,StyleSheet } from 'react-native'
import React, { useState,useEffect } from 'react'
import { SIZES } from '../constants/theme'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { VerificationAPI } from '../api/verificationApi'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

export default function EnterOtpScreen(props) {
    const [OTP, setOTP] = useState('')
    const { phone } = props.route.params;

    const showToast = () => {
      Toast.show({
        type: 'success',
        text1: 'Otp Send Successfully',
      
      });
    }

    useEffect(() => {
      console.log('hello from otp')
      showToast()
    }, [])
    

    

    const VerifyOTPButton =()=>{

    //   const json = {
    //     "phone":phone,
    //     "otp":OTP
    // }

    const json = {
      phone:"1234567890",
      otp:"1234"
  }
      VerificationAPI.VerifyPhoneOtp(json).then((res)=>{
        if(res.status){
          console.log(res)
          props.navigation.navigate('HomePage')
        }
      })
    }

  return (
    <View style={{ padding: 10, paddingTop: 50 }}>
            <Text style={{ fontSize: SIZES.h2, fontWeight: "900", color: 'black',padding:10 }}>Enter OTP sent on +91{phone}</Text>
            <TextInput
            autoFocus 
            onChangeText={setOTP}
            value={OTP}
            placeholder="Enter OTP"
            keyboardType="numeric"
            style={{padding: 13, backgroundColor: '#ebe6e6', margin: 10, borderRadius: 6}} />
            <Text style={{ padding:10,fontSize: SIZES.h4, margin: 5, color: 'black' }}>2:23</Text>
            <Text style={{padding:10,textAlign:'center'}}>Haven’t recieved the OTP yet ? <Text onPress={()=>{}} style={{color:'blue'}}>RESEND</Text></Text>
            <Pressable style={ styles.button} ><Text style={styles.text} onPress={VerifyOTPButton}>Submit</Text></Pressable>
        </View>
  )
}


const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      paddingHorizontal: 32,
      borderRadius: 11,
      elevation: 3,
      backgroundColor: 'blue',
      margin: 10
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });