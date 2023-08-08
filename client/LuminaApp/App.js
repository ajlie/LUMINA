import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import "react-native-url-polyfill/auto";
import AppNavigation from './AppNavigation'

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation></AppNavigation>
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
