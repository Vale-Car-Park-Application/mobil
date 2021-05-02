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
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    RefreshControl
   } from 'react-native';
   import axios from "axios";

   export default class iücotoparkalanlar extends Component{
   constructor(props){
       super(props)
       this.state={
data:[],
loading:true,
isRefresh:false,
page:1
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
      numColumns={1}
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
     ListHeaderComponent={()=><View><Text style={{color:'white',fontSize:35,fontWeight:'700'}}>Boş Alanlar</Text></View>}
     ListHeaderComponentStyle={{height:80,justifyContent:'center',marginBottom:23,backgroundColor:'#81c784',alignItems:'center'}}
     onEndReachedThreshold={1.1}
     onEndReached={this.loadMore}
     ItemSeparatorComponent={this.rendeSeparator}
     >



      </FlatList>
   }
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
       padding:15,
       borderRadius:15,
       flexDirection:'row',
       backgroundColor:'#97b498',
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