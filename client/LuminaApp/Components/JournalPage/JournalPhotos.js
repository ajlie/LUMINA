import React from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';

const JournalPhotos = () => {
  return (
    <Button title="Add Memory" onPress={() => setMemoryCreatorModalVisible(true)} />
  )
}

export default JournalPhotos