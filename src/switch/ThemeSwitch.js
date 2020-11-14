import React from 'react';
import { Switch } from 'react-native'
import { ThemeContext } from '../context/Theme'

class ThemeSwitch extends React.Component{
    render() {

        const { toggleTheme, isLight} = this.context

        return (
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isLight ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleTheme}
                value={isLight}
            />    
        )
    }
}
ThemeSwitch.contextType = ThemeContext

export default ThemeSwitch