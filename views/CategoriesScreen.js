import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import DATA from '../data/dummyData';

export default (CategoriesScreen = (props) => {
	const navigate = props.navigation.navigate;

	const onPressHandler = (id) => {
		navigate({
			routeName: 'CategoryMealsScreen',
			params: {
				categoryId: id
			}
		});
	};

	const renderItemHAndler = (itemData) => {
		return (
			<TouchableOpacity style={styles.touchContainer} onPress={() => onPressHandler(itemData.item.id)}>
				<View style={{ ...styles.container, ...{ backgroundColor: itemData.item.color } }}>
					<Text>{itemData.item.category}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return <FlatList data={DATA} renderItem={renderItemHAndler} style={styles.flatListContainer} numColumns={2} />;
});

CategoriesScreen.navigationOptions = {
	headerTitle: 'Categories'
};

const styles = StyleSheet.create({
	flatListContainer: {
		flex: 1,
		padding: 20
	},
	touchContainer: {
		flex: 1,
		padding: 10
	},
	container: {
		flex: 1,
		padding: 10,
		width: '80%',
		height: 100,
		borderWidth: 1,
		borderRadius: 20,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		fontFamily: 'open-sans',
        shadowColor: "black",
        shadowOpacity: .2,
        shadowOffset: {width: 5, height: 5},
        shadowRadius: 1,
	}
});
