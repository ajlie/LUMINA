import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {View, Button } from 'react-native'

const JournalCategories = () => {
  
    
  const CasualPrompt = () => {

  }

  return (
    <SafeAreaView>
        <View>
            <Button onPress={CasualPrompt}> Casual </Button>
            <Button> Gratitude </Button>
            <Button> Negativity </Button>
            <Button> Productivity </Button>
            <Button> Reflection </Button>
        </View>
    </SafeAreaView>
  )
}

export default JournalCategories