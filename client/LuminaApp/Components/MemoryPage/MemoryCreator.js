//creating picture memory, used across the project not only in memories

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import ImageChoose from './SVG/MemoryChoosePhoto';
import ImageTake from './SVG/MemoryTakePic'

const IMAGE_FOLDER = `${FileSystem.documentDirectory}photos/`;

const MemoryCreator = ({ onCreate }) => {
  //for navigation
  const navigation = useNavigation(); 

  //get the image 
  const [imageUri, setImageUri] = useState(null);

  //allow for preview of the image
  const [imagePreviewUri, setImagePreviewUri] = useState(null);


  //make sure to get user permission 
  useEffect(() => {
    const requestPermissions = async () => {
      const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
      const { status: mediaStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (cameraStatus !== 'granted' || mediaStatus !== 'granted') {
        console.error('Permissions not granted');
      }
    };
  
    requestPermissions();
  }, []);

  //choose the image 
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    //shows the preview of the image 
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
      setImagePreviewUri(result.assets[0].uri); 
    }
  };

  //taking a picture
  const takeImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (status !== 'granted') {
        console.error('Permission denied');
        return;
      }
  
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
  
      if (!result.canceled) {
        const selectedAsset = result.assets[0];
        setImageUri(selectedAsset.uri);
        setImagePreviewUri(result.assets[0].uri); 
      }
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  };


  //makes sure there is a photo before uploading then upload
  const handleCreate = async () => {
    if (!imageUri) {
      alert('All fields are required.');
      return;
    }

    const fileUri = `${IMAGE_FOLDER}${Date.now()}.jpg`;

    try {
      await FileSystem.makeDirectoryAsync(IMAGE_FOLDER, { intermediates: true });

      await FileSystem.copyAsync({
        from: imageUri,
        to: fileUri,
      });
      onCreate({
        uri: fileUri,
      });

      //navigate home
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


    } catch (error) {
      console.log("Error copying file:", error);
    }
  };

  return (

<View style={styles.container}>
  <View style = {styles.buttonContainer}>
  <TouchableOpacity onPress={pickImage} style = {styles.button}>
    <ImageChoose/>
  </TouchableOpacity>
  <TouchableOpacity onPress={takeImage}>
    <ImageTake/>
  </TouchableOpacity>
  </View>

  {imageUri && (
    <View style={styles.imagePreview}>
      {imagePreviewUri && <Image source={{ uri: imagePreviewUri }} style={styles.previewImage} />}
    </View>
  )}

  <TouchableOpacity onPress={handleCreate} style={styles.createButton}>
    <Text style={styles.buttonText}>Create</Text>
  </TouchableOpacity>
</View>

  );
};

//styles || should move to a diff sheet but didnt have enough time
const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    margin: 10,
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  createButton: {
    backgroundColor: '#FFEE92',
    padding: 10,
    borderRadius: 5,
    alignItwems: 'center',
    marginVertical: 8,
    left: 70,
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagePreview: {
    alignItems: 'center',
    marginVertical: 10,

  },
  previewImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,

  },
  button: {
    left: 50,
    paddingRight: 80,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
  }
});

export default MemoryCreator;