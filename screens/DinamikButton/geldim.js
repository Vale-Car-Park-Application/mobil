import React, {useState,useEffect,Component} from 'react';
import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Touchable,
  Image,
  TouchableOpacity,
  Shape
 } from 'react-native';
 import axios from "axios"
 import Icon from "react-native-vector-icons/Ionicons"


 export default class iücdoluluk extends Component{
   
  constructor(props){

    super(props)
    this.state={
 geldimi:'',
 
     
    }
}

  componentDidMount() {
    axios.get(`https://api.stackexchange.com/2.2/users?page=4&order=desc&sort=reputation&site=stackoverflow`)
    .then(res => {
    this.setState({geldimi:false/*res.data.items[12].is_employee*/})
    })
    .catch(e => {console.log(e)});
    
  }

  render(){

 
const {geldimi}=this.state
return(
      

(geldimi) ?
    <View style={styles.view2}>
<Text style={styles.text2}>Seçtiğiniz Yerde Olduğunuz Onaylandı.</Text><Text style={styles.text2}>İyi Günler Dileriz.</Text>
</View>

:
<View style={styles.view1}>
 <Text style={styles.text1}>Seçtiğiniz alan boş görünmekte.</Text><Text style={styles.text1}>Lütfen otopark ile iletişime geçiniz.</Text>
</View>

   





        
       )}

 }
 
 const styles = StyleSheet.create({
     view1:{
        backgroundColor:'#ab000d',alignItems:'center',justifyContent:'center',flex:1
     },
     view2:{
        backgroundColor:'#00600f',alignItems:'center',justifyContent:'center',flex:1
     }
     ,
    text1: {
        alignItems:'center',
        justifyContent: 'center',
     fontWeight:'bold',
     color:'white',
     fontSize:35
    },
    text2: {
        fontWeight:'bold',
        color:'white',
        fontSize:35
      }

})