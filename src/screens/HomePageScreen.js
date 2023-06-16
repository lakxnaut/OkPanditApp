import { View, Text, Button, Image } from 'react-native'
import React from 'react'
import FeatureCards from '../component/FeatureCards'
import { SIZES } from '../constants/theme'

export default function HomePageScreen() {
  return (
    <View style={{display:'flex'}} >
      <View style={{backgroundColor:'grey',borderRadius:8,minHeight:200,maxHeight:1000,flexDirection:'row',alignItems:'center',marginVertical:6,marginHorizontal:2,paddingHorizontal:10}}>
        <View style={{flex:1}}>
          <Text style={{fontSize:SIZES.h1}}>
            Consult An Astrologer Now
          </Text>
          <Text style={{marginVertical:8}}>Get First Consultation at 1</Text>
          <View style={{flexDirection:'row'}}>
            <View style={{marginRight:5}}>

            <Button title='Call'></Button>
            </View>
            <View>

            <Button title='Call'></Button>
            </View>
          </View>
        </View>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Image width='2' height='2' resizeMode='cover' source={require('../assets/banner.png')}/>
        </View>
      </View>

    <View style={{flexDirection:'row',justifyContent:'center'}}>

      <FeatureCards title={'Talk to Pandit'} buttonTitle={'Consult'} />
      <FeatureCards title={'Problem and Solutions'} buttonTitle={'Consult'} />
      <FeatureCards title={'Marriage and MatchMaking'} buttonTitle={'Consult'} />
      {/* <FeatureCards title={'Marriage and MatchMaking'} buttonTitle={'Consult'} /> */}
      {/* <FeatureCards title={'Marriage and MatchMaking'} buttonTitle={'Consult'} /> */}

       
    </View>
    </View>
  )
}