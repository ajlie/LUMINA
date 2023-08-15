import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20, // Adjust the padding as needed
      },
      modalView: {
        flex: 1,
        marginHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingTop: 30,
        backgroundColor: '#39386F',
      },
    background: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
    },
    icon: {
      zIndex: 0,
      position: 'absolute',
      right: 0,
      left: -30,
    },
    moon: {
      zIndex: 0,
      position: 'absolute',
      left: 133,
      top: 90,

    },
    timer: {
      zIndex: 0,
      position: 'absolute',
      left: 40,
      top: 70,

    },
    setting: {
      zIndex: 0,
      position: 'absolute',
      right: 40,
      top: 70,

    },
    date: {
      zIndex: 0,
      position: 'absolute',
      left: 148,
      top: 120,
      textAlign: 'center',
    },
    dateText: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    dateNum: {
      fontSize: 60,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    SafeAreaView: {
      flex: 1,
      zIndex: 1 ,
      justifyContent: 'center',
      alignItems: 'center'
    },
    memoryButton: {
      backgroundColor: 'transparent', // Set the background color to transparent
      borderColor: '#FFEE92', // Set the border color to yellow
      borderWidth: 2, // Set the border width
      paddingHorizontal: 20,
      paddingVertical: 10,
      width: 210,
      justifyContent: 'center',
      borderRadius: 20,
      borderWidth: 4,
      marginBottom: 20,
    
    },
    journalButton: {
      backgroundColor: '#FFEE92', // Set the background color to transparent
      borderColor: '#FFEE92', // Set the border color to yellow
      borderWidth: 2, // Set the border width
      paddingHorizontal: 20,
      paddingVertical: 10,
      width: 210,
      justifyContent: 'center',
      borderRadius: 20,
      borderWidth: 4,
      marginBottom: 20,
    },
    buttonTextJournal: {
      color: 'black',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '500',
    },
    buttonTextMemory: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '500',
    },
    buttonContainer: {
      flex:1,
      top: 270,
    }

});

export default styles;