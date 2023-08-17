//main journaling screen

import React, { useState, useContext, useRef, useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Modal, Button, ScrollView } from 'react-native';
import axios from 'axios';
import { AppContext } from '../../AppContext';
import { useNavigation, CommonActions } from '@react-navigation/native';

//for memories 
import MemoryCreator from '../MemoryPage/MemoryCreator'; 

//styles 
import styles from './JournalStyle';
import JournalHomeButton from './SVG/JournalHomeButton'
import JournalSubmit from './SVG/JournalSubmit'

const JournalScreen = ({route}) => {
  //navigation to home page 
  const navigation = useNavigation(); 

  //for memories overlay
  const [memoryCreatorModalVisible, setMemoryCreatorModalVisible] = useState(false);
  const { memoriesUpdated } = useContext(AppContext); // Use the context

  //gets the keyword from the journal categories page
  const { keyWord, color } = route.params; 
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  //for keyboard opening 
  const textInputRef = useRef(null);

  //for focusing on text input
  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  //for enter key to make a new line rather than closing keyboard 
  const handleReturnKeyPress = () => {
    setInput(input + "\n");
  };


  //for ai journalling, pass keyword and user input 
  const handleSendMessage = async () => {
    try {
      const userInput = input;

      // Send user message to the bot
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-003/completions',
        {
          prompt: 
            `User: ${userInput} 
            you are a to give prompts in a conversational journal AI knowing the user is talking around the topic something around ${keyWord}. Your main task is to sound more like a neutral friend who listens and slightly validates the user’s feelings and ask one question to the user to deep dive into the root causes of their feelings. Avoid using the word I understand as a way to validate the user. Make sure your response fits in max token response. Try not to ask repeated questions mentioned in other responses. If user mentions words like 'depressed' or 'suicidal' tell user to find medical/emotional help. When user mentions something to indicate wanting to end the conversation, sumarize all the reponsises in two sentences.
            Bot:`,
          max_tokens: 50,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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',
          },
        }
      );

      const botResponse = response.data.choices[0].text;

      // Update messages with both user and bot responses
      const userMessage = { role: 'user', content: userInput };
      const botMessage = { role: 'firefly', content: botResponse };
      setMessages([...messages, userMessage, botMessage]);

    } catch (error) {
      console.error(error);
    }
    setInput('');
  };


  //navigation for home 
  const returnHome = () => {
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
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* top buttons */}
      <View style = {styles.topBar}>
        <TouchableOpacity onPress={() => returnHome()}>
            <JournalHomeButton/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setMemoryCreatorModalVisible(true)} style = {[styles.sendButton, {fontFamily: 'Reem-Kufi'}]}>
            <Text style = {[styles.sendButtonText, {fontFamily: 'Reem-Kufi'}]}> Send </Text>
        </TouchableOpacity>
      </View>

      {/* for listing of the messages */}
      <ScrollView style={styles.messagesContainer}>
        <Text style = {[styles.startMessage, {fontFamily: 'Reem-Kufi'}]}> What is on your mind? </Text>
      {messages.map((message, index) => (
        <View
          key={index}
          style={[
            styles.message,
            message.role === 'user' && { backgroundColor: color},
          ]}
        >
          <Text style={message.role === 'user' ? styles.userMessage : styles.botMessage}>
          {message.content.startsWith('user:') ? message.content.replace(/^user:/, '') : message.content.startsWith('firefly:') ? message.content.replace(/^firefly:/, '') : message.content}
          </Text>
          </View>
      ))}
      </ScrollView>

      {/* input bar for typing, allows to make rows as well as immediately open keyboard upon entering screen */}
      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          ref={textInputRef}
          placeholder="Type Away"
          onChangeText={(text) => setInput(text)}
          style={styles.input}
          multiline={true}
          numberOfLines={1}
          returnKeyType="default" 
          blurOnSubmit={false} 
          onSubmitEditing={handleSendMessage} 
          onKeyPress={(event) => {
            if (event.nativeEvent.key === 'Enter') {
              handleReturnKeyPress(); 
            }
          }}
        />
        {/* submit button for sending message */}
        <TouchableOpacity onPress={handleSendMessage} disabled={!input}>
          <JournalSubmit/>
        </TouchableOpacity>
        
        {/* overlay of the save function opens to the pictures */}
        <Modal animationType="slide" transparent={true} visible={memoryCreatorModalVisible} onRequestClose={() => setMemoryCreatorModalVisible(false)}>
          <View style={styles.modal}>
            <MemoryCreator
              onCreate={(newMemory) => {
                memoriesUpdated();
                setMemoryCreatorModalVisible(false);
              }}
            />
            <TouchableOpacity onPress={() => setMemoryCreatorModalVisible(false)} >
              <Text style = {styles.return}> Return </Text>
            </TouchableOpacity>
          </View>
        </Modal>

      </View>
    </SafeAreaView>
  );
};

export default JournalScreen;
