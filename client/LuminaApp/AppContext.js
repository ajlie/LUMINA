import React from 'react';

// Create a context with a default value of empty functions
export const AppContext = React.createContext({
    memoriesUpdated: () => {},
    triggerUpdate: () => {}
});