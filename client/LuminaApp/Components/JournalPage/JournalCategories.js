import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Button } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';

const JournalCategories = () => {
  const navigation = useNavigation(); 
  const [keyWord, setKeyWord] = useState('');

  const changeKeyWord = (keyWord) => {
    setKeyWord(keyWord);
    console.log(keyWord);
    
    navigation.dispatch(
      CommonActions.navigate({
        name: 'JournalScreen',
        params: { keyWord: keyWord },
      })
    );

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'JournalScreen', params: { keyWord: keyWord } }],
      })
    );
    
  };

  return (
    <SafeAreaView>
      <View>
        <Button onPress={() => changeKeyWord('casual')} title="Casual" />
        <Button onPress={() => changeKeyWord('gratitude')} title="Gratitude" />
        <Button onPress={() => changeKeyWord('negativity')} title="Negativity" />
        <Button onPress={() => changeKeyWord('productivity')} title="Productivity" />
        <Button onPress={() => changeKeyWord('reflection')} title="Reflection" />
      </View>
    </SafeAreaView>
  );
};

export default JournalCategories;
