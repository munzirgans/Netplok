import React, { useState } from 'react';
import {StyleSheet, View,Text,TextInput,TouchableOpacity,Image, ActivityIndicator, Modal} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {StatusBar} from "expo-status-bar"

export default function RegisterScreen(){
    const navigation = useNavigation()

    const [username, setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false)

    const register = () => {
        setLoading(true)
        const registerData = {
            username : username,
            email : email,
            password : password
        }
        axios.post("http://192.168.0.197:9999/user", registerData)
        .then(result => {
            setLoading(false)
            alert(result.data.msg + ". Silahkan Login")
            navigation.navigate("Login")
        }).catch(error => {
            console.log(error)
        })
    }
    
    return(
        <View style={styles.container}>
            <Modal visible={loading} transparent={true} animationType="fade">
                <ActivityIndicator 
                    color="red"
                    size="large"
                    style = {styles.loading}
                />
            </Modal>
            <View style={styles.RegisterForm}>
                <Image source={require('../assets/images/netplok.png')} style={styles.gambar}/>
                <TextInput placeholder="Fullname" style={styles.form} onChangeText={(text) => setUsername(text)}/>
                <TextInput placeholder="Email" style={styles.form} onChangeText={text => setEmail(text)}/>
                <TextInput placeholder="Phone Number" style={styles.form}/>
                <TextInput placeholder="Password" style={styles.form} onChangeText={text => setPassword(text)} secureTextEntry={true}/>
                <TextInput placeholder="Confirm Password" style={styles.form} secureTextEntry={true}/>
                <TouchableOpacity style={styles.register}  onPress={register}>
                    <Text style={{color:"white", fontWeight:"bold"}}>Register</Text>
                </TouchableOpacity>
                <Text style={{color:"white", marginTop:20, fontSize:18}}> Already Have an Account ?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={{color:"red", fontWeight:"bold",fontSize:18,marginTop:4}}>Login Here</Text>
                </TouchableOpacity>
            </View>
            <StatusBar hidden={false} backgroundColor="transparent"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:  {
        flex:1,
        backgroundColor:"black",
    },
    gambar : {
        width:200,
        height:50,
        marginBottom:50,
    },
    form : {
        height:45,
        backgroundColor:"lightgrey",
        width:300,
        borderRadius:7,
        paddingLeft:15,
        marginTop:10
    },
    RegisterForm:{
        alignItems:"center",
        marginTop:50,
    },
    register : {
        width:300,
        height:50,
        backgroundColor:"red",
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
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
});