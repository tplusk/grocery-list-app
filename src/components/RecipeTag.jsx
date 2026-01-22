export default function RecipeTag({ recipe, onDelete }) {
  const { Trash } = require("lucide-react");

  return (
    <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm">
      <span className="text-sm text-gray-700">{recipe}</span>
      <button
        onClick={() => onDelete(recipe)}
        className="text-red-500 hover:text-red-700"
      >
        <Trash size={14} />
      </button>
    </div>
  );
}
