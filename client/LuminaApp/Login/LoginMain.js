import React, { useState, useEffect } from 'react';
import { View, Modal, TouchableHighlight, Text, ActivityIndicator} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Register from './Register'
import Login from './LoginSub'
import LoginBackground from './SVG/LoginBackground'
import LoginLumi from './SVG/LoginLumi'
import styles from './LoginStyle'
import LoadingBackground from './SVG/LoginLoadingBackground'
import LoadingDeco from './SVG/LoginLoadingLumi'
import * as Font from 'expo-font'

//font
const customFonts = {
  'Reem-Kufi': require('../fonts/static/ReemKufi-Medium.ttf'),
};

const LoginMain = () => {
    const [registerMode, setRegisterMode] = useState(false);
    const [loginMode, setLoginMode] = useState(true);
    const [registerButton, setRegisterButton] = useState('#FFEE92');
    const [loginButton, setLoginButton] = useState('#13043F');
    const [loading, setLoading] = useState(true); // Initialize as true
    const [fontsLoaded, setFontsLoaded] = useState(false);

    //fonts

    //allows for an effect of loading screen, kinda works 
    useEffect(() => {
        // Simulate rendering delay
        const renderTimer = setTimeout(() => {
            setLoading(false); // Turn off loading after rendering
        }, 4000);

        return () => clearTimeout(renderTimer);
    }, []);

    useEffect(() => {
      const loadFontsAsync = async () => {
        await Font.loadAsync(customFonts);
        setFontsLoaded(true);
      };
  
      loadFontsAsync();
    }, []);
  
    if (!fontsLoaded) {
      return null;
    }

    const showRegister = () => {
        setRegisterMode(true);
        setLoginMode(false);
        setRegisterButton('#13043F');
        setLoginButton('#FFEE92');

    }

    const showLogin = () => {
        setLoginMode(true);
        setRegisterMode(false);
        setRegisterButton('#FFEE92');
        setLoginButton('#13043F');
    }

  return (
    <View>
        <LoginBackground style = {styles.background}/>
        <LoginLumi style = {styles.lumi}/>
        <Text style = {styles.sloganTop}> Welcome to LUMINA </Text>
        <Text style = {styles.slogan}> your personalized AI journal </Text>
    <SafeAreaView>
        <View style = {styles.container}>
        <View style={styles.buttonContainer}>
        <TouchableHighlight
            onPress={showLogin}
            style={[styles.button, {backgroundColor: loginButton}]}
          >
            <Text style={[styles.loginButton, {color: registerMode ? 'black' : 'white'}]}>Sign In</Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={showRegister}
            style={[styles.button, {backgroundColor: registerButton}]}
          >
            <Text style={[styles.registerButton, {color: registerMode ? 'white' : 'black'}]}>Sign Up</Text>
          </TouchableHighlight>

        </View>

          <View style = {[styles.formContainer, { height: registerMode || loginMode ? 300 : 0 }]}>
            {registerMode && <Register />}
            {loginMode && <Login />}
          </View>
        </View>
    </SafeAreaView>

    {/* loading overlay || could not get bar working maybe a future project */}
    <Modal visible={loading} transparent={false} animationType="slideInUp">
      <SafeAreaView>
        <View>
          <LoadingBackground style = {{position: 'absolute'}}/>
          <LoadingDeco style = {{position: 'absolute', left: 15}}/>
            <ActivityIndicator size="large" color="#ffffff" style= {{paddingTop: 800}}/>
        </View>
      </SafeAreaView>
    </Modal>

    </View>
  )
}

export default LoginMain