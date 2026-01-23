## grocery-list-app

A modern, intuitive grocery list application built with React that helps you organize your shopping items by recipe. Perfect for meal planning and efficient grocery shopping!

# Features

# Recipe Management

Create and manage multiple recipes
Organize grocery items by recipe
Delete recipes (automatically ungroups associated items)

# Smart Item Management

Add items with quantity and unit measurements
Support for various units (kg, g, lb, oz, L, mL, cups, tbsp, tsp, pcs)
Associate items with specific recipes or leave ungrouped
Delete individual items with one click

# Organized Display

Items grouped by recipe for easy shopping
Visual distinction between different recipe groups
Item counter showing total items in your list
Empty state guidance when list is empty

# Modern UI/UX

Clean, responsive design
Gradient backgrounds and smooth transitions
Hover effects for better interactivity
Mobile-friendly interface

# Technology Stack

Frontend Framework: React 18.x
Styling: Tailwind CSS
Icons: Lucide React
Build Tool: Vite
Language: JavaScript (ES6+)

## Installation Prerequisites

Node.js (v14 or higher)
npm or yarn

## Setup

# Clone the repository:

git clone https://github.com/yourusername/grocery-list-app.git
cd grocery-list-app

# Install dependencies:

npm install

# Start the development server:

npm run dev

# Open your browser and navigate to:

http://localhost:5173
Project Structure

grocery-list-app/
├── public/
├── src/
│ ├── components/
│ │ ├── AddItemForm.jsx # Form for adding new items
│ │ ├── GroceryItem.jsx # Individual item component
│ │ ├── GroceryList.jsx # Main list container
│ │ ├── ItemCounter.jsx # Displays total item count
│ │ ├── RecipeGroup.jsx # Groups items by recipe
│ │ ├── RecipeList.jsx # Displays recipe tags
│ │ ├── RecipeManager.jsx # Recipe CRUD operations
│ │ └── RecipeTag.jsx # Individual recipe tag
│ ├── App.jsx # Main application component
│ ├── App.css # Application styles
│ ├── index.css # Global styles
│ └── main.jsx # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md

# Component Architecture

Main Components
App.jsx
The root component that manages the global state for items and recipes.

State:

items: Array of grocery items
recipes: Array of recipe names

Key Functions:

handleAddRecipe(recipe): Adds a new recipe
handleDeleteRecipe(recipeName): Deletes a recipe and ungroups its items
handleAddItem(item): Adds a new item to the list
handleDeleteItem(id): Removes an item from the list

RecipeManager.jsx
Handles recipe creation and management.
Props:

recipes: Array of existing recipes
onAddRecipe: Callback to add a recipe
onDeleteRecipe: Callback to delete a recipe

AddItemForm.jsx
Form component for adding new grocery items.
Props:

recipes: Available recipes for dropdown
onAddItem: Callback to add item

Form Fields:

Item name (text)
Quantity (number)
Unit (select dropdown)
Recipe (optional select dropdown)

GroceryList.jsx
Displays items grouped by recipe.
Props:

items: Array of grocery items
onDeleteItem: Callback to delete an item

Features:

Groups items by recipe
Shows "Ungrouped" for items without a recipe
Displays empty state when no items exist

RecipeGroup.jsx
Visual container for items belonging to a specific recipe.
Props:

recipeName: Name of the recipe
items: Array of items in this recipe
onDeleteItem: Callback to delete an item

GroceryItem.jsx
Displays a single grocery item.
Props:

item: Item object with name, quantity, unit, recipe
onDelete: Callback to delete the item

RecipeTag.jsx
Displays a recipe tag with delete functionality.
Props:

recipe: Recipe name
onDelete: Callback to delete the recipe

RecipeList.jsx
Container for displaying all recipe tags.
Props:

recipes: Array of recipe names
onDeleteRecipe: Callback to delete a recipe

ItemCounter.jsx
Shows the total number of items in the list.
Props:

count: Number of items

Usage Guide
Adding a Recipe

Click the "Add Recipe" button in the Recipes section
Enter the recipe name in the input field
Press Enter or click "Add"
The recipe appears as a tag below

Adding an Item

Fill in the item details:

Item name: What you need to buy
Quantity: How much you need
Unit: Select from dropdown (kg, cups, etc.)
Recipe: (Optional) Select which recipe this item is for

Click the "Add" button
The item appears in the appropriate recipe group

Deleting Items

Click the trash icon next to any item to remove it

Deleting Recipes

Click the trash icon next to any recipe tag
Associated items will be moved to "Ungrouped"

# Data Structure

Item Object
javascript{
id: 1234567890, // Timestamp-based unique ID
name: "Tomatoes", // Item name
quantity: "2", // Quantity as string
unit: "kg", // Unit of measurement
recipe: "Pasta Sauce" // Associated recipe (or empty string)
}

Recipe
javascript"Pasta Sauce" // Simple string

# State Management

The app uses React's useState hook for state management. All state is managed in the root App.jsx component and passed down to child components via props.
State Flow:
App (state)
↓ (props)
Components (callbacks)
↓ (events)
App (state updates)
Customization
Adding New Units
Edit the units array in AddItemForm.jsx:
javascriptconst units = [
"pcs", "kg", "g", "lb", "oz",
"L", "mL", "cups", "tbsp", "tsp",
"your-new-unit" // Add here
];

# Styling

The app uses Tailwind CSS utility classes. To customize:

Colors: Modify the color classes (e.g., bg-indigo-600 to bg-blue-600)
Spacing: Adjust padding/margin classes (e.g., p-4 to p-6)
Fonts: Change text size classes (e.g., text-lg to text-xl)

Custom CSS
Add custom styles in App.css or index.css for global changes.

# Browser Support

Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)

# Contributing

Contributions are welcome! Please follow these steps:

Fork the repository
Create a feature branch (git checkout -b feature/AwesomeFeature)
Commit your changes (git commit -m 'Add some AwesomeFeature')
Push to the branch (git push origin feature/AwesomeFeature)
Open a Pull Request

Recipes not showing

Ensure recipe name is unique
Check for whitespace in recipe names

Styling issues

Verify Tailwind CSS is properly installed
Check that index.css imports Tailwind directives

License
This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

Icons provided by Lucide React
Built with Vite
Styled with Tailwind CSS
