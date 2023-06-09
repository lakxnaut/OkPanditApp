import { View, Text, TextInput, Button,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SIZES } from '../constants/theme'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

export default function LoginScreen(props) {
    const [mobile, setMobile] = useState('')
    return (
        <View style={{ padding: 10, paddingTop: 50, }}>
            <Text style={{ fontSize: SIZES.h2, fontWeight: "900", color: 'black',padding:10 }}>Enter Phone number</Text>
            <TextInput 
            onChangeText={setMobile}
            value={mobile}
            placeholder="Enter Mobile"
            keyboardType="numeric"
            style={{ padding: 13, backgroundColor: '#ebe6e6', margin: 10, borderRadius: 6 }} />
            <Text style={{ fontSize: SIZES.h4, margin: 10, color: 'black' }}>Please use your current number or your OkPandit
                registered number</Text>
            <Pressable style={ styles.button} ><Text style={styles.text} onPress={()=>props.navigation.navigate('otp')}>Get OTP</Text></Pressable>
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