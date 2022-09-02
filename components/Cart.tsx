import { StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native'
import React ,{useState}from 'react'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
const Cart = () => {

  const [firstCounter,setFirstCounter] =useState<any>(0);
  const [secCounter,setSecCounter] =useState<any>(0);
  const [thirdCounter,setThirdCounter] =useState<any>(0);
  const [fourCounter,setFourCounter] =useState<any>(0);
  const [showView1,setShowView1] = useState<any>(true)
  const [showView2,setShowView2] = useState<any>(true)
  const [showView3,setShowView3] = useState<any>(true)
  const [showView4,setShowView4] = useState<any>(true)
 

  return (

      <ScrollView>
    <View style={styles.main}>
    <View style={styles.container}>
     
      <IconEntypo name='shopping-cart' 
      size ={35}/>
      
      <View style={styles.topNum}>
      <Text style={styles.total}>{firstCounter+secCounter+thirdCounter+fourCounter}</Text>
      </View>
      <Text style={styles.text}>Items</Text>
        </View>

        <View style={styles.button}>
         
        <TouchableOpacity style={styles.refreshIcon}
         onPress={() =>{
           setFirstCounter (0);
           setSecCounter (0);
           setThirdCounter (0);
           setFourCounter (0);
          }}
        >
        <IconFontAwesome 
         name = 'refresh'
        size ={30}/>
     </TouchableOpacity>
     
      <TouchableOpacity style={styles.recycleIcon}
      onPress={() =>{
        setShowView1(false);
        setShowView2(false);
        setShowView3(false);
        setShowView4(false);
        setFirstCounter (0);
        setSecCounter (0);
        setThirdCounter (0);
        setFourCounter (0);
      }}>
        <IconFontAwesome 
        name = 'recycle'
        size ={30}/>
     </TouchableOpacity>
    </View>
    

    { showView1&&
    <View style={styles.button}>

    <Text style={{
      backgroundColor : firstCounter==0 ? "#ffd507" : "#127CDE",
      fontSize: 30,
      color:"#FFFFFF",
      borderRadius : 10,
      width :100,
      height :50,
      paddingLeft:40
     }}>{firstCounter}</Text>
    <TouchableOpacity style={styles.addIcon}
     onPress={() =>{
      setFirstCounter ( firstCounter + 1);
     }}>
       <IconIonicons
         
         name='add-circle'
         size ={30}/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.minusIcon}
     onPress={() =>{
      setFirstCounter ( firstCounter - 1);
     }}
    >
    <IconFontAwesome 
       name = 'minus-circle'
      size ={30}/>
    </TouchableOpacity>
     <TouchableOpacity style={styles.deleteIcon}
     onPress={()=>{
      setShowView1(false);
      setFirstCounter (0);
     }}>
      <IconAntDesign
      name='delete'
      size ={30}/>
     </TouchableOpacity>
    </View>
}


{ showView2&&
    <View style={styles.button}>

<Text style={{
      backgroundColor : secCounter==0 ? "#ffd507" : "#127CDE",
      fontSize: 30,
      color:"#FFFFFF",
      borderRadius : 10,
      width :100,
      height :50,
      paddingLeft:40
     }}>{secCounter}</Text>
<TouchableOpacity style={styles.addIcon}
 onPress={() =>{
  setSecCounter ( secCounter + 1);
 }}>
   <IconIonicons
     
     name='add-circle'
     size ={30}/>
</TouchableOpacity>
<TouchableOpacity style={styles.minusIcon}
 onPress={() =>{
  setSecCounter ( secCounter - 1);
 }}
>
<IconFontAwesome 
   name = 'minus-circle'
  size ={30}/>
</TouchableOpacity>
 <TouchableOpacity style={styles.deleteIcon}
  onPress={()=>{
    setShowView2(false);
    setSecCounter (0);
   }}>
  <IconAntDesign
  name='delete'
  size ={30}/>
 </TouchableOpacity>
</View>
}
{ showView3&&
<View style={styles.button}>

<Text style={{
      backgroundColor : thirdCounter==0 ? "#ffd507" : "#127CDE",
      fontSize: 30,
      color:"#FFFFFF",
      borderRadius : 10,
      width :100,
      height :50,
      paddingLeft:40
     }}>{thirdCounter}</Text>
<TouchableOpacity style={styles.addIcon}
 onPress={() =>{
  setThirdCounter ( thirdCounter + 1);
 }}>
   <IconIonicons
     
     name='add-circle'
     size ={30}/>
</TouchableOpacity>
<TouchableOpacity style={styles.minusIcon}
 onPress={() =>{
  setThirdCounter ( thirdCounter - 1);
 }}
>
<IconFontAwesome 
   name = 'minus-circle'
  size ={30}/>
</TouchableOpacity>
 <TouchableOpacity style={styles.deleteIcon}
  onPress={()=>{
    setShowView3(false);
    setThirdCounter (0);
   }}>
  <IconAntDesign
  name='delete'
  size ={30}/>
 </TouchableOpacity>
</View>
}

{ showView4&&
<View style={styles.button}>

<Text style={{
      backgroundColor : fourCounter==0 ? "#ffd507" : "#127CDE",
      fontSize: 30,
      color:"#FFFFFF",
      borderRadius : 10,
      width :100,
      height :50,
      paddingLeft:40
     }}>{fourCounter}</Text>
<TouchableOpacity style={styles.addIcon}
 onPress={() =>{
  setFourCounter ( fourCounter + 1);
 
 }}>
   <IconIonicons
     
     name='add-circle'
     size ={30}/>
</TouchableOpacity>
<TouchableOpacity style={styles.minusIcon}
 onPress={() =>{
  setFourCounter ( fourCounter - 1);
 }}
>
<IconFontAwesome 
   name = 'minus-circle'
  size ={30}/>
</TouchableOpacity>
 <TouchableOpacity style={styles.deleteIcon}
  onPress={()=>{
    setShowView4(false);
    setFourCounter (0);
   }}>
  <IconAntDesign
  name='delete'
  size ={30}/>
 </TouchableOpacity>
</View>

  }
   <Text style={styles.newText}>abc</Text>
    </View>
    </ScrollView>
  )
}

