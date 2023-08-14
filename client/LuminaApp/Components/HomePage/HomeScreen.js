import React, {useState, useContext} from 'react';
import { View, Text, Button, Modal, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import MemoryCreator from '../MemoryPage/MemoryCreator'; 
import { AppContext } from '../../AppContext';

const HomeScreen = () => {
  const navigation = useNavigation(); 
  const [memoryCreatorModalVisible, setMemoryCreatorModalVisible] = useState(false);
  const { memoriesUpdated } = useContext(AppContext); // Use the context

  const navigateJournal = () => {
    navigation.navigate('Journal'); // Navigate to the first screen
  };

  const navigateHome = () => {
    navigation.navigate('Home'); // Navigate to the second screen
  };

  const navigateMemory = () => {
    navigation.navigate('Memory'); // Navigate to the third screen
  };

  return (
    <SafeAreaView>
    <View>
    <Button title="Memory" onPress={navigateMemory} />
    <Button title="Journal" onPress={navigateJournal} />
    <Button title="Add Memory" onPress={() => setMemoryCreatorModalVisible(true)} />

    <Modal
      animationType="slide"
      transparent={true}
      visible={memoryCreatorModalVisible}
      onRequestClose={() => setMemoryCreatorModalVisible(false)}
    >
      <View style={styles.modalView}>
        <MemoryCreator onCreate={(newMemory) => {
          // After creating the memory, inform other components
          memoriesUpdated();
          setMemoryCreatorModalVisible(false);
        }} />
        <Button title="Close" onPress={() => setMemoryCreatorModalVisible(false)} />
      </View>
    </Modal>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Connection Test</Text>
      <Button title="Journal" onPress={navigateJournal} />
      <Button title="Home" onPress={navigateHome} />
      <Button title="Memory" onPress={navigateMemory} />
    </View>
    </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingTop: 30,
  },
});

export default HomeScreen