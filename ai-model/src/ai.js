import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import AIForum from './aiforum';
import axios from 'axios';

const API_KEY = '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';
const openai = new OpenAIApi(new Configuration({ apiKey: API_KEY }));

const Ai = () => {
  const [journalData, setJournalData] = useState([]);
  const [chatResponse, setChatResponse] = useState('');
  const [userInput, setUserInput] = useState('');

  // const getChatResponse = async (userInfo) => {
  //   try {
  //     const messages = [
  //       { role: 'system', content: `You are a friendly human who gives tips in short sentences, at the end ask a question to further find out what happened in user day, dont give tips in a list knowing ${userInfo}` },
  //       { role: 'user', content: userInput },
  //     ];

  //     const response = await openai.createChatCompletion({
  //       model: 'gpt-3.5-turbo',
  //       messages: messages,
  //     });

  //     const chatbotResponse = response.data.choices[0].message.content;
  //     setChatResponse(chatbotResponse);
  //   } catch (error) {
  //     console.error('Error fetching chatbot response:', error);
  //   }
  // };


  const getChatResponse = async () => {
    try {
      const messages = [
        { role: 'system', content: 'You are a friendly human who gives tips in short sentences, at the end ask a question to further find out what happened in user day, dont give tips in a list' },
        { role: 'user', content: userInput },
      ];

      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: messages,
      });

      const chatbotResponse = response.data.choices[0].message.content;
      setChatResponse(chatbotResponse);
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
    }
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleEndSession = () => {
    getChatResponse();
    setJournalData([...journalData, {chatResponse}]);
  }

  const handleSendMessage = () => {
    // Call the API when the user clicks send
    getChatResponse();
    setUserInput('');
    setJournalData([...journalData, {userInput, chatResponse}]);
  };

  const handleSaveToDatabase = () => {
    const dataToSave = { journalData };
    axios.post('http://localhost:5000/save', dataToSave)
      .then((response) => {
        console.log('Data saved successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  return (
    <div>
      {journalData.map((journalData, index) => (
        <AIForum key = {index} form = {journalData}/>
       ))}
      <div className="chat-container">
        {chatResponse && (
          <div className="message chatbot">{chatResponse}</div>
        )}
        <div className="message user">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="What's on your mind?..."
          />
          <button onClick={handleSendMessage}>Send</button>
          <button onClick = {handleEndSession}> END </button>
          <button onClick = {handleSaveToDatabase}> SAVE </button>
        </div>
      </div>
    </div>
  );
};

export default Ai;

