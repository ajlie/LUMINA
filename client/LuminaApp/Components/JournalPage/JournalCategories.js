//journal categories page, when redirected to journal always this page

import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//styles 
import styles from './JournalStyle';
import JournalHomeButton from './SVG/JournalHomeButton'

const JournalCategories = () => {
  const navigation = useNavigation(); 

  //important for the passing to the AI prompt 
  const [keyWord, setKeyWord] = useState('');

  const returnHome = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Navigate',
      })
    );

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Navigate'}],
      })
    );
  }

  //in order to change keyword color
  const [keyWordColors, setKeyWordColors] = useState({
    casual: '#FFF6C5',
    gratitude: '#FCC3FF',
    negativity: '#D8B9FF',
    productivity: '#FFC4A7',
    reflection: '#9DC5FF',
  });


  //changes the keyword then passes to journal screen with prop
  const changeKeyWord = (keyWord) => {
    const color = keyWordColors[keyWord];
    setKeyWord(keyWord);
    console.log(keyWord);
    
    navigation.dispatch(
      CommonActions.navigate({
        name: 'JournalScreen',
        params: { keyWord: keyWord, color: color },
      })
    );

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'JournalScreen', params: { keyWord: keyWord, color: color } }],
      })
    );
    
  };

  

  return (
    <View style = {styles.categories}>
    <SafeAreaView>

      {/* for home buttons and save buttons */}
      <View style = {styles.topBar}>
        <TouchableOpacity onPress={() => returnHome()}>
          <JournalHomeButton/>
        </TouchableOpacity>
      </View>
      <View style = {styles.buttonContainer}>
    
      {/* categories text */}
      <Text style = {[styles.title, {fontFamily: 'Reem-Kufi'}]}> What category would you like to journal under? </Text>

      {/* creates buttons for each categories with different colors based off the key made before */}
      {Object.keys(keyWordColors).map((key) => (
          <TouchableOpacity
            key={key}
            onPress={() => changeKeyWord(key)}
            style={{ backgroundColor: keyWordColors[key], padding: 18, marginVertical: 18, borderRadius: 15, width: 160, margin: 10,   }}
          >
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 22, fontFamily: 'Reem-Kufi' }}>{key}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
    </View>
  );
};

export default JournalCategories;
