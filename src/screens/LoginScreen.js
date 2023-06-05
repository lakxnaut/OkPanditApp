import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { SIZES } from '../constants/theme'

export default function LoginScreen() {
    const [mobile, setMobile] = useState('')
    return (
        <View style={{ padding: 10, paddingTop: 50 }}>
            <Text style={{ fontSize: SIZES.h2, fontWeight: "900", color: 'black' }}>Enter Phone number</Text>
            <TextInput 
            onChangeText={setMobile}
            value={mobile}
            placeholder="Enter Mobile"
            keyboardType="numeric"
            style={{ backgroundColor: '#ebe6e6', marginTop: 10, borderRadius: 10 }} />
            <Text style={{ fontSize: SIZES.h4, margin: 5, color: 'black' }}>Please use your current number or your OkPandit
                registered number</Text>
            <Button style={{ borderRadius: 20, padding: 110 }} title="Press me" />
        </View>
    )
}