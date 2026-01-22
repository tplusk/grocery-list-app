import { useState } from "react";
import { Plus } from "lucide-react";

export default function AddItemForm({ recipes, onAddItem }) {
  const [newItem, setNewItem] = useState({
    name: "",
    quantity: "",
    unit: "",
    recipe: "",
  });
  const units = [
    "pcs",
    "kg",
    "g",
    "lb",
    "oz",
    "L",
    "mL",
    "cups",
    "tbsp",
    "tsp",
  ];

  const handleAddItem = () => {
    if (newItem.name.trim() && newItem.quantity && newItem.unit) {
      onAddItem({ ...newItem, id: Date.now() });
      setNewItem({ name: "", quantity: "", unit: "", recipe: "" });
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-4">
      <h3 className="font-semibold text-gray-700 mb-3">Add Item</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        <input
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          placeholder="Item name"
          className="px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="number"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
          placeholder="Quantity"
          className="px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <select
          value={newItem.unit}
          onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
          className="px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select unit</option>
          {units.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
        <select
          value={newItem.recipe}
          onChange={(e) => setNewItem({ ...newItem, recipe: e.target.value })}
          className="px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">No recipe</option>
          {recipes.map((recipe) => (
            <option key={recipe} value={recipe}>
              {recipe}
            </option>
          ))}
        </select>
        <button
          onClick={handleAddItem}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition flex items-center justify-center gap-2"
        >
          <Plus size={20} /> Add
        </button>
      </div>
    </div>
  );
}
