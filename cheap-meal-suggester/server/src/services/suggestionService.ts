import { Recipe } from '../types';
import recipes from '../data/recipes.json';

export const getSuggestions = (nutritionFacts: { [key: string]: number }): Recipe[] => {
    const { maxCost, maxCalories } = nutritionFacts;

    return recipes.filter(recipe => {
        const totalCost = recipe.ingredients.reduce((sum, ingredient) => sum + ingredient.cost, 0);
        const totalCalories = recipe.nutrition.calories;

        return totalCost <= maxCost && totalCalories <= maxCalories;
    });
};