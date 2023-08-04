import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import Navigation from './Components/Navigation'

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
      <h1>Bob the builder</h1>
    </NavigationContainer>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
