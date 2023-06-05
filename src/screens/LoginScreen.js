import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SIZES } from '../constants/theme'

export default function LoginScreen() {
    return (
        <View style={{ padding: 10, paddingTop: 50 }}>
            <Text style={{ fontSize: SIZES.h2, fontWeight: "900", color: 'black' }}>Enter Phone number</Text>
            <TextInput style={{ backgroundColor: '#ebe6e6', marginTop: 10, borderRadius: 10 }} />
            <Text style={{fontSize:SIZES.h4,margin:5}}>Please use your current number or your OkPandit
                registered number</Text>
        </View>
    )
}