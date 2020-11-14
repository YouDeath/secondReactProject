import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import ThemeSwitch from './src/switch/ThemeSwitch'
import { ThemeProvider } from './src/context/Theme'
import MainView from './src/views/Main'
import MainText from './src/text/MainText'

class App extends React.Component {

    render() {
        return (
            <ThemeProvider>
                <MainView>
                    <MainText>Добро пожаловать,</MainText>
                    <MainText>Поменять тему можно снизу!</MainText>
                    <ThemeSwitch />
                </MainView>
            </ThemeProvider>
        )
    }
}


export default App;
