import { ShoppingCart } from "lucide-react";
import RecipeGroup from "./RecipeGroup";

export default function GroceryList({ items, onDeleteItem }) {
  const groupedItems = items.reduce((acc, item) => {
    const key = item.recipe || "Ungrouped";
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  if (Object.keys(groupedItems).length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <ShoppingCart size={48} className="mx-auto mb-3 opacity-50" />
        <p>Your grocery list is empty. Start adding items!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {Object.entries(groupedItems).map(([recipeName, recipeItems]) => (
        <RecipeGroup
          key={recipeName}
          recipeName={recipeName}
          items={recipeItems}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
}
