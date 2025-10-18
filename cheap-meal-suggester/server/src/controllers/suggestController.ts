import { Request, Response } from 'express';
import { getSuggestions } from '../services/suggestionService';

export const suggestMeal = async (req: Request, res: Response) => {
    const nutritionFacts = req.body;

    try {
        const suggestions = await getSuggestions(nutritionFacts);
        res.status(200).json(suggestions);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching suggestions.' });
    }
};