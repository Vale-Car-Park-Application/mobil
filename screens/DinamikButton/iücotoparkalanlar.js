import React,{Component,BackHandler}from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    StatusBar,
    SafeAreaView,
    Touchable,
    Image,
    Modal,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    RefreshControl
   } from 'react-native';
   import axios from "axios";
   import Icon from "react-native-vector-icons/Ionicons"
   import LinearGradient from 'react-native-linear-gradient';
   export default class iücotoparkalanlar extends Component{
   constructor(props){
       super(props)
       this.state={
data:[],
loading:true,
isRefresh:false,
page:1,
show:false,
musait:[],
carPark3:{}
       }
   }


 
componentDidMount(){
   
    const {carPark2,token,profile} = this.props.route.params;
    this.setState({carPark3:carPark2})
    // axios.get(`https://jsonplaceholder.typicode.com/posts`)
    // .then((res)=>{
    //     this.setState({data:res.data})
    //     console.log(res.data)
    // })
    // .catch((e)=>console.log(e))
    this.fetchUser()
}

 
//Sayfa Yenileme
fetchUser(isLoadMore=false){
    const {carPark2,token,profile} = this.props.route.params;
    const{data}=this.state
for(let i=0;i<carPark2.areas.length;i++){
//console.log(carPark2)
    if(carPark2.areas[i].reservationState==false && carPark2.areas[i].isFull==false){

 this.state.musait[i]=carPark2.areas[i]
// this.state.musait[i].reservationState=carPark2.areas[i].reservationState
// this.state.musait[i].isFull=carPark2.areas[i].isFull
// this.state.musait[i].remainingTime=carPark2.areas[i].remainingTime
// this.state.musait[i]._id=carPark2.areas[i]._id

    }
}
// console.log(this.state.musait)

    let newData=(isLoadMore) ? data.concat(this.state.musait) : this.state.musait
this.setState({data:newData,loading:false,isRefresh:false})
}

_renderItem=({item})=>{
    const {carPark2,token,profile} = this.props.route.params;
    
   
    
    
return(
    <TouchableOpacity style={{marginLeft:'5%',marginRight:'5%',backgroundColor:'#e0e0e0',borderRadius:15},styles.card} onPress={()=>{
        item.reservationState = true;
        item.remainingTime=10
        
        let user_id;
        axios.get(`https://ieeevale.com/api/current_user`,{
            headers:{
              'authorization':token
            }
            }).then(res => {user_id = res.data.data._id})
          
        item.user_id = user_id;
        axios.put(`https://ieeevale.com/api/carparks/${carPark2._id}`,item,{
            headers:{
              'authorization':token
            }
          }).then(res => {
            this.props.navigation.navigate('timer',{carPark2,profile,item,token,BosYer:item.areaName})
        }).catch((err) => {
            alert(err)
        })}
        }>
         
  
       {/* <TouchableOpacity onPress={()=>Linking.openURL(item.profile_image)}>
     
      <Image  style={styles.avatar} source={{uri:item.profile_image}}/>
     
      </TouchableOpacity> */}
      <View style={{alignItems:'center',justifyContent:'center'}}> 
     
      <Text style={{color:'white',fontSize:25,fontWeight:'700'}}>{item.areaName}</Text>
    
     {/* <Text>{item.location}</Text> */}
      </View>
     
    
    
    </TouchableOpacity>
)
}

onRefresh=()=>{
    this.setState({isRefresh:true})
    this.fetchUser()
}


renderFooter=()=>{

if(!this.state.loading)return null;
return <ActivityIndicator style={{color:'#80cbc4'}}/>

}




render (){
    const {carPark2,token,profile} = this.props.route.params;

    
const {data,loading,isRefresh}=this.state
    return (

    <View style={{backgroundColor:'#4f9a94',width:'100%',height:'100%'}}>


        
{(loading) ? <View style={{alignItems:'center',marginTop:'50%'}}><Text style={{fontSize:50,color:'#b2fef7'}}>Yükleniyor...</Text></View> 
   :
      <FlatList
      style={{padding:10,backgroundColor:'#f5f5f5'}}
      data={data}
      numColumns={2}
      keyExtractor={(item,index)=>index.toString()}
      refreshControl={
          <RefreshControl
          refreshing={isRefresh}
          onRefresh={this.onRefresh}
          
          />
      }
      renderItem={this._renderItem}
      ListEmptyComponent={()=><View style={{alignItems:'center',fontSize:15}}><Text>Boş Alan Yok</Text></View>}
     ListFooterComponent={this.renderFooter}
     ListFooterComponentStyle={{backgroundColor:'#5d9371',alignItems:'center'}}
     ListHeaderComponent={()=><View><Text style={{color:'white',fontSize:35,fontWeight:'700'}}>Boş Alanlar</Text></View>}
     ListHeaderComponentStyle={{backgroundColor:'#1f5c63',borderRadius:15,height:80,justifyContent:'center',marginBottom:23,alignItems:'center'}}
     onEndReachedThreshold={1.8}
     onEndReached={this.loadMore}
     ItemSeparatorComponent={this.rendeSeparator}
     >



      </FlatList>
   }
   <Modal
   transparent={true}
   visible={this.state.show}
   >
    
     <View style={{backgroundColor:"#000000aa",flex:1,alignItems:'center'}}>
    
     <ScrollView horizontal={true} style={{backgroundColor:"#ffffff",margin:30,padding:10,borderRadius:10,flex:1}}>
    <Image style={{width:1000,height:'90%',}} source={{uri: 'https://www.ciziktirik.com/wp-content/uploads/2018/03/otopark_5_84_arac.jpg'}}/>
   </ScrollView> 
   <TouchableOpacity style={{alignItems: "center",justifyContent:'center',
   width:200,
   marginBottom:25,
    backgroundColor: "#00675b",
    padding: 10, borderRadius:55}} onPress={()=>{this.setState({show:false})}}><Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>Geri dön</Text></TouchableOpacity>
     
     </View>
     </Modal>
   <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, flexDirection:'row-reverse',marginBottom:'35%',marginRight:'5%'}}>
      <TouchableOpacity style={{alignItems: "center",
    backgroundColor: "#6cbac4",
    padding: 10, borderRadius:55}} onPress={()=>{this.setState({show:true})}}>
      <Icon  name={Platform.OS === "ios" ? "ios-add" : "map-outline"}
  color="#1f5c63"
  size={20}>
        <Text style={{fontWeight:'700'}}> Otopark 2D</Text>
        </Icon>
        </TouchableOpacity></View>
      </View>
      
    )
}








}
const styles=StyleSheet.create({

   
    card:{flex:1,
       justifyContent:'center',
       alignItems:'center',
       marginLeft:2
       ,backgroundColor:'#008ea3',
       marginRight:2,
       paddingHorizontal:15,
      maxWidth:'50%',
      width:150,
       height:100,
       padding:20,
       borderRadius:55,
       flexDirection:'row',
     //  backgroundColor:'#81a5ff',
       marginBottom:5,
       borderBottomColor:'#ddd'
   
   }
   , avatar:{width:65,
       height:65,
       borderRadius:100,
       borderWidth:2,
       borderColor:'#80cbc4'
   }
   })