export interface NutritionFacts {
    calories: number;
    protein: number; // in grams
    fat: number; // in grams
    carbohydrates: number; // in grams
    fiber: number; // in grams
    sugar: number; // in grams
}

export interface Recipe {
    id: string;
    title: string;
    ingredients: string[];
    instructions: string;
    nutrition: NutritionFacts;
    cost: number; // estimated cost in USD
}