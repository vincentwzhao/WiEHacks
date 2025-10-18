import React from 'react';
import RecipeCard from './RecipeCard';
import { Recipe } from '../types';

interface SuggestionsListProps {
  recipes: Recipe[];
}

const SuggestionsList: React.FC<SuggestionsListProps> = ({ recipes }) => {
  return (
    <div>
      <h2>Suggested Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes found. Please adjust your nutrition facts.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SuggestionsList;