import React from 'react';
import { View } from 'react-native'
import { ThemeContext } from '../context/Theme'

class MainView extends React.Component {
    render() {

        const { themeColors } = this.context

        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: themeColors["MAIN_BG"],
                    color: themeColors["FONT"],
                }}
            >
                {this.props.children}
            </View>
        )
    }
}
MainView.contextType = ThemeContext

export default MainView