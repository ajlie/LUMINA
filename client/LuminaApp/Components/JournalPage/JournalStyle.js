import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    messagesContainer: {
        flex: 1,                 // Adjusted flex value
        paddingHorizontal: 10,
        paddingTop: 15,
        maxHeight: '52%',        // Set the max height to 50% of the screen
    },
    message: {
        paddingVertical: 8,
    },
    userMessage: {
        color: 'purple',
    },
    botMessage: {
        color: 'grey',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'green',
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
});

export default styles;