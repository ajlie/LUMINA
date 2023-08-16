//journaling styles 
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22234B',
    },
    messagesContainer: {
        flex: 1,                 
        paddingHorizontal: 10,
        paddingTop: 15,
        maxHeight: '51%',       
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
        padding: 8,
        backgroundColor: '#828283',
        height: 60,
    },
    input: {
        flex: 1,
        marginRight: 10,

    },
    modal: {
        flex: 1,
        backgroundColor: '#22234B',
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
    },
    topBar: {
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row', 
        
    },
    sendButton: {
        backgroundColor: '#FFD850',
        padding: 10,
        borderRadius: 23,
        width: 60,
    },
    sendButtonText: {
        fontSize: 70,
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
        top: 170,
        flex: 1,
        textAlign: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 20,
        
    },
    startMessage: {
        color: 'white',
        fontSize: 18,
        marginBottom: 20,
        
    },
    return: {
        color: 'white',
        fontWeight: '300',
        fontSize: 15,
    }
});

export default styles;