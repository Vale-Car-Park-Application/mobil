

import React,{Component}from "react";
import { 
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Touchable,
  Image,Alert,
  PermissionsAndroid,
  TouchableOpacity,
  Platform,
  Modal,
  Button
 } from 'react-native';
 import Navigation from './Navigation';
 
 export default class App extends Component{
  render(){
  return (
     <Navigation /> 
   );
  }
   }
 const styles = StyleSheet.create({
   
 });
 
 