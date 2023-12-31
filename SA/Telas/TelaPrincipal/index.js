import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ImageBackground,Image,TouchableOpacity,ScrollView } from "react-native";






import { NavigationHelpersContext, useNavigation } from "@react-navigation/native";

export default function TelaPrincipal(){
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
  const [nomeUsuario,setNomeUsuario] = useState();
  
    return(
     <View style={{width: '100%',height: '5%',backgroundColor: 'black',
      alignItems: 'center',justifyContent: 'center',paddingTop: 15,gap: 100,flex: 1}}>
          
        <Text style={{color: '#C1272C',fontSize: 40}}>Blade & Whiskers</Text>
        
        <View><Text style={{color: 'white',fontSize: 15}}>Olá, {nomeUsuario}</Text></View>
     </View>
    )
}

function BodyMenuUm(){
  const navigation = useNavigation();  

 return(
    <View style={{backgroundColor: '#1a1a1a',width: '100%',height: '30%',
     paddingTop: 25,paddingLeft: 25,paddingRight: 25,flexDirection: 'row',gap: 25}}>

       
           
       <View style={{backgroundColor: 'black',width: 180,height: 180,borderWidth: 1,borderRadius: 15,
        alignItems: 'center',justifyContent: 'center'}}>
       
        <TouchableOpacity style={{backgroundColor: '#white',alignItems: 'center',justifyContent: 'center'}} onPress={() => navigation.navigate("TelaUser")}>
          <Image style={{height: 100,width: 100,borderRadius: 15}} source={require('../../imagens/whiteUser.png')}/>
          <Text style={{fontSize: 25,color: 'red'}}>User</Text>
        </TouchableOpacity>
       </View>

       <View style={{backgroundColor: 'black',width: 180,height: 180,borderWidth: 1,borderRadius: 15,
        alignItems: 'center',justifyContent: 'center'}}>
        <TouchableOpacity style={{backgroundColor: '#white',alignItems: 'center',justifyContent: 'center'}} onPress={() => navigation.navigate("MostrarAgendamento")}>
          <Image style={{height: 100,width: 100,borderRadius: 15}} source={require('../../imagens/whiteCalendar.png')}/>
          <Text style={{fontSize: 25,color: 'red'}}>Datas Marcadas</Text>        
        </TouchableOpacity>
       </View>
    </View>
 )
}

function BodyMenuDois(){
const navigation = useNavigation();
  
  return(
    <View style={{backgroundColor: '#1a1a1a',width: '100%',height: '30%',
     paddingTop: 25,paddingLeft: 25,paddingRight: 25,flexDirection: 'row',gap: 25}}>
       
       <View style={{backgroundColor: 'black',width: 180,height: 180,borderWidth: 1,borderRadius: 15,
        alignItems: 'center',justifyContent: 'center'}}>
        <TouchableOpacity style={{backgroundColor: '#white',alignItems: 'center',justifyContent: 'center'}} onPress={() => navigation.navigate("Agendamento")}>
          <Image style={{height: 150,width: 150,borderRadius: 15}} source={require('../../imagens/pngwing.com.png')}/>
          <Text style={{fontSize: 15,color: 'red'}}>ADD agendamentos</Text>    
        </TouchableOpacity>
       </View>

       <View style={{backgroundColor: 'black',width: 180,height: 180,borderWidth: 1,borderRadius: 15,
        alignItems: 'center',justifyContent: 'center'}}>
        <TouchableOpacity style={{backgroundColor: '#white',alignItems: 'center',justifyContent: 'center'}} onPress={() => navigation.navigate("TelaConfig")}>
          <Image style={{height: 150,width: 150,borderRadius: 15}} source={require('../../imagens/whiteConfig.png')}/>
          <Text style={{fontSize: 25,color: 'red'}}>Configurações</Text>    
        </TouchableOpacity>
       </View>
    </View>
  )
}


