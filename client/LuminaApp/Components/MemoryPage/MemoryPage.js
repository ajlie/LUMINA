import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Button, Text, Image, FlatList, ScrollView, Dimensions  } from 'react-native';
import { TouchableOpacity, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import MemoryCreator from './MemoryCreator';
import { AppContext } from '../../AppContext';


const IMAGE_FOLDER = `${FileSystem.documentDirectory}photos/`;

const MemoryPage = () => {
  const [photos, setPhotos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [memoryCreatorModalVisible, setMemoryCreatorModalVisible] = useState(false);
  const { memoriesUpdated } = useContext(AppContext);


  const loadPhotos = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }

    await FileSystem.makeDirectoryAsync(IMAGE_FOLDER, { intermediates: true });

    try {
      const files = await FileSystem.readDirectoryAsync(IMAGE_FOLDER);
      setPhotos(files.map(file => ({
        uri: `${IMAGE_FOLDER}${file}`,
        title: "Sample Title", // Placeholder, should be dynamic
        name: "Sample Name",  // Placeholder, should be dynamic
        text: "Sample Description"  // Placeholder, should be dynamic
      })));
    } catch (error) {
      console.log('Error reading directory:', error);
    }
  };

  useEffect(() => {
    loadPhotos();
  }, [memoriesUpdated]); 
 
  
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }

      await FileSystem.makeDirectoryAsync(IMAGE_FOLDER, { intermediates: true });

      try {
        const files = await FileSystem.readDirectoryAsync(IMAGE_FOLDER);
        setPhotos(files.map(file => ({
          uri: `${IMAGE_FOLDER}${file}`,
          title: "Sample Title", // Placeholder, should be dynamic
          name: "Sample Name",  // Placeholder, should be dynamic
          text: "Sample Description"  // Placeholder, should be dynamic
        })));
      } catch (error) {
        console.log('Error reading directory:', error);
      }
    })();
  }, []);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    let copied = [...array]; 
    const numOfChild = Math.ceil(copied.length / size); 
    for (let i = 0; i < numOfChild; i++) {
      chunkedArr.push(copied.splice(0, size));
    }
    return chunkedArr;
  }
  
  const randomSize = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

  const groupedPhotos = chunkArray(photos, 4);

  const deleteImage = async (uri) => {
    try {
      await FileSystem.deleteAsync(uri);
      setPhotos(prevPhotos => {
        const newPhotos = prevPhotos.filter(photo => photo.uri !== uri);
        if (selectedImageIndex >= newPhotos.length) {
          setSelectedImageIndex(null);
        }
        return newPhotos;
      });
    } catch (error) {
      console.error("Error deleting the image:", error);
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const sourceUri = result.assets[0].uri;
      const fileUri = `${IMAGE_FOLDER}${Date.now()}.jpg`;

      try {
        await FileSystem.makeDirectoryAsync(IMAGE_FOLDER, { intermediates: true });

        await FileSystem.copyAsync({
          from: sourceUri,
          to: fileUri,
        });
        setPhotos(prevPhotos => [...prevPhotos, {
          uri: fileUri,
          title: "New Photo Title", 
          name: "User's Name",   
          text: "New Photo Description"  
        }]);
      } catch (error) {
        console.log("Error copying file:", error);
      }
    }
  };

  
  return (
    <View style={styles.container}>
      <Button title="Add Memory" onPress={() => setMemoryCreatorModalVisible(true)} />
      <Text>Memory Page Connection</Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={memoryCreatorModalVisible}
        onRequestClose={() => setMemoryCreatorModalVisible(false)}
      >
        <View style={styles.modalView}>
          <MemoryCreator onCreate={(newMemory) => {
            setPhotos(prevPhotos => [...prevPhotos, newMemory]);
            setMemoryCreatorModalVisible(false);
          }} />
          <Button title="Close" onPress={() => setMemoryCreatorModalVisible(false)} />
        </View>
      </Modal>

      {selectedImageIndex !== null && (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalView}>
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <Image source={{ uri: photos[selectedImageIndex].uri }} style={styles.modalImage} />
        <Text>Title: {photos[selectedImageIndex].title}</Text>
        <Text>Name: {photos[selectedImageIndex].name}</Text>
        <Text>Description: {photos[selectedImageIndex].text}</Text>
        <Text>Photo taken on: {new Date(parseInt(photos[selectedImageIndex].uri.split('/').slice(-1)[0].split('.')[0])).toLocaleString()}</Text>
        <View style={styles.navigationButtons}>
          <Button 
            title="Previous" 
            onPress={() => setSelectedImageIndex((selectedImageIndex - 1 + photos.length) % photos.length)}
            disabled={selectedImageIndex === 0}
          />
          <Button 
            title="Next" 
            onPress={() => setSelectedImageIndex((selectedImageIndex + 1) % photos.length)}
            disabled={selectedImageIndex === photos.length - 1}
          />
        </View>
        <TouchableOpacity 
          style={styles.deleteButtonInModal} 
          onPress={() => {
            deleteImage(photos[selectedImageIndex].uri);
            setModalVisible(false);
          }}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )}

<ScrollView style={styles.scrollContainer}>
  {groupedPhotos.map((chunk, index) => (
    <View style={styles.horizontalImageContainer} key={'chunk-' + index}>
      <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
      >
        {chunk.map(photo => {
          const randomWidth = randomSize(200, Dimensions.get('window').width / 1.5); 
          const randomHeight = randomSize(100, Dimensions.get('window').height / 1.5);
          return (
            <TouchableOpacity key={photo.uri} onPress={() => handleImageClick(photos.indexOf(photo))}>
              <Image source={{ uri: photo.uri }} style={{...styles.image, width: randomWidth, height: randomHeight}} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  ))}
</ScrollView>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  },
  horizontalImage: {
    width: 150, // or any size you want
    height: 150, 
    borderRadius: 15, // for rounded corners
    marginHorizontal: 5,
  },scrollContainer: {
    flex: 1,
  },
  
  horizontalImageContainer: {
    width: Dimensions.get('window').width,
    alignItems: 'center',  // Centers the images horizontally inside the container
    justifyContent: 'center',  // Centers the images vertically inside the container
    marginBottom: 0,  // Some space after each horizontal container for better separation
  },
  
  image: {
    margin: 5,
    resizeMode: 'cover',
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  imageContainer: {
    position: 'relative',
    width: '33%',
    height: 100,
  },
  deleteButtonInModal: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 15,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  modalContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 0,
    borderRadius: 10,
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingTop: 0,
  },
  modalImage: {
    width: '80%',
    height: 300,
    marginBottom: 20,
    marginTop: 20,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    width: '80%',
  },
});

export default MemoryPage;
