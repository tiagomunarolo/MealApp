import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../views/CategoriesScreen';
import CategoryMealsScreen from '../views/CategoryMealsScreen';
import FavoritesScreen from '../views/FavoritesScreen';
import FilterScreen from '../views/FilterScreen';
import MealDetailScreen from '../views/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    CategoriesScreen,
    CategoryMealsScreen,
    FavoritesScreen,
    FilterScreen,
    MealDetailScreen,
});

export default createAppContainer(MealsNavigator);