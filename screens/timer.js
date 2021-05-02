import CountDown from 'react-native-countdown-component';
import React,{Component}from 'react';
import {View, StyleSheet,TextInput, Text, TouchableOpacity,ScrollView, Image} from 'react-native';
export default class timer extends Component{
    constructor(){
        super()
        this.state={
           
        }
    }
render() {
  const {BosYer} = this.props.route.params;
    return (
      <CountDown
        size={30}
        until={3}
        onFinish={() => 
          
          
          alert(BosYer)
      
      
      }
        digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
        digitTxtStyle={{color: '#1CC625'}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
        separatorStyle={{color: '#1CC625'}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
      />
    )
}
}