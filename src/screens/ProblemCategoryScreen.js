import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from '../component/CategoryCard'
import { SIZES } from '../constants/theme'

export default function ProblemCategoryScreen() {
  return (
    <ScrollView>
        <View style={{marginTop:20,height:SIZES.height,alignItems:'center'}}>


        <View style={{flexDirection:'row'}}>
      <CategoryCard/>
      <CategoryCard/>
        </View>

        <View style={{flexDirection:'row'}}>
      <CategoryCard/>
      <CategoryCard/>
        </View>
        </View>


    </ScrollView>
  )
}