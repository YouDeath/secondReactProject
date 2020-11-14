import React from 'react';
import LIGHT_THEME from "../theme/light"
import DARK_THEME from "../theme/dark"
const ThemeContext = React.createContext({ theme: '', themeColors: {}, toggleTheme: () => { } });

class ThemeProvider extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			theme: "light"
		}
	}
	render() {

		return (

			<ThemeContext.Provider
				value={{
					theme: this.state.theme,
					toggleTheme: this.toggleTheme.bind(this),
					isLight: this.state.theme === 'light',
					isDark: this.state.theme === 'dark',
					themeColors: this.state.theme === 'light' ? LIGHT_THEME : DARK_THEME
				}}
			>
				{this.props.children}
			</ThemeContext.Provider>
		)
	}

	toggleTheme() {
		this.setState({ theme: this.state.theme === 'light' ? "dark" : "light" })
	}
}

export { ThemeProvider, ThemeContext }
