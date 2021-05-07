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
  Shape,
  Modal
 } from 'react-native';
 import axios from "axios"
 import Icon from "react-native-vector-icons/Ionicons"


 export default class iücdoluluk extends Component{
 

  constructor(props)
  {

    super(props)
    this.state={
 doluluk:'',
 bosyer:'',
 show:false
    }
}

  componentDidMount() {
    axios.get(`https://api.stackexchange.com/2.2/users?page=1&order=desc&sort=reputation&site=stackoverflow`)
    .then(res => {
    this.setState({bosyer:res.data.items[12].reputation_change_day})
    this.setState({doluluk:res.data.items[11].accept_rate})
    })
    .catch(e => {console.log(e)});
    
  }

  render(){

 

return(
      
       <View style={{backgroundColor:'#ffcc80',alignItems:'center',width:'100%',height:'100%'}}>

<TouchableOpacity onPress={()=>this.props.navigation.navigate('map')} style={{position:'absolute',right:'85%',top:'0%'}}>
    <Icon  name={Platform.OS === "ios" ? "ios-add" : "arrow-back-circle-outline"}
  //name={(this.state.hidePassword)?"eye-off-outlane:eye-outlane"}  şifre görünürlüğü açıp kapatma
  color="#c56000"
  size={55}/>
</TouchableOpacity>
<View style={{alignItems: 'center',marginTop:35}}>
<Text style={{color:'#ca9b52',marginBottom:15,marginTop:15,fontSize:22,fontWeight:'700',fontFamily:'monospace'}}>
    Otopark Doluluk Oranı 
</Text>
<Text style={{color:'#bc5100',alignItems:'center',marginBottom:15,marginTop:15,fontSize:40,fontWeight:'700',fontFamily:'monospace'}}>
    %{this.state.doluluk}
</Text>
<Text style={{color:'#ca9b52',marginBottom:15,marginTop:45,fontSize:22,fontWeight:'700',fontFamily:'monospace'}}>
    Otoparktaki boş alan sayısı 
</Text>
<Text style={{color:'#bc5100',alignItems:'center',marginBottom:15,marginTop:15,fontSize:40,fontWeight:'700',fontFamily:'monospace'}}>
  {this.state.bosyer}
</Text>
<Text style={{color:'#c88719',fontSize:30 ,marginTop:35,paddingTop:35}}>Rezervasyon İşlemi İçin </Text>
<Text style={{color:'#c88719',fontSize:30 ,marginBottom:55,paddingTop:35}}> Devam Ediniz</Text>
<TouchableOpacity  style={{paddingBottom:20,paddingTop:35}}onPress={()=>this.props.navigation.navigate('iücotoparkalanlar')
  /*this.props.navigation.navigate('iücRez')*/
  }>
    <Icon  name={Platform.OS === "ios" ? "ios-add" : "create-outline"}
  color="#c25e00"
  size={55}>
<Text style={{fontSize:35,
 
  margin: 0,
  padding: 10,
  width: 100,
 }}>
    Rezervasyon 
    </Text>
  </Icon>
    
  </TouchableOpacity>
  <Modal
   transparent={true}
   visible={this.state.show}
   ><View style={{backgroundColor:"#000000aa",flex:1}}>
     <View style={{backgroundColor:"#ffffff",margin:50,padding:40,borderRadius:10,flex:1}}>
    <Image style={{width:160,height:400}} source={{uri: 'https://www.ciziktirik.com/wp-content/uploads/2018/03/otopark_5_84_arac.jpg'}}/>
    <TouchableOpacity style={{alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10, borderRadius:55}} onPress={()=>{this.setState({show:false})}}><Text>Geri dön</Text></TouchableOpacity>
     </View>
     </View>
     </Modal>
  </View>
  <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, flexDirection:'row-reverse',marginBottom:15}}>
      <TouchableOpacity style={{alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10, borderRadius:55}} onPress={()=>{this.setState({show:true})}}>
        <Text>Krokiyi görüntüle</Text></TouchableOpacity></View>



        </View>
       )}
 }