import React, { Component } from 'react';
import {View, StyleSheet, TouchableOpacity,Text,TextInput, Image, ScrollView} from 'react-native';

import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
import Account from '../components/Account';
import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from "formik";
 import * as Yup from 'yup'
import {observable} from "mobx";
import {observer,inject} from "mobx-react"; 
import { Touchable } from 'react-native';


export default class Login extends Component{
    constructor(){
        super()
        this.state={
            hidePassword:true,
            text:"",
            onChangeText:'',
            number:null,
            onChangeNumber:null,
            
        }
    }
  
        render(){
    return (
        <ScrollView style={{backgroundColor: '#40ACD4'}}>

            <View style={styles.container}>
                <Image 
                    source={require('../assets/car4.png')} 
                    resizeMode="center" 
                    style={styles.image} />
                
                <Text style={styles.textBody,{color:'#C9E7F2',fontSize:25}}>Giriş Yap</Text>
                <View style={{marginTop: 20}} />
             
             
                <Formik 
      initialValues={{
          username:'',
          password:''
      }}
       onSubmit={this._handleSubmit}
       validationSchema={Yup.object().shape({

        username:Yup.string().required("*Lütfen Kullanıcı Adınızı Giriniz.")
        ,password:Yup.string().required("*Lütfen Şifrenizi Giriniz")
       })}
       >
           {({values,handleSubmit,handleChange,errors
           })=>(
      
      
      <View>
           <View style={styles.item}>
<TextInput 
value={values.username}
onChangeText={handleChange('username')}

placeholder={"Email"} 
style={styles.input}></TextInput>



{(errors.username)&&<Text style={{color:'red'}}> {errors.username} </Text>}
         </View>

         <View style={styles.icon}>
  <Icon  name={Platform.OS === "ios" ? "ios-add" : "mail-outline"}
  //name={(this.state.hidePassword)?"eye-off-outlane:eye-outlane"}  şifre görünürlüğü açıp kapatma
  color="black"
  size={30}/>
  </View>
         <View style={styles.item}>
            
<TextInput 
value={values.password}
onChangeText={handleChange('password')}
placeholder={"Şifre"} 
style={styles.input}
secureTextEntry={this.state.hidePassword}

></TextInput>

 


<TouchableOpacity onPress={()=>this.setState({hidePassword:!this.state.hidePassword})} style={{position:'absolute',right:35,top:22}}>
    <Icon  name={(this.state.hidePassword)?"eye-off-outline":"eye-outline"}
  //name={(this.state.hidePassword)?"eye-off-outlane:eye-outlane"}  şifre görünürlüğü açıp kapatma
  color="black"
  size={30}/>
</TouchableOpacity>
{(errors.password)&&<Text style={{color:'red'}}> {errors.password} </Text>}
         </View>






<View style={{alignItems:'center'}}>
    <TouchableOpacity 
    onPress={values.password===''||values.username==='' ? handleSubmit : ()=>alert('Haritalara gidildi')}
    style={
        
        styles.button}>
        <Text style={{color:'white',fontSize:20}}>GİRİŞ</Text>
    </TouchableOpacity>
</View>

<View style={{marginBottom:20,alignItems:'center',marginTop:25}}>
    <TouchableOpacity onPress={() =>this.props.navigation.navigate('forgot')}>
<Text style={{color:'#8B2E2E',fontSize:17,fontWeight:'700'}}>Şifremi Unuttum</Text>
</TouchableOpacity>
</View>

</View>
            ) }
            
</Formik>



               
                
                <Text style={styles.textBody}>Veya kullanarak bağlan</Text>
                <View style={styles.accounts,{flexDirection: 'row'}}>
                    <Account color="#3b5c8f" icon="facebook" title="Facebook" />
                    <Account color="#ec482f" icon="google" title="Google"  />
                </View>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={styles.textBody}>Hesabın Yok mu ?  </Text>
                    <TouchableOpacity onPress={() =>this.props.navigation.navigate('SignUp')}><Text  style={[styles.textBody, {color: '#08467C'}]}>Hesap Oluştur</Text></TouchableOpacity>
                </View>
            </View>
           
        </ScrollView>      
    );
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        resizeMode:'contain',
        width:'75%',
        height: 150,
        marginVertical: 10
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
     button:{backgroundColor:'#009999',borderRadius:15,paddingVertical:15,alignItems:'center',width:300}
,icon:{position:'absolute',right:35,top:25}
     
});


