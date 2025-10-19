import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import React from "react";
import NutriMealsApp from "./components/NutriMealsApp";

export default function App() {
  return <NutriMealsApp />;
}

export default function NutriMealsApp() {
  const [mealData, setMealData] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateMeals = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate-meals", { method: "GET" });
      if (!res.ok) throw new Error("Failed to fetch meals");
      const data = await res.json();
      setMealData(data);
    } catch (err) {
      console.error(err);
      alert("Error generating meal ideas.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white flex flex-col items-center justify-center p-6">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-green-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        NutriMeals
      </motion.h1>

      <motion.h2
        className="text-lg md:text-xl text-gray-700 text-center max-w-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Your Personalized Meal Prep Website
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 max-w-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        We know how difficult it can be to find time to plan and make meals. That’s why we do it for you.
        We’ll generate a list of quick and healthy meal ideas based on your daily needs.
      </motion.p>

      <Button
        onClick={generateMeals}
        disabled={loading}
        className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-full shadow-lg"
      >
        {loading ? "Generating..." : "Generate Meal Ideas"}
      </Button>

      {mealData && (
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-10 w-full max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="text-center">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Calories</h3>
              <p className="text-gray-600 text-lg">{mealData.calories || "-"}</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Vitamin</h3>
              <p className="text-gray-600 text-lg">{mealData.vitamins || "-"}</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Protein</h3>
              <p className="text-gray-600 text-lg">{mealData.protein || "-"}</p>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {mealData?.meals && (
        <motion.div
          className="mt-10 w-full max-w-3xl bg-white rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-bold text-green-800 mb-4 text-center">Your Meal Ideas</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {mealData.meals.map((meal, index) => (
              <li key={index}>{meal}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}