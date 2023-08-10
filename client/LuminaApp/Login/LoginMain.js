import React, { useState } from 'react';
import { View, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Register from './Register'
import Login from './LoginSub'


const LoginMain = () => {
    const [registerMode, setRegisterMode] = useState(false);
    const [loginMode, setLoginMode] = useState(false);

    const showRegister = () => {
        setRegisterMode(true);
    }

    const showLogin = () => {
        setLoginMode(true);
    }

  return (
    <SafeAreaView>
        <View>
            {registerMode ? (
                <Register/>
            ) : (
                <View>
                    <Button title="Register" onPress={showRegister} />
                </View>
            )}

            {loginMode ? (
                <Login/>
            ) : (
                <View>
                    <Button title = "Login" onPress = {showLogin}/>
                </View>
            )}
        </View>
    </SafeAreaView>
  )
}

export default LoginMain