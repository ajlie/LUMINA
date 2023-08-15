import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    zIndex: 0, 
    position: 'absolute',
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'center',
    textAlign: 'center',
    top:300,
    flexWrap: 'wrap',
  },
  registerButton: {
    padding: 20,
    width: 150,
    textAlign: 'center',
  },
    loginButton: {
    padding: 20,
    width: 150,
    height: 20,
    textAlign: 'center',
    backgroundColor: 'yellow'
  },
  button: {
    backgroundColor: 'purple',
    height: 55,
    borderRadius: 40,
  },
  formContainer: {
    marginTop: 60,
    right: 150,
    backgroundColor: 'blue',
    padding: 0,
    //  width: 100,
  }
});

export default styles;