import { View, Text,TextInput,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SIZES } from '../constants/theme'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

export default function EnterOtpScreen() {
    const [mobile, setMobile] = useState('')

  return (
    <View style={{ padding: 10, paddingTop: 50 }}>
            <Text style={{ fontSize: SIZES.h2, fontWeight: "900", color: 'black',padding:10 }}>Enter OTP</Text>
            <TextInput
            autoFocus 
            onChangeText={setMobile}
            value={mobile}
            placeholder="Enter OTP"
            keyboardType="numeric"
            style={{padding: 13, backgroundColor: '#ebe6e6', margin: 10, borderRadius: 6}} />
            <Text style={{ padding:10,fontSize: SIZES.h4, margin: 5, color: 'black' }}>2:23</Text>
            <Text style={{padding:10,textAlign:'center'}}>Haven’t recieved the OTP yet ? <Text onPress={()=>{}} style={{color:'blue'}}>RESEND</Text></Text>
            <Pressable style={ styles.button} ><Text style={styles.text} onPress={()=>props.navigation.navigate('addDetail')}>Submit</Text></Pressable>
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