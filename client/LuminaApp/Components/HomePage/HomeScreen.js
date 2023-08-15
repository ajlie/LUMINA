import React, {useState, useContext} from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, SafeAreaView, Button } from 'react-native';
import MemoryCreator from '../MemoryPage/MemoryCreator'; 
import { AppContext } from '../../AppContext';
import styles from './HomeStyle'
import HomeBackground from './HomeBackground';
import HomeLumi from './HomeLumi'



const HomeScreen = () => {
  const [memoryCreatorModalVisible, setMemoryCreatorModalVisible] = useState(false);
  const { memoriesUpdated } = useContext(AppContext); // Use the context


  return (
<View style = {{flex: 1}}>
    <HomeBackground style={styles.background}/>
    <HomeLumi style = {styles.icon}/>

    <SafeAreaView style = {styles.SafeAreaView}>

    
    {/* memories button */}
    <View style = {styles.buttonContainer}>
    <TouchableOpacity
        style={styles.journalButton}
        onPress={() => setMemoryCreatorModalVisible(true)}>
        <Text style={styles.buttonText}>Add Journal</Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.memoryButton}
        onPress={() => setMemoryCreatorModalVisible(true)}>
        <Text style={styles.buttonText}>Add Memory</Text>
    </TouchableOpacity>
    </View>

    </SafeAreaView>
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


export default HomeScreen