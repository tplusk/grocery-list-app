import GroceryItem from "./GroceryItem";
import { Tag } from "lucide-react";

export default function RecipeGroup({ recipeName, items, onDeleteItem }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-2">
        <h3 className="font-semibold flex items-center gap-2">
          <Tag size={18} />
          {recipeName}
        </h3>
      </div>
      <div className="divide-y divide-gray-200">
        {items.map((item) => (
          <GroceryItem key={item.id} item={item} onDelete={onDeleteItem} />
        ))}
      </div>
    </div>
  );
}
