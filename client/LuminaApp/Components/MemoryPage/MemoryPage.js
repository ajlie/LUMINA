// memory page for uploads of pictures || chaotic but it works really well, should clean up in the future

import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Button, Text, Image, FlatList, ScrollView, Dimensions  } from 'react-native';
import { TouchableOpacity, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import MemoryCreator from './MemoryCreator';
import { AppContext } from '../../AppContext';
import MemoryBackground from './MemoryBackground'
import BackArrow from './ModalBackArrow';
import FrontArrow from './ModalFrontArrow'

const IMAGE_FOLDER = `${FileSystem.documentDirectory}photos/`;

const MemoryPage = () => {
  const [photos, setPhotos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [memoryCreatorModalVisible, setMemoryCreatorModalVisible] = useState(false);
  const { memoriesUpdated } = useContext(AppContext);

  //gets images
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
  
  //randomizes the size of the photos
  const randomSize = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

  //how many photos in each horizontal scroll
  const groupedPhotos = chunkArray(photos, 6);

  //deletes any images
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
        }]);
      } catch (error) {
        console.log("Error copying file:", error);
      }
    }
  };

  
  return (
    <View style={styles.container}>
      <MemoryBackground style = {{position: 'absolute'}}/>
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

    {/* for pop up screen to look at photos */}
    {selectedImageIndex !== null && (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalView}>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 15}}> Close </Text>
        </TouchableOpacity>
        <Image source={{ uri: photos[selectedImageIndex].uri }} style={styles.modalImage} />
        <Text style = {{color: 'white'}}>Photo taken on: {new Date(parseInt(photos[selectedImageIndex].uri.split('/').slice(-1)[0].split('.')[0])).toLocaleString()}</Text>
        <View style={styles.navigationButtons}>
          <TouchableOpacity             
            onPress={() => setSelectedImageIndex((selectedImageIndex - 1 + photos.length) % photos.length)}
            disabled={selectedImageIndex === 0}>
              <BackArrow/>
          </TouchableOpacity>
          <TouchableOpacity             
            onPress={() => setSelectedImageIndex((selectedImageIndex + 1) % photos.length)}
            disabled={selectedImageIndex === photos.length - 1}>
              <FrontArrow/>
          </TouchableOpacity>
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

{/* horizontal scrolls */}
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
  scrollContainer: {
    flex: 1,
  },
  
  horizontalImageContainer: {
    width: Dimensions.get('window').width,
    alignItems: 'center',  // Centers the images horizontally inside the container
    justifyContent: 'center',  // Centers the images vertically inside the container
    marginBottom: 0,  // Some space after each horizontal container for better separation
    paddingTop: 90,
    height: 400,
  },
  
  image: {
    margin: 10,
    resizeMode: 'cover',
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  deleteButtonInModal: {
    marginTop: 20,
    backgroundColor: '#FF7171',
    padding: 10,
    borderRadius: 15,
  },
  deleteButtonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500'
  },
  modalContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalView: {
    flex: 1,
    backgroundColor: '#3B3E84',
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