import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/home/Home';

const Stack = createStackNavigator();


export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" screenOptions={{headerShown:false, cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen}
          options={{
            headerShown:true,
            headerTitle: "",
            headerTintColor : "white",
            headerStyle : {
              backgroundColor:"black"
            },
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
