//main home screen

//more react things
import React, {useState, useContext} from 'react';
import { View, Text, TouchableOpacity, Modal, SafeAreaView, Button } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';

//purposes of creating photos and for the modal
import MemoryCreator from '../MemoryPage/MemoryCreator'; 
import { AppContext } from '../../AppContext';

//styling
import styles from './HomeStyle'
import HomeBackground from './HomeBackground';
import HomeLumi from './HomeLumi';
import HomeMoon from './HomeMoon';
import HomeSetting from './HomeSetting';
import HomeTimer from './HomeTimer';



const HomeScreen = () => {
  //memories for modal showing
  const [memoryCreatorModalVisible, setMemoryCreatorModalVisible] = useState(false);
  const { memoriesUpdated } = useContext(AppContext); // Use the context

  //navigation to journal page 
  const navigation = useNavigation(); 

  //navigating back to journal
  const returnJournal = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Journal',
      })
    );

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Journal'}],
      })
    );
  }


  return (
  <View style = {{flex: 1}}>
    {/* all for the background || does not actually work, should fix in the future */}
    <HomeBackground style={styles.background}/>
    <HomeLumi style = {styles.icon}/>
    <HomeTimer style = {styles.timer}/>
    <HomeSetting style = {styles.setting}/>
    <HomeMoon style = {styles.moon}/>
    <View style = {styles.date}>
      <Text style = {styles.dateText}> August </Text>
      <Text style = {styles.dateNum}> 15 </Text>
    </View>

    {/* actual content of the page */}
    <SafeAreaView style = {styles.SafeAreaView}>

    
    {/* journal button */}
    <View style = {styles.buttonContainer}>
    <TouchableOpacity
        style={styles.journalButton} 
        onPress={returnJournal}>
        <Text style={styles.buttonTextJournal}>Add Journal</Text>
    </TouchableOpacity>

    {/* memory button */}
    <TouchableOpacity
        style={styles.memoryButton}
        onPress={() => setMemoryCreatorModalVisible(true)}>
        <Text style={styles.buttonTextMemory}>Add Memory</Text>
    </TouchableOpacity>
    </View>
    </SafeAreaView>

    {/* external modal for the memories */}
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