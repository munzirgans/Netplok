import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Image, ActivityIndicator, Modal,BackHandler} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {StatusBar} from "expo-status-bar"
import axios from 'axios';
import { NavigationEvents } from 'react-navigation';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';


export default function LoadingScreen(){
    const navigation = useNavigation();

    const [load, setLoad] = useState(false)

    useEffect(()=> {
        setLoad(true)
        setTimeout(() => {
            axios.get("http://192.168.0.197:9999/check").then(res => {
                if(res.status == 200 ){
                    setLoad(false)
                    navigation.navigate("Login")
                }else{
                    BackHandler.exitApp()
                }
            })
        }, 1000)
    },[])


    return(
        <View style={style.container}>
            <Modal transparent={true} visible={load}>
                <ActivityIndicator
                    color = "red"
                    size = "large"
                    style = {style.loading}
                />
            </Modal>
            <Image source={require('../assets/images/netplok.png')}/>
            <StatusBar hidden/>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor : 'black',
    },
    loading : {
        position:"absolute",
        height:"100%",
        alignSelf:"center",
        width:"100%",
        zIndex : 1,
        top:70
    }
})