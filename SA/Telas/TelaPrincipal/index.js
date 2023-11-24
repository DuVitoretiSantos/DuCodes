import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ImageBackground,Image,TouchableOpacity,ScrollView } from "react-native";






import { useNavigation } from "@react-navigation/native";

export default function Perfil(){
  const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <HeaderMenu/>
            <BodyMenuUm/>
            <BodyMenuDois/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

function HeaderMenu(){
    return(
     <View style={{width: '100%',height: '15%',backgroundColor: 'black',
      alignItems: 'center',justifyContent: 'center',paddingTop: 15,flex: 1}}>
          
        <Text style={{color: '#C1272C',fontSize: 40}}>Blade & Whiskers</Text>
     </View>
    )
}

function BodyMenuUm(){
 return(
    <View style={{backgroundColor: '#1a1a1a',width: '100%',height: '25%',
     paddingTop: 25,paddingLeft: 25,paddingRight: 25,flexDirection: 'row',gap: 25}}>
       
       <View style={{backgroundColor: 'black',width: 180,height: 180,borderWidth: 1,borderRadius: 15,
        alignItems: 'center',justifyContent: 'center'}}>
        <TouchableOpacity style={{backgroundColor: '#white'}}>
          <Image style={{height: 150,width: 150,borderRadius: 15}} source={require('../../imagens/whiteUser.png')}/>
        </TouchableOpacity>
       </View>

       <View style={{backgroundColor: 'black',width: 180,height: 180,borderWidth: 1,borderRadius: 15,
        alignItems: 'center',justifyContent: 'center'}}>
        <TouchableOpacity style={{backgroundColor: '#white'}}>
          <Image style={{height: 150,width: 150,borderRadius: 15}} source={require('../../imagens/whiteCalendar.png')}/>
        </TouchableOpacity>
       </View>
    </View>
 )
}

function BodyMenuDois(){
  return(
    <View style={{backgroundColor: '#1a1a1a',width: '100%',height: '25%',
     paddingTop: 25,paddingLeft: 25,paddingRight: 25,flexDirection: 'row',gap: 25}}>
       
       <View style={{backgroundColor: 'black',width: 180,height: 180,borderWidth: 1,borderRadius: 15,
        alignItems: 'center',justifyContent: 'center'}}>
        <TouchableOpacity style={{backgroundColor: '#white'}}>
          <Image style={{height: 150,width: 150,borderRadius: 15}} source={require('../../imagens/whiteUser.png')}/>
        </TouchableOpacity>
       </View>

       <View style={{backgroundColor: 'black',width: 180,height: 180,borderWidth: 1,borderRadius: 15,
        alignItems: 'center',justifyContent: 'center'}}>
        <TouchableOpacity style={{backgroundColor: '#white'}}>
          <Image style={{height: 150,width: 150,borderRadius: 15}} source={require('../../imagens/whiteConfig.png')}/>
        </TouchableOpacity>
       </View>
    </View>
  )
}

function TabMenu(){
   return(
    <View style={{height: '10%',width: '100%',backgroundColor: 'black'
     ,flexDirection: 'row',justifyContent: 'space-around'}}>
        
        
       
    
        
    </View>
    ) 
}

