import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Button } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';

const JournalCategories = () => {
  const navigation = useNavigation(); 
  const [keyWord, setKeyWord] = useState('');

  //in order to change keyword color
  const [keyWordColors, setKeyWordColors] = useState({
    casual: '#3498db',
    gratitude: '#2ecc71',
    negativity: '#e74c3c',
    productivity: '#f39c12',
    reflection: '#9b59b6',
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
    <SafeAreaView>
      <View>
        <Button onPress={() => changeKeyWord('casual')}  color={keyWordColors['casual']}title="Casual" />
        <Button onPress={() => changeKeyWord('gratitude')}  color={keyWordColors['gratitude']} title="Gratitude" />
        <Button onPress={() => changeKeyWord('negativity')} color={keyWordColors['negativity']}title="Negativity" />
        <Button onPress={() => changeKeyWord('productivity')}  color={keyWordColors['productivity']}title="Productivity" />
        <Button onPress={() => changeKeyWord('reflection')}  color={keyWordColors['reflection']}title="Reflection" />
      </View>
    </SafeAreaView>
  );
};

export default JournalCategories;
