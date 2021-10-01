import React from 'react';
import { View, Text, Button } from 'react-native';
import DATA from '../data/dummyData';

export default (CategoryMealsScreen = (props) => {
	return (
		<View>
			<Text>Category Meals</Text>
			<Button
				title="Go to details"
				onPress={() => {
					props.navigation.navigate({ routeName: 'MealDetailScreen' });
				}}
			/>
		</View>
	);
});

CategoryMealsScreen.navigationOptions = (data) => {
	const id = data.navigation.getParam('categoryId');

	const filteredData = DATA.find((item) => item.id === id);
	return {headerTitle: filteredData.category};

}