import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';


const IMAGE_FOLDER = `${FileSystem.documentDirectory}photos/`;

const MemoryCreator = ({ onCreate }) => {
  //get the image 
  const [imageUri, setImageUri] = useState(null);

  //allow for preview of the image
  const [imagePreviewUri, setImagePreviewUri] = useState(null);

  //descriptions
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

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


  
  const handleCreate = async () => {
    if (!imageUri || !title || !name || !description) {
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
        title,
        name,
        text: description,
      });

      // Clear the input fields after creation
      setImageUri(null);
      setTitle('');
      setName('');
      setDescription('');
    } catch (error) {
      console.log("Error copying file:", error);
    }
  };

  return (
<View style={styles.container}>
  <Button title="Pick an image from camera roll" onPress={pickImage} />
  <Button title = "Take a Photo" onPress={takeImage}/>

  {imageUri && (
    <View style={styles.imagePreview}>
      {imagePreviewUri && <Image source={{ uri: imagePreviewUri }} style={styles.previewImage} />}
    </View>
  )}

  
  <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={styles.input} />
  <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
  <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
  <TouchableOpacity onPress={handleCreate} style={styles.createButton}>
    <Text style={styles.buttonText}>Create Memory</Text>
  </TouchableOpacity>
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    margin: 10,
  },
  input: {
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  createButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
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
});

export default MemoryCreator;