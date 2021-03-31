import React ,{Component}from 'react';
import {View, StyleSheet,TouchableOpacity,TextInput, Text, ScrollView, Image} from 'react-native';

import Input from '../components/Inputs';
import Submit from '../components/Submit';
import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from "formik";
 import * as Yup from 'yup'
import {observable} from "mobx";
import {observer,inject} from "mobx-react"; 
export default class SignUp extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }
    render(){
    return (
        <ScrollView style={{backgroundColor: '#40ACD4'}}>
            <View style={styles.container}> 
                <Image source={require('../assets/var3.png')} resizeMode="center" style={styles.image} />
                <Text style={styles.textTitle}>Hadi Başlayalım</Text>
                <Text style={styles.textBody}>Hesap oluşturmak için doldurunuz</Text>


<Formik 
      initialValues={{
          name:'',
          Email:'',
          Tel:'',
          password:'',
          password2:''
      }}
       onSubmit={this._handleSubmit}
       validationSchema={Yup.object().shape({

        name:Yup.string().required("*Lütfen Adınızı ve Soyadınızı Giriniz."),
        Email:Yup.string().required("*Lütfen Mailinizi Giriniz."),
        Tel:Yup.string().required("*Lütfen Telefon Numarınızı Giriniz."),
        password:Yup.string().required("*Lütfen Şifreyi Giriniz."),
        password2:Yup.string().required("*Lütfen Şifrenizi Tekrar Giriniz."),
        
       })}
       >
           {({values,handleSubmit,handleChange,errors
           })=>(
      
      
      <View>
           <View style={styles.item}>
           <View style={{position:'absolute',right:285,top:25}}>
  <Icon  name={Platform.OS === "ios" ? "ios-add" : "person-circle-outline"}
  
  color="white"
  size={35}/>
  </View>
<TextInput 
value={values.name}
onChangeText={handleChange('name')}

placeholder={"Adınız ve Soyadı"} 
alignItems= 'center'
style={styles.input}></TextInput>



{(errors.name)&&<Text style={{color:'red'}}> {errors.name} </Text>}
         </View>

        

  <View style={styles.item}>
  <View style={{position:'absolute',right:285,top:25}}>
  <Icon  name={Platform.OS === "ios" ? "ios-add" : "mail-outline"}

  color="white"
  size={35}/>
  </View>
<TextInput 
value={values.Email}
onChangeText={handleChange('Email')}

placeholder={"Mailiniz"} 
style={styles.input}></TextInput>



{(errors.Email)&&<Text style={{color:'red'}}> {errors.Email} </Text>}
         </View>

         <View style={styles.item}>
         <View style={{position:'absolute',right:285,top:25}}>
  <Icon  name={Platform.OS === "ios" ? "ios-add" : "call-outline"}
  
  color="white"
  size={35}/>
  </View>
<TextInput 
value={values.Tel}
onChangeText={handleChange('Tel')}

placeholder={"Telefonunuz"} 
style={styles.input}></TextInput>



{(errors.Tel)&&<Text style={{color:'red'}}> {errors.Tel} </Text>}
         </View>

         <View style={styles.item}>
         <View style={{position:'absolute',right:285,top:25}}>
             <TouchableOpacity onPress={()=>this.setState({hidePassword:!this.state.hidePassword})}>
  <Icon  name={(this.state.hidePassword)?"eye-off-outline":"eye-outline"}
  //name={(this.state.hidePassword)?"eye-off-outlane:eye-outlane"}  şifre görünürlüğü açıp kapatma
  color="white"
  size={35}/></TouchableOpacity>
  
  </View>
<TextInput 
value={values.password}
onChangeText={handleChange('password')}
secureTextEntry={this.state.hidePassword}
placeholder={"Şifrenizi Giriniz"} 
style={styles.input}></TextInput>



{(errors.password)&&<Text style={{color:'red'}}> {errors.password} </Text>}
         </View>


         <View style={styles.item}>
              
         <View style={{position:'absolute',right:285,top:25}}>
            
  </View>


 


<TouchableOpacity onPress={()=>this.setState({hidePassword:!this.state.hidePassword})} style={{position:'absolute',right:35,top:22}}>
   
</TouchableOpacity>

         </View>





<View style={{alignItems:'center'}}>
    <TouchableOpacity 
    onPress={values.name===''||values.Email===''||values.Tel===''||values.password==='' ? handleSubmit : ()=>this.props.navigation.navigate('araba')}
    style={
        
        styles.button}>
        <Text style={{color:'white',fontSize:20}}>Devam Et</Text>
    </TouchableOpacity>
</View>

</View>
            ) }
            
</Formik>






        
      
    













                
              
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textBody}>Zaten hesabın var mı ? </Text>
                    <Text style={[styles.textBody, {color: '#08467C'}]} onPress={() => this.props.navigation.navigate('Login')}> Giriş Yap</Text>

                </View>
            </View>
            
        </ScrollView>    
    );
};}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
       
    },
    image: {
        resizeMode:'contain',
        width:'75%',
        height: 250,
        marginVertical: 10
    },
    textTitle: {
        fontSize: 40,
        fontFamily: '',
        marginVertical: 5,
        color:'white',
        marginBottom:15
    },
    textBody: {
        fontSize: 16,
        fontFamily: '',
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
     }, item:{
         marginBottom:20,
         alignItems:'center'
        },     button:{backgroundColor:'#009999',borderRadius:15,paddingVertical:15,marginBottom:25,alignItems:'center',width:300}

});

