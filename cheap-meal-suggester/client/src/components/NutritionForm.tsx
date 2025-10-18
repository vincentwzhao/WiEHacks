import React, { useState } from 'react';

const NutritionForm: React.FC<{ onSubmit: (nutritionFacts: { protein: number; carbs: number; fats: number }) => void }> = ({ onSubmit }) => {
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fats, setFats] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const proteinValue = parseFloat(protein);
        const carbsValue = parseFloat(carbs);
        const fatsValue = parseFloat(fats);

        if (isNaN(proteinValue) || isNaN(carbsValue) || isNaN(fatsValue)) {
            setError('Please enter valid numbers for all fields.');
            return;
        }

        setError('');
        onSubmit({ protein: proteinValue, carbs: carbsValue, fats: fatsValue });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Protein (g):
                    <input type="number" value={protein} onChange={(e) => setProtein(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Carbs (g):
                    <input type="number" value={carbs} onChange={(e) => setCarbs(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Fats (g):
                    <input type="number" value={fats} onChange={(e) => setFats(e.target.value)} />
                </label>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Suggest Meal</button>
        </form>
    );
};

export default NutritionForm;