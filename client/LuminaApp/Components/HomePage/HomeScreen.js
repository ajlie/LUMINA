import React, { useState, useContext } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';
import MemoryCreator from '../MemoryPage/MemoryCreator'; 
import { AppContext } from '../../AppContext';

const HomeScreen = () => {
  const [memoryCreatorModalVisible, setMemoryCreatorModalVisible] = useState(false);
  const { memoriesUpdated } = useContext(AppContext); // Use the context

  return (
    <View style={styles.container}>
      <Text>Connection Test</Text>

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
    </View>
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

export default HomeScreen;
