import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { registerUser } from '../API/API';
import styles from './LoginStyle'

const Register = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
          const response = await registerUser(username, password);
          console.log(response);
    
          //resets navigation page so that after login users can't access login page again
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Navigate' }],
            })
          );
    
        } catch (error) {
          console.error(error);
        }
      };


  return (
    <SafeAreaView>
        <View style = {styles.registerContainer}>
            <TextInput
                placeholder='Username'
                value = {username}
                onChangeText={setUsername}
                style={styles.registerInput}
                
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.registerInput}
            />
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry
              onChangeText={setPassword}
              style={styles.registerInput}
            />
            <TouchableOpacity onPress={handleRegister} style = {styles.registerSubmit}>
              <Text style = {styles.registerSubmitText}> Sign Up </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}


export default Register