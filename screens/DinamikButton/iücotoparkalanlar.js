import React,{Component}from "react";
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

   export default class iücotoparkalanlar extends Component{
   constructor(props){
       super(props)
       this.state={
data:[],
loading:true,
isRefresh:false,
page:1,
show:false
       }
   }

componentDidMount(){
    // axios.get(`https://jsonplaceholder.typicode.com/posts`)
    // .then((res)=>{
    //     this.setState({data:res.data})
    //     console.log(res.data)
    // })
    // .catch((e)=>console.log(e))
    this.fetchUser()
}

 
//Sayfa Yenileme
fetchUser(page=1,isLoadMore=false){

   const url=`https://api.stackexchange.com//2.2/users?page=${page}&order=desc&sort=reputation&site=stackoverflow`
   //const url=`http://10.0.2.2:3000/items`;
axios.get(url).then((res)=>{
    // const i=0
    // for (let i=0;i<30;i++){
    //    const deger= res.data.items[i].profile_image
    // }
   
    
   
    
    
    const{data}=this.state
    let newData=(isLoadMore) ? data.concat(res.data.items) : res.data.items
this.setState({page,data:newData,loading:false,isRefresh:false})
})
.catch(error=>{
alert(error)
})
}

_renderItem=({item})=>{

return(
    <TouchableOpacity style={{backgroundColor:'#e0e0e0'}} onPress={()=>this.props.navigation.navigate('timer',{BosYer:item.display_name})}>
        
    <View style={styles.card}>
       {/* <TouchableOpacity onPress={()=>Linking.openURL(item.profile_image)}>
     
      <Image  style={styles.avatar} source={{uri:item.profile_image}}/>
     
      </TouchableOpacity> */}
      <View style={{marginLeft:15,justifyContent:'center',borderRadius:15}}> 
     
      <Text style={{color:'white',fontSize:25,fontWeight:'700'}}>{item.display_name}</Text>
     {/* <Text>{item.location}</Text> */}
      </View>
     
    </View>
    </TouchableOpacity>
)
}

onRefresh=()=>{
    this.setState({isRefresh:true})
    this.fetchUser()
}

loadMore=()=>{
   const {page}=this.state
   var newPage=page+1
   this.fetchUser(newPage,true)
}

renderFooter=()=>{

if(!this.state.loading)return null;
return <ActivityIndicator style={{color:'#80cbc4'}}/>

}




render (){

    
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
      ListEmptyComponent={()=><View><Text>Veri Yok</Text></View>}
     ListFooterComponent={this.renderFooter}
     ListFooterComponentStyle={{backgroundColor:'#280680',alignItems:'center'}}
     ListHeaderComponent={()=><View><Text style={{color:'#524c00',fontSize:35,fontWeight:'700'}}>Boş Alanlar</Text></View>}
     ListHeaderComponentStyle={{height:80,justifyContent:'center',marginBottom:23,backgroundColor:'#d4e157',alignItems:'center'}}
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
    backgroundColor: "#00675b",
    padding: 10, borderRadius:55}} onPress={()=>{this.setState({show:true})}}>
      <Icon  name={Platform.OS === "ios" ? "ios-add" : "map-outline"}
  color="white"
  size={20}>
        <Text> Otopark 2D</Text>
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
       marginLeft:2,
       marginRight:2,
       paddingHorizontal:15,
      maxWidth:'100%',
      width:190,
       height:100,
       padding:15,
       borderRadius:15,
       flexDirection:'row',
       backgroundColor:'#a8b545',
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