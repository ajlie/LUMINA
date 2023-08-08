import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { registerUser, loginUser } from './API/API';
import { useNavigation, CommonActions } from '@react-navigation/native';

const Login = () => {
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

  const handleLogin = async () => {
    try {
      const response = await loginUser(username, password);
      console.log(response);

      //resets navigation page so that after login users can't access login page again
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Navigation' }],
        })
      );
    }catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
});

export default Login;
