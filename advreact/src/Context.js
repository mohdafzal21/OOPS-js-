import React from 'react';
let themeContext = React.createContext()

const {Provider, Consumer} = themeContext

//the context provides a way to pass data through a component tree without having manually pass props down at every level

export const ThemeProvider = Provider
export const ThemeConsumer = Consumer