export default Cart

const styles = StyleSheet.create({
  main:{
    flex:1,
      backgroundColor:"#b5e1f5",
      alignItems : "center",
    },
      
    container:{ 
      flexDirection:"row",
      paddingTop:70,
      },
    topNum:{
        paddingLeft:50
    },
   
    total:{
      fontSize: 30,
      backgroundColor:"#03A9F4",
      color:"#FFFFFF",
      width :100,
      height :45,
      paddingLeft:40,
      borderRadius:20,
      },
    text:{
      fontSize:30,
      paddingLeft:20,
      
    },
    recycleIcon:{
      
      backgroundColor:"#2196F3",
      borderRadius : 10,
      width :60,
      height :50,
      padding: 15,
     
    },
    refreshIcon:{
      
      backgroundColor:"#4CAF50",
      borderRadius : 10,
      width :60,
      height :50,
      padding: 12,
      paddingLeft:15
      
    },
  button:{
   flexDirection:"row",
   padding: 20,

  
    },
    addIcon:{
      backgroundColor:"#808080",
      borderRadius : 10,
      width :60,
      height :50,
      padding: 10,
      paddingLeft:15 
    },
    minusIcon:{
      backgroundColor:"#68CCCA",
      width :60,
      height :50,
      padding: 10,
      paddingLeft:15 ,
      borderRadius : 10,
    },
    deleteIcon:{
      backgroundColor:"#F44336",
      
      width :60,
      height :50,
      padding: 10,
      paddingLeft:15 ,
      borderRadius : 10,
    },
    newText:{
      paddingTop:1000,
      color:"#b5e1f5"
    },
   
})