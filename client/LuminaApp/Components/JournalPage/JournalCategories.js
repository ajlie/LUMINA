import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Button, Text} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './JournalStyle';
import JournalHomeButton from './JournalHomeButton'

const JournalCategories = () => {
  const navigation = useNavigation(); 
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
      <View style = {styles.topBar}>
        <TouchableOpacity onPress={() => returnHome()}>
          <JournalHomeButton/>
        </TouchableOpacity>
      </View>
      <View style = {styles.buttonContainer}>
    

      <Text style = {styles.title}> WHAT WOULD YOU LIKE TO TALK ABOUT TODAY? </Text>

      {Object.keys(keyWordColors).map((key) => (
          <TouchableOpacity
            key={key}
            onPress={() => changeKeyWord(key)}
            style={{ backgroundColor: keyWordColors[key], padding: 15, marginVertical: 10, borderRadius: 30, width: 160, margin: 5  }}
          >
            <Text style={{ color: 'black', textAlign: 'center', fontSize: 22 }}>{key}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
    </View>
  );
};

export default JournalCategories;
