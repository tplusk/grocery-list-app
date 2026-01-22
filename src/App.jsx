import React, { useState } from "react";

import "./App.css";

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

  return <></>;
}

export default App;
