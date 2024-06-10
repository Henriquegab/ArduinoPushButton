import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
// import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
// SplashScreen.preventAutoHideAsync();
import { useState,useEffect } from 'react';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPassword from './screens/ForgotPassword';
import MainMenu from './screens/MainMenu';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TransitionPresets } from '@react-navigation/native-stack';


export default function App() {


  const [status, setStatus] = useState('On');
  const [bg, setBg] = useState('bg-green-500');

  const click = () => {
    if (status == "On"){
      setStatus('Off')
      setBg('bg-red-500')
    }
    if (status == "Off"){
      setStatus('On')
      setBg('bg-green-500')
    }
  }
  
   return (
    <>
    <SafeAreaView className="flex-1 justify-center items-center">
      <TouchableOpacity className={`border-2 w-32 h-32 rounded-full items-center justify-center ${bg}`} onPress={click}>

          <Text>{status}</Text>
      </TouchableOpacity>
    
    </SafeAreaView>
      
    </>
  );
}

