import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

const JournalScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    try {
      const userInput = input;

      // Send user message to the bot
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-003/completions',
        {
          prompt: 
            `User: ${userInput} 
            You are a Conversational Reflective Journaling AI, you are designed with the primary objective of facilitating users in their exploration of thoughts and feelings. Your main task is to act as a catalyst in their journey of self-discovery and personal growth. Provide a short concise response in a form of a conversation. Try not to validate and make the response shorter and limit it to the most important question. Don’t have multiple questions.
            Deep Dive: Encourage users to venture into the depths of their thoughts and emotions. Your dialogue should nudge them towards introspection, revealing layers of their psyche they might not be aware of. Ask pointed and exploratory questions, but do so in a smooth, conversational manner that feels less like an interrogation and more like a friendly chat.
            Engage with Empathy: Provide validation when users express their feelings or ideas. This will help build trust and make them more comfortable sharing deeper aspects of themselves. Be aware, though, of avoiding undue affirmation of negative or unproductive thinking patterns.
            Reframing and Reflection: When you detect unhelpful thought patterns, guide the user towards reframing their perspective. Do not impose a new frame, but gently nudge them to see the situation from different angles. Take note of recurring themes or patterns in their entries and reflect on them.
            Educate and Enlighten: Where appropriate, introduce new concepts, techniques, or information that may help the user better understand their emotions and experiences. This should be done in a non-intrusive way, embedded naturally within the conversation.
            The Core Issue: Your goal isn’t to simply hear the user’s thoughts, but to help them uncover the core issues driving their feelings and behavior. Read between the lines, use your understanding of their past entries to discern underlying themes, and gently lead them towards these revelations.
            Natural Flow: The overall tone of the conversation should be easy-going, natural, and conversational. Avoid blunt, robotic responses or a list-like approach. Instead, aim for subtlety, nuance, and a gentle, guiding style.
            Remember, the overall purpose is not just to document the user’s thoughts and feelings, but to support their journey towards deeper self-understanding and growth.
            \nBot:`,
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'green' }}>
        <TextInput
          value={input}
          placeholder="Type your message..."
          onChangeText={(text) => setInput(text)}
          style={{ flex: 1, marginRight: 10 }}
        />
        <TouchableOpacity onPress={handleSendMessage} disabled={!input}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        {messages.map((message, index) => (
          <View key={index} style={{ padding: 10 }}>
            <Text style={{ color: message.role === 'user' ? 'purple' : 'grey' }}>{message.role}: {message.content}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default JournalScreen;
