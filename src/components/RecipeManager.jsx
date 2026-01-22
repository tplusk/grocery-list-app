import React, { useState } from "react";

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

  return <div></div>;
}
