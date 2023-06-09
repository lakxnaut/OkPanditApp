import { View, Text,Image } from 'react-native'
import React, { useEffect,useState } from 'react'
import SplashScreen from 'react-native-splash-screen'
import AppIntroSlider from 'react-native-app-intro-slider'
// import slides from './slides'
import { COLORS, SIZES } from './src/constants/theme'
import LoginScreen from './src/screens/LoginScreen'
import EnterOtpScreen from './src/screens/EnterOtpScreen'
import AddDetailsScreen from './src/screens/AddDetailsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createNativeStackNavigator()

const slides= [
  {
      id:1,
      title:'Uncover the Facts of Your Life',
      image:require('./src/assets/onboarding1.png')
  },
  {
      id:2,
      title:'Get Your First Consultation Free',
      image:require('./src/assets/onboarding2.png')
  },
  {
      id:3,
      title:'Verified Experts & Consultants',
      image:require('./src/assets/onboarding3.png')
  },
];

export default function App() {
  
  useEffect(() => {
   SplashScreen.hide()
  }, [])
  const [showHomePage,setShowHomePage] = useState(false)

  const buttonLabel =(label)=>{
    return(
      <View>
        <Text
        style={{
          color:COLORS.title,
          fontWeight:'600',
          fontSize:SIZES.h4
        }}
        >
          {label}
        </Text>
      </View>
    )
  }

  if(!showHomePage){
    return(
      <AppIntroSlider
      data={slides}
      renderItem={({item})=>{
        return(
          <View style={{alignItems:'center',paddingTop:50}}>
            <Image
            source={item.image}
            style={{
              width:SIZES.width-50,
              height:400,
            }}
            resizeMode='contain'
            />

            <Text
             style={{
              fontSize:SIZES.h1,
              fontWeight:'900'
            }}>
              {item.title}
             
            </Text>
          </View>
        )
      }}
      activeDotStyle={{
        backgroundColor:COLORS.primary,
        width:30,
      }}
      showSkipButton
      renderSkipButton={()=>buttonLabel("Skip")}
      renderNextButton={()=>buttonLabel("Next")}
      renderDoneButton={()=>buttonLabel("Done")}
      onDone={()=>{
        setShowHomePage(true)
      }}
      />
    )
  }

 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={LoginScreen}/>
        <Stack.Screen name='otp' component={EnterOtpScreen}/>
        <Stack.Screen name='addDetail' component={AddDetailsScreen}/>
      </Stack.Navigator>
    <View>
      <AddDetailsScreen/>
    </View>

    </NavigationContainer>
  )
}