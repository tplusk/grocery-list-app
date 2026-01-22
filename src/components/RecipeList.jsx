import RecipeTag from "./RecipeTag";

export default function RecipeList({ recipes, onDeleteRecipe }) {
  if (recipes.length === 0) {
    return <p className="text-sm text-gray-500">No recipes added yet</p>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {recipes.map((recipe) => (
        <RecipeTag key={recipe} recipe={recipe} onDelete={onDeleteRecipe} />
      ))}
    </div>
  );
}
