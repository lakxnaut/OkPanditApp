import { View, Text,Button, Image, ImageBackground } from 'react-native'
import React from 'react'
import { SIZES } from '../constants/theme'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

export default function FeatureCards({title,buttonTitle}) {
  return (
    <View style={{justifyContent:'center',width:SIZES.width/3.5, height:SIZES.height/4, backgroundColor:'grey',padding:5,margin:10,borderRadius:10}}>
        <ImageBackground resizeMode='stretch' source={require('../assets/image.jpg')} >
    {/* <Image width='2' height='2' resizeMode='cover' source={require('../assets/image.jpg')}/> */}
      <Text style={{textAlign:'center',fontSize:SIZES.h3,color:'#F1F1F1',alignItems:'center',justifyContent:'center'}}>{title}</Text>
       
       <Pressable style={{backgroundColor:'yellow',padding:8,borderRadius:8,marginTop:10,marginHorizontal:10}}>
       <Text>{buttonTitle}</Text>
       </Pressable>
       </ImageBackground>
    </View>
  )
}