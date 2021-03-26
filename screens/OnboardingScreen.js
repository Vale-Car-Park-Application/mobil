import React from 'react';
import { View, Text, Button, Image,TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots =({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
      <View
        style={{
          width:5,
          height:5,
          marginHorizontal:3,
          backgroundColor
        }}
        />
    );
}

const Skip = ({...props}) => (
    <Button
        title='Skip'
        color="#120000"
        />
);
const Next = ({...props}) => (
  <Button
      title='Next'
      color="#120000"
      {...props}
      />
);
const Done = ({...props}) => (
  
      <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}>
        <Text style={{fontSize:16}}>Done</Text> 
       </TouchableOpacity>
);
const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
  pages={[
    {
      backgroundColor: '#a6e4d0',
      image: <Image source={require('../assets/cliff.jpg')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: '#fdeb93',
        image: <Image source={require('../assets/unnamed.jpg')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#e9bcbe',
        image: <Image source={require('../assets/foto.jpg')} />,
        title: 'Become The Star',
        subtitle: 'Done with React Native Onboarding Swiper',
      },

  ]}
/>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});