import CountDown from 'react-native-countdown-component';
import React,{Component,useState}from 'react';
import {View, StyleSheet,TextInput,Pressable, Text,Modal, TouchableOpacity,ScrollView, Image,Alert} from 'react-native';
export default class timer extends Component{
  state = {
    modalVisible: false,
    modalVisible2:false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  setModalVisible2 = (visible) => {
    this.setState({ modalVisible2: visible });
  }
render() {
  
  const { modalVisible,modalVisible2 } = this.state;
  const {BosYer} = this.props.route.params;
    return (
<View style={{backgroundColor:'#439889',flex:1}}>

  <View style={{alignItems:'center'}}>
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
        digitStyle={{backgroundColor: '#0094cc', borderWidth: 2, borderColor: '#82f7ff'}}
        digitTxtStyle={{color: 'white'}}
        timeLabelStyle={{color: '#304ffe', fontWeight: 'bold'}}
        separatorStyle={{color: '#0064b7'}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{h:'Saat',m:'Dakika', s: 'Saniye'}}
        showSeparator
      />
</View>
<View style={{alignItems:'center',marginTop:20}}>
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
                    <Text style={{color: '#00695c',fontWeight: 'bold',fontSize: 20}}>Rezerveyi İptal Et</Text>
                  </TouchableOpacity>
                </View>



                <View style={{alignItems:'center',marginTop:20}}>
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
                    <Text style={{color: '#00695c',fontWeight: 'bold',fontSize: 20}}>Geldim</Text>
                  </TouchableOpacity>
                </View>


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
              <Text style={styles.modalText}>Geldiğinizi Onlaylıyor Musunuz ?</Text>
              <Pressable
                style={[styles.button3, styles.buttonClose1]}
                onPress={() => this.setModalVisible2(!modalVisible2)}
              >
                <Text style={styles.textStyle2}>Hayır</Text>
              </Pressable>
              <Pressable
                style={[styles.button3, styles.buttonClose2]}
                onPress={() =>this.props.navigation.navigate('geldim')}
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
</View>





    )
}
}

const styles = StyleSheet.create({
    timer: {
      
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:80
    },
  
    rezerve: {
        fontFamily: 'Foundation',
        fontSize: 40,
        marginVertical: 10,
        marginTop:300
    },
    button: {
      backgroundColor: '#00cbcc',
      borderRadius: 15,
    height:75,
    width:250,
    marginTop:65,
    marginBottom:55,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    buttonA: {
      backgroundColor: '#64ffda',
      borderRadius: 15,
    height:75,
    width:200,
    marginTop:50,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  
    textBody: {
      fontFamily: 'Foundation',
      fontSize: 16,
      marginTop: 15,
      marginBottom: 15,
      color: '#003300',
    },
    textTitle: {
      fontSize: 21,
      fontFamily: 'monospace',
    fontWeight:'bold',
      color:'#002171',
    
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#004c40",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
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
  }
  })