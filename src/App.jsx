import React, { useState } from "react";

import "./App.css";
import RecipeManager from "./components/RecipeManager";

function App() {
  const [items, setItems] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const handleDeleteRecipe = (recipeName) => {
    setRecipes(recipes.filter((r) => r !== recipeName));
    setItems(
      items.map((item) =>
        item.recipe === recipeName ? { ...item, recipe: "" } : item,
      ),
    );
  };

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <ShoppingCart className="text-indigo-600" size={32} />
            <h1 className="text-3xl font-bold text-gray-800">Grocery List</h1>
          </div>
          <RecipeManager
            recipes={recipes}
            onAddRecipe={handleAddRecipe}
            onDeleteRecipe={handleDeleteRecipe}
          />

          <GroceryList items={items} onDeleteItem={onDeleteItem} />

          <ItemCounter count={items.length} />
        </div>
      </div>
    </div>
  );
}

export default App;
