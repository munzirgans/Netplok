import React from 'react';
import {StyleSheet, View,Text,TextInput,TouchableOpacity,Image,ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {StatusBar} from "expo-status-bar"
import Constants from 'expo-constants';
import {StackScreenProps} from "@react-navigation/stack"

type RootStackParamList = {
    Home : {
        fullname : string,
        email : string
    }
}

type Props = StackScreenProps<RootStackParamList, "Home">

export default function HomeScreen({route} : Props){
    return(
       <View style={{flex : 1, backgroundColor:"black"}}>
           <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{height:500}}>
                    <ImageBackground resizeMode="cover" source={require('../../assets/images/movies/joker.jpg')} 
                    style={{flex:1}}>
                        <LinearGradient colors={['rgba(0,0,0,0.3)', "rgba(0,0,0,0)" ,"rgba(0,0,0,0.8)"]} style={{flex:1}}>
                            <View style={{bottom:30, position:"absolute",alignItems:"center",width:"100%"}}>
                                <Text style={{color:"white", fontSize:50,fontWeight:"bold", letterSpacing:7}}>JOKER</Text>
                                <Text style={{color:"white", fontSize:15,marginTop:10,letterSpacing:1}}>Crime  -  Drama</Text>
                                <View style={{backgroundColor:"white",marginTop:15,borderRadius:5,paddingTop:8, width:150, justifyContent:"center",paddingRight:20,paddingBottom:10,flexDirection:"row",paddingLeft:15}}> 
                                    <Ionicons name="play" size={20} color="black" style={{marginTop:4.5,marginRight:7}} /><Text style={{fontSize:20, fontWeight:"bold"}}>Putar</Text>
                                </View>
                            </View>
                        </LinearGradient>
                        {/* <Text style={{color:"white",position:"absolute",bottom:0}}>Muhammad Munzir</Text> */}
                    </ImageBackground>
                </View>
                <View style={styles.header}>
                    <Image source = {require("../../assets/images/netflix_logo.png")} style={styles.nlogo}/>
                    <Text style={{color:"white", alignSelf:"center",fontSize:20,fontWeight:"bold"}}>{route.params.fullname}</Text>
                    <FontAwesome name="user-circle" size={28} color="white" style={{alignSelf:"center"}}/>
                </View>
                <Text style={{color:"white", fontWeight:"bold", fontSize:20,marginTop:10,marginLeft:23}}>Populer di Netplok</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                    <View style={{flexDirection:"row",marginTop:10,marginLeft:5}}>
                        <Image source={require("../../assets/images/movies/batman.jpg")} style={styles.slider} />
                        <Image source={require("../../assets/images/movies/money_heist.jpg")} style={styles.slider} />
                        <Image source={require("../../assets/images/movies/queen's_gambit.jpg")} style={styles.slider} />
                        <Image source={require("../../assets/images/movies/us.jpg")} style={styles.slider} />
                    </View>
                </ScrollView>
           </ScrollView>
           <StatusBar hidden={false} backgroundColor="transparent"/>
       </View>
    )
}

const styles = StyleSheet.create({
    header : { 
        position : "absolute",
        top : Constants.statusBarHeight,
        width : "100%",
        paddingTop : 10,
        paddingLeft : 10,
        paddingRight : 10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    nlogo : {
        width:38,
        height:38
    },
    slider : {
        width:90,
        height:150,
        marginLeft:10,
        borderRadius:5,
    }
})
