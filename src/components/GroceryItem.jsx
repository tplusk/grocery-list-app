import { Trash2 } from "lucide-react";

export default function GroceryItem({ item, onDelete }) {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-gray-50 transition">
      <div className="flex-1">
        <span className="font-medium text-gray-800">{item.name}</span>
        <span className="text-gray-600 ml-3">
          {item.quantity}
          {item.unit}
        </span>
      </div>
      <button
        onClick={() => onDelete(item.id)}
        className="text-red-500 hover:text-red-700 transition"
      >
        <Trash2 size={18} />{" "}
      </button>
    </div>
  );
}
