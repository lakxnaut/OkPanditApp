import { View, Text } from 'react-native'
import React from 'react'
import { SIZES } from '../constants/theme'

export default function CategoryCard() {
  return (
    <View style={{width:SIZES.width/2.4,height:SIZES.height/4,margin:5,backgroundColor:'grey'}}>
      <Text>Hello</Text>
      <Text>Work</Text>
    </View>
  )
}