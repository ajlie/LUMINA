import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { loginUser } from '../API/API';

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
      <View style = {styles.container}>
        <TextInput
          placeholder='Username'
          value = {username}
          onChangeText={setUsername}
          style = {styles.input}
                    
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style = {styles.input}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'green'
  }

})

export default LoginSub