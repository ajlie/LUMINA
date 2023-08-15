import React, { useState } from 'react';
import { View, Button, TouchableHighlight, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Register from './Register'
import Login from './LoginSub'
import LoginBackground from './LoginBackground'
import styles from './LoginStyle'


const LoginMain = () => {
    const [registerMode, setRegisterMode] = useState(false);
    const [loginMode, setLoginMode] = useState(false);

    const showRegister = () => {
        setRegisterMode(true);
        setLoginMode(false);
    }

    const showLogin = () => {
        setLoginMode(true);
        setRegisterMode(false);
    }

  return (
    <View>
        <LoginBackground style = {styles.background}/>
    <SafeAreaView>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            underlayColor="#AAAAAA"
            onPress={showRegister}
            style={styles.button}
          >
            <Text style={styles.registerButton}>Register</Text>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#DDDDDD"
            onPress={showLogin}
            style={styles.button}
          >
            <Text style={styles.loginButton}>Login</Text>
          </TouchableHighlight>

          <View style = {[styles.formContainer, { height: registerMode || loginMode ? 300 : 0 }]}>
            {registerMode && <Register />}
            {loginMode && <Login />}
          </View>
        </View>
    </SafeAreaView>
    </View>
  )
}

export default LoginMain