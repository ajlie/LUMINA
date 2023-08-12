import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import "react-native-url-polyfill/auto";
import AppNavigation from './AppNavigation';
import { AppContext } from './AppContext';

export default function App() {
    const [updateTrigger, setUpdateTrigger] = useState(false);

    return (
        <AppContext.Provider value={{
            memoriesUpdated: () => setUpdateTrigger(!updateTrigger),
            triggerUpdate: updateTrigger
        }}>
            <NavigationContainer>
                <AppNavigation />
            </NavigationContainer>
        </AppContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
