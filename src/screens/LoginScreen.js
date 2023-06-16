import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SIZES} from '../constants/theme';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {VerificationAPI} from '../api/verificationApi';

export default function LoginScreen(props) {
  const [mobile, setMobile] = useState('');
  useEffect(() => {
    console.log('hellllllllllllllllllllo');
  }, []);

  const changeNumber = (text)=>{
    console.log(text)
    setMobile(text.replace(/[^0-9]/g, ''))

  }

  const GetOTP = () => {
    console.log('first');
    VerificationAPI.VerifyAuth(mobile).then(res => {
      if (res.status) {
        console.log(res)
        props.navigation.navigate('otp', {phone: mobile});
      }
    });
  };
  return (
    <View style={{padding: 10, paddingTop: 50}}>
      <Text
        style={{
          fontSize: SIZES.h2,
          fontWeight: '900',
          color: 'black',
          padding: 10,
        }}>
        Enter Phone number
      </Text>
      <TextInput
        onChangeText={(t)=>changeNumber(t)}
        value={mobile}
        autoFocus
        placeholder="Enter Mobile"
        keyboardType="numeric"
        maxLength={10}
        style={{
          padding: 13,
          backgroundColor: '#ebe6e6',
          margin: 10,
          borderRadius: 6,
        }}
      />
      <Text style={{fontSize: SIZES.h4, margin: 10, color: 'black'}}>
        Please use your current number or your OkPandit registered number
      </Text>
      <Button title="Press Me" onPress={GetOTP}></Button>
      {/* <Button style={ styles.button} ><Text style={styles.text} onPress={GetOTP}>Get OTP</Text></Button> */}
    </View>
  );
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
    margin: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
