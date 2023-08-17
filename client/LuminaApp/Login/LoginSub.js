import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { loginUser } from '../API/API';
import styles from './LoginStyle';

const LoginSub = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
          const response = await loginUser(username, password);
          console.log(response);
    
          //resets navigation page so that after login users can't access login page again
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Navigate' }],
            })
          );
        }catch (error) {
          console.error(error);
        }
      };

  return (
    <SafeAreaView>
      <View style = {styles.loginContainer}>
        <TextInput
          placeholder='Username'
          value = {username}
          onChangeText={setUsername}
          style = {styles.loginInput}
                    
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style = {styles.loginInput}
        />
        <TouchableOpacity onPress={handleLogin} style = {styles.loginSubmit}>
          <Text style = {styles.loginSubmitText}> Sign In </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}


export default LoginSub