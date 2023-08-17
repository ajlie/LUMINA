//main home screen

//more react things
import React, {useState, useContext, useEffect} from 'react';
import { View, Text, TouchableOpacity, Modal, SafeAreaView, Button } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';

//purposes of creating photos and for the modal
import MemoryCreator from '../MemoryPage/MemoryCreator'; 
import { AppContext } from '../../AppContext';

//styling
import styles from './HomeStyle'
import HomeBackground from './SVG/HomeBackground';
import HomeLumi from './SVG/HomeLumi';
import HomeMoon from './SVG/HomeMoon';
import HomeSetting from './SVG/HomeSetting';
import HomeTimer from './SVG/HomeTimer';


const HomeScreen = () => {
  
  //memories for modal showing
  const [memoryCreatorModalVisible, setMemoryCreatorModalVisible] = useState(false);
  const { memoriesUpdated } = useContext(AppContext); // Use the context

  // const [fontsLoaded, setFontsLoaded] = useState(false);
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

  //navigating back to memories
  const returnMemory = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'AUGUST 2023',
      })
    );

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'AUGUST 2023'}],
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
    <View style = {styles.dateTextContainer}>
      <Text style = {styles.dateText}> August </Text>
    </View>
    <View style = {styles.dateNumContainer}>
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
        onPress={returnMemory}>
        <Text style={styles.buttonTextMemory}> See Memories </Text>
    </TouchableOpacity>
    </View>
    </SafeAreaView>

    {/* external modal for the memories */}
        <Modal animationType="slide" transparent={true} visible={memoryCreatorModalVisible} onRequestClose={() => setMemoryCreatorModalVisible(false)}>
          <View style={styles.modal}>
            <MemoryCreator
              onCreate={(newMemory) => {
                memoriesUpdated();
                setMemoryCreatorModalVisible(false);
              }}
            />
            <TouchableOpacity onPress={() => setMemoryCreatorModalVisible(false)} >
              <Text style = {styles.return}> Return </Text>
            </TouchableOpacity>
          </View>
        </Modal>

    
</View>
  )
}


export default HomeScreen