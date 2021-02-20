import React, {useState} from 'react'
import {View,Text, StyleSheet, Image,TextInput, ActivityIndicator, Modal} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'
import axios from 'axios'
import {StatusBar} from "expo-status-bar"

export default function LoginScreen(){
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    
    const login = () => {
        setLoading(true)
        axios.get("http://192.168.0.197:9999/user", {
            params : {
                email : email,
                password : password
            }
        }).then(result => {
            setLoading(false)
            if (result.status == 200){
                navigation.navigate("Home", result.data.data)
            }
        }).catch(error => {
            setLoading(false)
            if(error.response.status == 500 || error.response.status == 400)  {
                alert(error.response.data.msg)
            }else{
                console.log(error)
            }
        })
    }

    return(
        <View style={style.container}>
            <Modal visible={loading} transparent={true} animationType="fade">
                <ActivityIndicator 
                    color="red"
                    size="large"
                    style = {style.loading}
                />
            </Modal>
            <View style={style.LoginForm}>
                <Image source={require('../assets/images/netplok.png')} style={style.gambar}/>
                <TextInput placeholder="Email" style={style.form} onChangeText={text => setEmail(text)}/>
                <TextInput placeholder="Password" style={style.form} onChangeText={text => setPassword(text)} secureTextEntry={true}/>
                <TouchableOpacity style={style.signin} onPress={login}>
                     <Text style={{color:"white",fontWeight:"bold"}}>Sign In</Text>
                 </TouchableOpacity>
                 <Text style={{color:"white", marginTop:45, fontSize:18}}> Don't Have Account ?</Text>
                 <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                     <Text style={{color:"red", fontWeight:"bold",fontSize:18,marginTop:4}}>Register Here</Text>
                 </TouchableOpacity>
            </View>
            <StatusBar hidden={false} backgroundColor="transparent"/>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"black",
    },
    gambar : {
        width:200,
        height:50,
        marginBottom:50,
    },
    form : {
        height:50,
        backgroundColor:"lightgrey",
        width:300,
        borderRadius:7,
        paddingLeft:15,
        marginTop:17
    },
    LoginForm:{
        alignItems:"center",
        marginTop:150,
    },
    signin : {
        width:300,
        height:50,
        backgroundColor:"red",
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        borderRadius:10
    },
    loading : {
        position:"absolute",
        height:"100%",
        alignSelf:"center",
        width:"100%",
        zIndex : 1,
        backgroundColor:"rgba(0,0,0,0.5)",
    }
})