import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { registerUser } from '../API/API';

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
              routes: [{ name: 'Navigation' }],
            })
          );
    
        } catch (error) {
          console.error(error);
        }
      };


  return (
    <SafeAreaView>
        <View style = {styles.container}>
            <TextInput
                placeholder='Username'
                value = {username}
                onChangeText={setUsername}
                
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Register" onPress={handleRegister} />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'column',
    backgroundColor: 'green'
  }
})

export default Register