import React from 'react';
import NutritionForm from '../components/NutritionForm';
import SuggestionsList from '../components/SuggestionsList';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Cheap Meal Suggester</h1>
            <NutritionForm />
            <SuggestionsList />
        </div>
    );
};

export default Home;