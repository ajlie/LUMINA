import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22234B',
    },
    messagesContainer: {
        flex: 1,                 // Adjusted flex value
        paddingHorizontal: 10,
        paddingTop: 15,
        maxHeight: '52%',        // Set the max height to 50% of the screen
    },
    message: {
        paddingVertical: 8,
        borderRadius:20,
        marginLeft: 15,
        marginRight: 30,
        marginBottom: 15,
    },
    userMessage: {
        color: 'black',
        borderRadius: 20,
        fontSize: 18,
        marginLeft: 15,
    },
    botMessage: {
        color: 'white',
        fontSize: 18,
        marginRight: 10,
        
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'gray',
    },
    input: {
        flex: 1,
        marginRight: 10,
    },
    modal: {
        flex: 1,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
    },
    topBar: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row', 
    },
    textFiller: {
        color: 'white',
    },
    categories: {
        backgroundColor: '#1F1E33',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
    },
    buttonContainer: {
        top: 200,
        flex: 1,
        textAlign: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 10,
        
    },
    startMessage: {
        color: 'white',
        fontSize: 18,
        marginBottom: 20,
        
    },
});

export default styles;