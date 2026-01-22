import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function RecipeManager() {
  const [newRecipe, setNewRecipe] = useState("");
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  const handleAddRecipe = () => {
    if (newRecipe.trim() && !recipes.includes(newRecipe.trim())) {
      onAddRecipe(newRecipe.trim());
      setNewRecipe("");
      setShowAddRecipe(false);
    }
  };

  return (
    <div className="mb-6 p-4 bg-indigo-50 rounded-lg">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-700">Recipes</h2>
        <button
          onClick={() => setShowAddRecipe(!showAddRecipe)}
          className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-sm"
        >
          {showAddRecipe ? "Cancel" : "Add Recipe"}
        </button>
      </div>

      {showAddRecipe && (
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={newRecipe}
            onChange={(e) => setNewRecipe(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAddRecipe()}
            placeholder="Recipe name ..."
            className="flex-1 px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleAddRecipe}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </div>
      )}
      <RecipeList recipes={recipes} onDeleteRecipe={onDeleteRecipe} />
    </div>
  );
}
