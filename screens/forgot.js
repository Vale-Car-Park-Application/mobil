import React,{Component}from 'react';
import {View, StyleSheet,TextInput, Text, TouchableOpacity,ScrollView, Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Input from '../components/Inputs';
import Submit from '../components/Submit'
;import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from "formik";
 import * as Yup from 'yup'
import {observable} from "mobx";
import {observer,inject} from "mobx-react"; 
import { TouchableHighlight } from 'react-native-gesture-handler';import Drawer from './drawer'
export default class forgot extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }
    functionTwo(){
        alert('Şifreniz Mailinize Gönderilmiştir')
    }        
 
     
    render(){ 
        
    
        
        const ab=null
        const a="Şifreniz Mailinize Gönderildi"
        return(
<ScrollView style={{backgroundColor: '#f44336'}}>
            <View style={styles.container}>
        
            <Text style={styles.textBody,{color:'white',fontSize:25}}>Şifre Yenileme İçin</Text>
            <Text style={styles.textBody,{color:'white',fontSize:25}}>Lütfen Mailinizi Giriniz</Text>
            <View style={{marginTop: 20}} />
         
         
            <Formik 
  initialValues={{
     mail:'',
  }}
   onSubmit={this._handleSubmit}
   validationSchema={Yup.object().shape({

    mail:Yup.string().email("*Lütfen Geçerli Bir email Giriniz").required("*Lütfen Mailinizi Giriniz.")
   
   })}
   >
       {({values,handleSubmit,handleChange,errors
       })=>(
       
 
  <View>
       <View style={styles.item}>
<TextInput 
value={values.mail}
onChangeText={handleChange('mail')}

placeholder={"Email"} 
style={styles.input}></TextInput>



{(errors.mail)&&<Text style={{color:'white'}}> {errors.mail} </Text>}
     </View>

     <View style={styles.icon}>
<Icon  name={Platform.OS === "ios" ? "ios-add" : "mail-outline"}
//name={(this.state.hidePassword)?"eye-off-outlane:eye-outlane"}  şifre görünürlüğü açıp kapatma
color="red"
size={30}/>
</View>
 

<TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} style={{position:'absolute',right:'70%',top:'-150%'}}>
    <Icon  name={Platform.OS === "ios" ? "ios-add" : "arrow-back-circle-outline"}
  //name={(this.state.hidePassword)?"eye-off-outlane:eye-outlane"}  şifre görünürlüğü açıp kapatma
  color="white"
  size={55}/>
</TouchableOpacity>


{
console.log(values.mail)
       }
      
<View style={{alignItems:'center'}}>
<TouchableHighlight 

onPress={values.mail==='' ? handleSubmit : ()=>{this.functionTwo() ;this.props.navigation.navigate('Login')} }

style={styles.button} >
    <Text style={{color:'white',fontSize:20}}>GÖNDER</Text>
</TouchableHighlight>
</View>





</View>
        ) }
        
</Formik>



           
            
            
          
           
        </View>

        </ScrollView>
        
        )
      
    }
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:200
    },
  
    textTitle: {
        fontFamily: 'Foundation',
        fontSize: 40,
        marginVertical: 10,
    },
    textBody: {
        fontFamily: 'Foundation',
        fontSize: 16,
        marginTop:15,
        marginBottom:15,
        color:'white'
    },
    
    input: {
        
        borderRadius:15,
      backgroundColor:'white'
      ,  margin: 15,
        height: 50,
        width:250
        ,borderColor: 'gray',
        borderWidth: 1
     },
     item:{marginBottom:20,alignItems:'center'},
     button:{backgroundColor:'#ba000d',borderRadius:15,paddingVertical:15,alignItems:'center',width:300}
,icon:{position:'absolute',right:40,top:25}
     
});