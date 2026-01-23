# Grocery List App

A modern, intuitive grocery list application built with React that helps you organize your shopping items by recipe. Perfect for meal planning and efficient grocery shopping!

## Features

### Recipe Management

- Create and manage multiple recipes
- Organize grocery items by recipe
- Delete recipes (automatically ungroups associated items)

### Smart Item Management

- Add items with quantity and unit measurements
- Support for various units (kg, g, lb, oz, L, mL, cups, tbsp, tsp, pcs)
- Associate items with specific recipes or leave ungrouped
- Delete individual items with one click

### Organized Display

- Items grouped by recipe for easy shopping
- Visual distinction between different recipe groups
- Item counter showing total items in your list
- Empty state guidance when list is empty

### Modern UI/UX

- Clean, responsive design
- Gradient backgrounds and smooth transitions
- Hover effects for better interactivity
- Mobile-friendly interface

---

## Technology Stack

| Technology            | Purpose              |
| --------------------- | -------------------- |
| **React 18.x**        | Frontend Framework   |
| **Tailwind CSS**      | Styling              |
| **Lucide React**      | Icons                |
| **Vite**              | Build Tool           |
| **JavaScript (ES6+)** | Programming Language |

---

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Setup Instructions

**Clone the repository:**

```bash
git clone https://github.com/yourusername/grocery-list-app.git
cd grocery-list-app
```

**Install dependencies:**

```bash
npm install
```

**Start the development server:**

```bash
npm run dev
```

**Open your browser and navigate to:**

```
http://localhost:5173
```

---

## Project Structure

```
grocery-list-app/
├── public/
├── src/
│   ├── components/
│   │   ├── AddItemForm.jsx
│   │   ├── GroceryItem.jsx
│   │   ├── GroceryList.jsx
│   │   ├── ItemCounter.jsx
│   │   ├── RecipeGroup.jsx
│   │   ├── RecipeList.jsx
│   │   ├── RecipeManager.jsx
│   │   └── RecipeTag.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Component Architecture

### App.jsx

**The root component that manages the global state for items and recipes.**

**State:**

- `items` - Array of grocery items
- `recipes` - Array of recipe names

**Key Functions:**

- `handleAddRecipe(recipe)` - Adds a new recipe
- `handleDeleteRecipe(recipeName)` - Deletes a recipe and ungroups its items
- `handleAddItem(item)` - Adds a new item to the list
- `handleDeleteItem(id)` - Removes an item from the list

---

### RecipeManager.jsx

**Handles recipe creation and management.**

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `recipes` | Array | Array of existing recipes |
| `onAddRecipe` | Function | Callback to add a recipe |
| `onDeleteRecipe` | Function | Callback to delete a recipe |

---

### AddItemForm.jsx

**Form component for adding new grocery items.**

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `recipes` | Array | Available recipes for dropdown |
| `onAddItem` | Function | Callback to add item |

**Form Fields:**

- **Item name** (text) - What you need to buy
- **Quantity** (number) - How much you need
- **Unit** (select) - Measurement unit
- **Recipe** (select, optional) - Associated recipe

---

### GroceryList.jsx

**Displays items grouped by recipe.**

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `items` | Array | Array of grocery items |
| `onDeleteItem` | Function | Callback to delete an item |

**Features:**

- Groups items by recipe
- Shows "Ungrouped" for items without a recipe
- Displays empty state when no items exist

---

### RecipeGroup.jsx

**Visual container for items belonging to a specific recipe.**

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `recipeName` | String | Name of the recipe |
| `items` | Array | Array of items in this recipe |
| `onDeleteItem` | Function | Callback to delete an item |

---

### GroceryItem.jsx

**Displays a single grocery item.**

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `item` | Object | Item object with name, quantity, unit, recipe |
| `onDelete` | Function | Callback to delete the item |

---

### RecipeTag.jsx

**Displays a recipe tag with delete functionality.**

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `recipe` | String | Recipe name |
| `onDelete` | Function | Callback to delete the recipe |

---

### RecipeList.jsx

**Container for displaying all recipe tags.**

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `recipes` | Array | Array of recipe names |
| `onDeleteRecipe` | Function | Callback to delete a recipe |

---

### ItemCounter.jsx

**Shows the total number of items in the list.**

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `count` | Number | Number of items |

---

## Usage Guide

### Adding a Recipe

1. Click the **"Add Recipe"** button in the Recipes section
2. Enter the recipe name in the input field
3. Press **Enter** or click **"Add"**
4. The recipe appears as a tag below

### Adding an Item

1. Fill in the item details:
   - **Item name** - What you need to buy
   - **Quantity** - How much you need
   - **Unit** - Select from dropdown (kg, cups, etc.)
   - **Recipe** - _(Optional)_ Select which recipe this item is for
2. Click the **"Add"** button
3. The item appears in the appropriate recipe group

### Deleting Items

- Click the **trash icon** next to any item to remove it

### Deleting Recipes

- Click the **trash icon** next to any recipe tag
- Associated items will be moved to **"Ungrouped"**

---

## Data Structure

### Item Object

```javascript
{
  id: 1234567890,        // Timestamp-based unique ID
  name: "Tomatoes",      // Item name
  quantity: "2",         // Quantity as string
  unit: "kg",            // Unit of measurement
  recipe: "Pasta Sauce"  // Associated recipe (or empty string)
}
```

### Recipe

```javascript
"Pasta Sauce"; // Simple string
```

---

## State Management

The app uses React's `useState` hook for state management. All state is managed in the root `App.jsx` component and passed down to child components via props.

### State Flow Diagram:

```
┌─────────────────┐
│   App (state)   │
└────────┬────────┘
         │ props
         ↓
┌─────────────────┐
│   Components    │
└────────┬────────┘
         │ callbacks
         ↓
┌─────────────────┐
│ App (setState)  │
└─────────────────┘
```

---

## Customization

### Adding New Units

Edit the `units` array in `AddItemForm.jsx`:

```javascript
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
  "your-new-unit", // Add your custom unit here
];
```

### Styling with Tailwind CSS

The app uses Tailwind CSS utility classes. To customize:

| Element     | How to Change         | Example                         |
| ----------- | --------------------- | ------------------------------- |
| **Colors**  | Modify color classes  | `bg-indigo-600` → `bg-blue-600` |
| **Spacing** | Adjust padding/margin | `p-4` → `p-6`                   |
| **Fonts**   | Change text size      | `text-lg` → `text-xl`           |

### Custom CSS

Add custom styles in `App.css` or `index.css` for global changes.

---

## Browser Support

| Browser | Version |
| ------- | ------- |
| Chrome  | Latest  |
| Firefox | Latest  |
| Safari  | Latest  |
| Edge    | Latest  |

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/AwesomeFeature
   ```
3. **Commit** your changes
   ```bash
   git commit -m 'Add some AwesomeFeature'
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/AwesomeFeature
   ```
5. **Open** a Pull Request

### Code Style Guidelines

- Use functional components with hooks
- Follow existing component structure
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

---

## Troubleshooting

### Styling issues

**Possible causes:**

- Tailwind CSS not properly installed
- Missing Tailwind directives

**Solution:**

- Verify Tailwind CSS installation
- Check that `index.css` imports Tailwind directives:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with React**

Star this repo if you find it helpful!

</div>
