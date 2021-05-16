import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  Alert,
  ScrollView,
} from 'react-native';

import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
import Account from '../components/Account';
import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {observable} from 'mobx';
import {observer, inject} from 'mobx-react';
import {Touchable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {API_URL} from '../config/system';
import axios from 'axios';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      hidePassword: true,
      text: '',
      onChangeText: '',
      number: null,
      onChangeNumber: null,
    };
  }

  // _handleSubmit = values => {
  //   axios.post(`${API_URL}/api/signin`, values)
  //     .then(res => {
  //       console.log(res);
  //       axios.get(`${API_URL}/api/current_user`, {
  //           headers: {authorization: res.data.data.token},
  //         })
  //         .then(res => {
  //           this.props.navigation.navigate('map');
  //         })
  //         .catch(e => {});
  //     })
      
  //     .catch(e => {
  //       if(e.response.data.code === 404) alert(e.response.data.message);
  //       console.log(e);
  //     });
  // };

  

  _handleSubmit = values => {
    axios.post(`${API_URL}/api/signin`, values)
      .then(res => {
        this.props.navigation.navigate('map' ,{profile: JSON.stringify(res.data.data.profile) , token: res.data.data.token});
      })
      
      .catch(e => {
        if(e.response.data.code === 404) alert(e.response.data.message);
        console.log(e);
      });
  };

  render() {
  
    return (
      
        <LinearGradient colors={['#006978', '#5d99c6', 'white']}style={styles.container}>
       
          <Image
            source={require('../assets/vale1.png')}
            resizeMode="center"
            style={styles.image}
          />

          <Text style={(styles.textBody, {color: 'white', fontSize: 25})}>
            GİRİŞ YAP
          </Text>
          <View style={{marginTop: 20}} />

          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={this._handleSubmit}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('*Lütfen Geçerli Bir Email Giriniz')
                .required('*Lütfen Mailiniz Giriniz.'),
              password: Yup.string().required('*Lütfen Şifrenizi Giriniz'),
            })}>
            {({values, handleSubmit, handleChange, errors}) => (
              <View>
                <View style={styles.item}>
                  <TextInput
                    value={values.email}
                    onChangeText={handleChange('email')}
                    placeholder={'Email'}
                    style={styles.input}
                    keyboardType={'email-address'}></TextInput>

                  {errors.email && (
                    <Text style={{color: '#ab000d'}}> {errors.email} </Text>
                  )}
                </View>

                <View style={styles.icon}>
                  <Icon
                    name={Platform.OS === 'ios' ? 'ios-add' : 'mail-outline'}
                    //name={(this.state.hidePassword)?"eye-off-outlane:eye-outlane"}  şifre görünürlüğü açıp kapatma
                    color="#003e47s"
                    size={30}
                  />
                </View>
                <View style={styles.item}>
                  <TextInput
                    value={values.password}
                    onChangeText={handleChange('password')}
                    placeholder={'Şifre'}
                    style={styles.input}
                    secureTextEntry={this.state.hidePassword}></TextInput>

                  <TouchableOpacity
                    onPress={() =>
                      this.setState({hidePassword: !this.state.hidePassword})
                    }
                    style={{position: 'absolute', right: 35, top: 22}}>
                    <Icon
                      name={
                        this.state.hidePassword
                          ? 'eye-off-outline'
                          : 'eye-outline'
                      }
                      //name={(this.state.hidePassword)?"eye-off-outlane:eye-outlane"}  şifre görünürlüğü açıp kapatma
                      color="#003e47"
                      size={30}
                    />
                  </TouchableOpacity>
                  {errors.password && (
                    <Text style={{color: '#ab000d'}}> {errors.password} </Text>
                  )}
                </View>

                <View style={{alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.button}>
                    <Text style={{color: 'white', fontSize: 20}}>GİRİŞ</Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    marginBottom: 20,
                    alignItems: 'center',
                    marginTop: 25,
                  }}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('forgot')}>
                    <Text
                      style={{
                        color: '#c62828',
                        fontSize: 17,
                        fontWeight: '700',
                      }}>
                      Şifremi Unuttum
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>

          <Text style={styles.textBody}>Veya kullanarak bağlan</Text>
        
          <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={()=>alert("Facebook'la Bağlanıyorsunuz")} style={{position:'absolute',right:5,top:15}}>
          <Image
            source={require('../assets/face2.png')}
            resizeMode="center"
            style={{marginTop:-7,width:85,height:68}}
          />
</TouchableOpacity>
<TouchableOpacity onPress={()=>alert("Google'la Bağlanıyorsunuz")} style={{position:'absolute',right:-85,top:15}}>
<Image
            source={require('../assets/google2.png')}
            resizeMode="center"
            style={{width:65,height:50}}
          />
</TouchableOpacity>
          </View>
         
          <View style={{flexDirection: 'row', marginVertical: 5,marginTop:80}}>
            <Text style={styles.textBody}>Hesabın Yok mu ? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={[styles.textBody, {color: '#00c6ad'}]}>
                Hesap Oluştur
              </Text>
            </TouchableOpacity>
          </View>
        
        </LinearGradient>
   
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
  
    resizeMode: 'contain',
    width: '75%',
    height: 165,
    marginVertical: 10,
  },
  textTitle: {
    fontFamily: 'Foundation',
    fontSize: 40,
    marginVertical: 10,
  },
  textBody: {
    fontFamily: 'Foundation',
    fontSize: 16,
    marginTop: 15,
    marginBottom: 15,
    color: '#006978',
  },

  input: {
    borderRadius: 15,
    backgroundColor: 'white',
    margin: 15,
    height: 50,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
  },
  item: {marginBottom: 20, alignItems: 'center'},
  button: {
    backgroundColor: '#008ea3',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    width: 300,
  },
  icon: {position: 'absolute', right: 35, top: 25},
});
