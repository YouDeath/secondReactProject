import React from 'react';
import { Text } from 'react-native'
import { ThemeContext } from '../context/Theme'

class MainText extends React.Component {
    render() {

        const { themeColors } = this.context

        return (
            <Text
                style={{
                    color: themeColors["FONT"],
                    fontSize: 20,
                }}
            >
                {this.props.children}
            </Text>
        )
    }
}
MainText.contextType = ThemeContext

export default MainText