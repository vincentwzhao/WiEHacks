import { useState, useEffect } from 'react';
import { Recipe, NutritionFacts } from '../types';

const useSuggestions = (nutritionFacts: NutritionFacts) => {
    const [suggestions, setSuggestions] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSuggestions = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('/api/suggest', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(nutritionFacts),
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch suggestions');
                }
                const data = await response.json();
                setSuggestions(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (nutritionFacts) {
            fetchSuggestions();
        }
    }, [nutritionFacts]);

    return { suggestions, loading, error };
};

export default useSuggestions;