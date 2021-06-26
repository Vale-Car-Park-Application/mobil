import CountDown from 'react-native-countdown-component';
import React,{Component,useState, BackHandler,
  ToastAndroid,}from 'react';
import axios from "axios"
import {View, StyleSheet,BackAndroid,TextInput,Pressable, Text,Modal, TouchableOpacity,ScrollView, Image,Alert} from 'react-native';
import {Linking} from 'react-native'
import getDirections from 'react-native-google-maps-directions'
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
export default class timer extends Component{
  constructor(props){

    super(props);
   this.state = {
      modalVisible: false,
      modalVisible2:false,
      modalVisible3:false,
      geldimi:''
    };
  
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }



  onBackPress = () => {
    return true;
  }
 
  handleGetDirections = () => {
    const data = {
       source: {
        latitude: 40.99449778084676,
        longitude: 28.728089555825388
      },
      destination: {
        latitude: 40.98449778084676,
        longitude:28.788089555825388
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],

    }
 
    getDirections(data)
  }
  componentDidMount() {
    

    axios.get(`https://api.stackexchange.com/2.2/users?page=4&order=desc&sort=reputation&site=stackoverflow`)
    .then(res => {
    this.setState({geldimi:false/*res.data.items[12].is_employee*/})
    })
    .catch(e => {console.log(e)});
    
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  setModalVisible2 = (visible) => {
    this.setState({ modalVisible2: visible });
  }
  setModalVisible3 = (visible) => {
    this.setState({ modalVisible3: visible });
  }
render() {
  const phonnumb='05523361923'
  const { modalVisible,modalVisible2,geldimi,modalVisible3 } = this.state;
  const {BosYer,carPark2,token2,profile2} = this.props.route.params;

    return (

<LinearGradient colors={['black', 'black']} style={{flex:1}}>
<TouchableOpacity onPress={()=>this.props.navigation.openDrawer()} style={{position:'absolute',right:'85%',top:'0%'}}>
    <Icon  name={Platform.OS === "ios" ? "ios-add" : "menu-outline"}
  color="white"
  size={55}/>
</TouchableOpacity>
  <View style={{alignItems:'center',marginTop:35}}>
    <Text style={styles.textTitle}>
      {BosYer} Alanı Rezerve Edildi
    </Text>
  </View>
  <View style={styles.timer}>
      <CountDown
        size={30}
        until={3600}
        onFinish={() => 
          
          
          this.props.navigation.navigate('map')
      
      
      }
        digitStyle={{backgroundColor: 'black', borderWidth: 2, borderColor: '#82f7ff'}}
        digitTxtStyle={{color: 'white'}}
        timeLabelStyle={{color: '#304ffe', fontWeight: 'bold'}}
        separatorStyle={{color: '#0064b7'}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{h:'Saat',m:'Dakika', s: 'Saniye'}}
        showSeparator
      />
</View>
<View style={{alignItems:'center',marginTop:10}}>
    <Text style={styles.textTitle}>
      Lütfen Bu Süre İçerisinde 
    </Text>
    <Text style={styles.textTitle}>
     Otoparkta Olunuz
    </Text>
   
  </View>


  
<View style={{alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={()=>
                      this.setModalVisible(true)
                    }
                    style={styles.button}>
                    <Text style={{color: 'black',fontWeight: 'bold',fontSize: 20}}>Rezerveyi İptal Et</Text>
                  </TouchableOpacity>
                </View>



                <View style={{alignItems:'center'}}>
    <Text style={styles.textTitle}>
      {BosYer} Alanına 
    </Text>
    <Text style={styles.textTitle}>
    Geldiyseniz
    </Text>
    <Text style={styles.textTitle}>
     "Geldim"e Tıklayınız.
    </Text>
   
  </View>
                <View style={{alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={()=>
                      this.setModalVisible2(true)
                    }
                    style={styles.buttonA}>
                    <Text style={{color: 'black',fontWeight: 'bold',fontSize: 20}}>Geldim</Text>
                  </TouchableOpacity>
                </View>
                <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, flexDirection:'row-reverse',marginBottom:'0%',marginRight:'3%'}}>
      <TouchableOpacity style={{alignItems: "center",
      
    backgroundColor: "#ffc107",
    padding: 10, borderRadius:25}} onPress={()=>this.setModalVisible3(true)}>
      <Icon  name={Platform.OS === "ios" ? "ios-add" : "compass-outline"}
  color="black"
  size={45}>
        </Icon>
        
        <Text style={{justifyContent: 'center',fontSize:20,fontWeight:'bold',color:'black'}}> Ulaşım</Text>
        </TouchableOpacity></View>
              
               <View>
               <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible2(!modalVisible2);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
           { (geldimi) ?
  <LinearGradient colors={['#008400', '#03d600','green']} style={styles.view2}>
<Text style={styles.text2}>{BosYer} Alanında </Text><Text style={styles.text2}>Olduğunuz Onaylandı.</Text><Text style={styles.text2}>İyi Günler Dileriz</Text>
<TouchableOpacity style={{alignItems: "center",justifyContent:'center',
   width:200,
   marginTop:50,
    backgroundColor: "#00675b",
    padding: 10, borderRadius:55}} onPress={()=>this.props.navigation.navigate('Login')}><Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>Kapat</Text></TouchableOpacity>
     
     </LinearGradient>

:
<LinearGradient colors={['#d30000', '#e53935','red']} style={styles.view1}>
 <Text style={styles.text1}>{BosYer} alanı boş görünmekte.</Text><Text style={styles.text1}>Lütfen otopark ile iletişime geçiniz.</Text>
 <TouchableOpacity onPress={()=>Linking.openURL(`tel:${phonnumb}`)
}>
<Text style={{paddingTop:40,textDecorationLine: 'underline',paddingBottom:40,fontSize:30,color:'blue',fontWeight:'700',fontFamily:'lucida grande'}}>Tel:0 552 336 19 23 </Text>
</TouchableOpacity>
 <TouchableOpacity style={{alignItems: "center",justifyContent:'center',
   width:200,
   marginTop:200,
    backgroundColor: "#00675b",
    padding: 10, borderRadius:55}} onPress={()=>this.setModalVisible2(!modalVisible2)}><Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>Geri Dön</Text></TouchableOpacity>
     
     </LinearGradient>}
           
            </View>
          </View>
        </Modal>
               </View>
               
               <View>
               <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Rezervasyonu İptal Etmek İstiyor Musunuz ?</Text>
              <Pressable
                style={[styles.button3, styles.buttonClose1]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle2}>Hayır</Text>
              </Pressable>
              <Pressable
                style={[styles.button3, styles.buttonClose2]}
                onPress={() =>this.props.navigation.navigate('map')}
              >
                <Text style={styles.textStyle2}>Evet</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
               </View>



               <View>
               <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible3}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible3(!modalVisible3);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Yol tarifine gitmek istiyor musunuz?</Text>
              <Pressable
                style={[styles.button3, styles.buttonClose1]}
                onPress={() => this.setModalVisible3(!modalVisible3)}
              >
                <Text style={styles.textStyle2}>Hayır</Text>
              </Pressable>
              <Pressable
                style={[styles.button3, styles.buttonClose2]}
                onPress={() =>{this.handleGetDirections(), this.setModalVisible3(!modalVisible3)}}
              >
                <Text style={styles.textStyle2}>Evet</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
               </View>
               </LinearGradient>





    )
}
}

const styles = StyleSheet.create({
    timer: {
      
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:40
    },
  
    rezerve: {
        fontFamily: 'Foundation',
        fontSize: 40,
        marginVertical: 10,
        marginTop:300
    },
    button: {
      backgroundColor: '#ffc107',
      borderRadius: 25,
    height:75,
    width:200,
    marginTop:65,
    marginBottom:55,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    buttonA: {
      backgroundColor: '#ffc107',
      borderRadius: 25,
    height:75,
    width:180,
    marginTop:50,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  
    textBody: {
      fontFamily: 'Foundation',
      fontSize: 16,
      marginTop: 15,
      marginBottom: 15,
      color: 'white',
    },
    textTitle: {
      fontSize: 21,
      fontFamily: 'monospace',
    fontWeight:'bold',
      color:'white',
    
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    marginBottom:25
  },
  modalView: {
    
    backgroundColor: "#687e9b",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button3: {
    borderRadius: 20,
    padding: 10,
    marginTop:20,
    width:80
  },
  buttonOpen: {
    backgroundColor: "#008ba3",
  },
  buttonClose2: {
    backgroundColor: "green",
  },
  buttonClose1: {
    backgroundColor: "red",
  },
  textStyle2: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    fontSize:20,
    textAlign: "center",
    color:'white',fontWeight:'bold'
  },   view1:{
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