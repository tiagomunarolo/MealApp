import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './react-navigation/MealsNavigator';

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
		'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf')
	});
};

export default function App() {
	const [ fontLoaded, setFontLoaded ] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
				onError={() => console.log('Failed to load Fonts')}
			/>
		);
	}

	return (
		<MealsNavigator/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
