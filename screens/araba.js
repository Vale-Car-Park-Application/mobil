
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
export default class Araba extends Component{
    constructor(){
        super()
        this.state={
            cars:'seçiniz',
            country:'seçiniz'
            
        }
    }
render(){

return (
    <ScrollView style={{backgroundColor: '#40ACD4'}}>
        <View style={styles.container}> 
            <Image source={require('../assets/car5.png')} resizeMode="center" style={styles.image} />
            <Text style={styles.textTitle}>Devam Edelim</Text>
            <Text style={styles.textBody}>Arabanızın;</Text>


            <Formik 
      initialValues={{
          marka:'',
          yakit:'',
          plaka:'',
          
      }}
       onSubmit={this._handleSubmit}
       validationSchema={Yup.object().shape({

        marka:Yup.string().required("*Lütfen Plakanızı Giriniz."),
        yakit:Yup.string().required("*Lütfen Yakıt Türünüzü Seçiniz."),
        plaka:Yup.string().required("*Lütfen Araç Türünü Seçiniz."),
     
       })}
       >
           {({values,handleSubmit,handleChange,errors
           })=>(
      
      
      <View>
           <View style={styles.item}>
           <View style={{position:'absolute',right:285,top:25}}>
  <Icon  name={Platform.OS === "ios" ? "ios-add" : "car-sport-outline"}
  
  color="white"
  size={35}/>
  </View>
<TextInput 
value={values.marka}
onChangeText={handleChange('marka')}

placeholder={"P l a k a s ı"} 
alignItems= 'center'
style={styles.input}></TextInput>



{(errors.marka)&&<Text style={{color:'red'}}> {errors.marka} </Text>}
         </View>

        
<View>
<View style={{position:'absolute',right:285,top:17}}>
  <Icon  name={Platform.OS === "ios" ? "ios-add" : "flame-outline"}

  color="white"
  size={35}/>
  </View>
       <DropDownPicker
    items={[
        {label: 'Dizel', value: 'dizel', icon: () => <Icon  name={Platform.OS === "ios" ? "ios-add" : "flame-outline"}

        color="red"
        size={18}/>},
        {label: 'Benzin', value: 'benzin', icon: () => <Icon  name={Platform.OS === "ios" ? "ios-add" : "flame-outline"}

        color="blue"
        size={18}/>},
        {label: 'Elektrik', value: 'elektrik', icon: () => <Icon  name={Platform.OS === "ios" ? "ios-add" : "battery-charging-outline"}

        color="orange"
        size={18}/>},{label: 'Seçiniz...', value: 'seçiniz'},
        
    ]}
    defaultValue={this.state.country}
    containerStyle={{marginLeft:30,marginTop:10,marginBottom:25,height: 50,width:245}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => this.setState({
        country: item.value
    })}
/>{(errors.yakit)&&<Text style={{color:'red',marginLeft:65}}> {errors.yakit} </Text>}
</View>

<View>
<View style={{position:'absolute',right:285,top:33}}>
  <Icon  name={Platform.OS === "ios" ? "ios-add" : "car-outline"}

  color="white"
  size={35}/>
  </View>
       <DropDownPicker
    items={[
        {label: 'Sedan', value: 'sedan'},
        {label: 'Hatchback', value: 'hatc'},
        {label: 'Station Wagon', value: 'sta'},
        {label: 'Cabrio', value: 'cabrio'},
        {label: 'Pick Up', value: 'pup'},
        {label: 'SUV', value: 'suv'}, 
        {label: 'Diğer', value: 'diger'},
        {label:'Seçiniz...',value:'seçiniz'}


        
    ]}
    defaultValue={this.state.cars}
    containerStyle={{marginLeft:30,marginBottom:25,marginTop:25,height: 50,width:245}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: 'white',borderBottomColor:'black',height:100}}
    onChangeItem={item => this.setState({
        cars: item.value
    })}
/>
</View>
      
{(errors.plaka)&&<Text style={{color:'red',justifyContent:'center',marginLeft:65}}> {errors.plaka}</Text>}

{console.log(this.state.cars)}   



<View style={{alignItems:'center',marginBottom:50,marginTop:50}}>
    <TouchableOpacity 
    onPress={this.state.cars==='seçiniz'||this.state.country==='seçiniz'|| values.marka===''? handleSubmit : ()=>this.props.navigation.navigate('Login')}
    style={
        
        styles.button}>
        <Text style={{color:'white',fontSize:20}}>Hesap Oluştur</Text>
    </TouchableOpacity>
</View>

</View>
            ) }
            
</Formik>


            
            
           
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.textBody}>Zaten hesabın var mı?</Text>
                <Text style={[styles.textBody, {color: 'blue'}]} onPress={() => this.props.navigation.navigate('Login')}> Giriş Yap</Text>

            </View>
        </View>
        
    </ScrollView>    
);
};
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
},
image: {
    resizeMode:'contain',
    width:'75%',
    height: 150,
    marginVertical: 10
},
textTitle: {
    fontSize: 40,
    fontFamily: 'Foundation',
    marginVertical: 5
},
textBody: {
    fontSize: 16,
    fontFamily: 'Foundation'
},
input: {
        
    borderRadius:7,
  backgroundColor:'white'
  ,  margin: 15,
    height: 50,
    width:243
    ,
   
 },
 item:{marginBottom:20,alignItems:'center'},
 button:{backgroundColor:'#009999',borderRadius:15,paddingVertical:7,alignItems:'center',width:300}
,icon:{position:'absolute',right:35,top:25}
});
