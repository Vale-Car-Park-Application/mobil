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

export default class forgot extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }
  
 
    render(){ 
        
    
        
        const ab=null
        const a="Şifreniz Mailinize Gönderildi"
        return(
<ScrollView style={{backgroundColor: '#40ACD4'}}>
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

    mail:Yup.string().required("*Lütfen Mailinizi Giriniz.")
   
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



{(errors.mail)&&<Text style={{color:'red'}}> {errors.mail} </Text>}
     </View>

     <View style={styles.icon}>
<Icon  name={Platform.OS === "ios" ? "ios-add" : "mail-outline"}
//name={(this.state.hidePassword)?"eye-off-outlane:eye-outlane"}  şifre görünürlüğü açıp kapatma
color="black"
size={30}/>
</View>
 




{
console.log(values.mail)
       }
<View style={{alignItems:'center'}}>
<TouchableOpacity 

onPress={values.mail==='' ? handleSubmit : ()=>this.props.navigation.navigate('Login') }

style={styles.button} >
    <Text style={{color:'white',fontSize:20}}>GÖNDER</Text>
</TouchableOpacity>
</View>

<View style={{  alignItems: 'center',
        justifyContent: 'center',marginTop:100}}>
    <Text style={styles.textBody,{color:'white',fontSize:27}}>Şifreniz Mailinize Gönderilecektir.</Text>
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
     button:{backgroundColor:'#009999',borderRadius:15,paddingVertical:15,alignItems:'center',width:300}
,icon:{position:'absolute',right:85,top:25}
     
});