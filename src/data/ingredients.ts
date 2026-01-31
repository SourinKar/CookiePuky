export interface Ingredient {
  id: string;
  name: string;
  pricePerUnit: number;
  unit: string;
  category: string;
  description?: string;
  defaultQuantity?: number;
}

export const ingredientDatabase: Ingredient[] = [
  // Proteins
  { id: "chicken", name: "Chicken (500g)", pricePerUnit: 150, unit: "per 500g", category: "Proteins", description: "Fresh chicken pieces" },
  { id: "mutton", name: "Mutton (500g)", pricePerUnit: 200, unit: "per 500g", category: "Proteins", description: "Fresh mutton pieces" },
  { id: "paneer", name: "Paneer (250g)", pricePerUnit: 120, unit: "per 250g", category: "Proteins", description: "Indian cottage cheese" },
  { id: "fish", name: "Fish (500g)", pricePerUnit: 180, unit: "per 500g", category: "Proteins", description: "Fresh fish fillet" },
  
  // Grains
  { id: "basmati-rice", name: "Basmati Rice (1kg)", pricePerUnit: 80, unit: "per 1kg", category: "Grains", description: "Long grain basmati rice" },
  { id: "wheat-flour", name: "Wheat Flour (1kg)", pricePerUnit: 40, unit: "per 1kg", category: "Grains", description: "All-purpose flour" },
  { id: "rice-flour", name: "Rice Flour (500g)", pricePerUnit: 50, unit: "per 500g", category: "Grains", description: "Finely ground rice flour" },
  
  // Vegetables
  { id: "onion", name: "Onion (1kg)", pricePerUnit: 30, unit: "per 1kg", category: "Vegetables", description: "Fresh onions" },
  { id: "tomato", name: "Tomato (1kg)", pricePerUnit: 40, unit: "per 1kg", category: "Vegetables", description: "Fresh tomatoes" },
  { id: "potato", name: "Potato (1kg)", pricePerUnit: 25, unit: "per 1kg", category: "Vegetables", description: "Fresh potatoes" },
  { id: "garlic", name: "Garlic (250g)", pricePerUnit: 60, unit: "per 250g", category: "Vegetables", description: "Fresh garlic cloves" },
  { id: "ginger", name: "Ginger (250g)", pricePerUnit: 50, unit: "per 250g", category: "Vegetables", description: "Fresh ginger root" },
  { id: "green-chili", name: "Green Chili (250g)", pricePerUnit: 40, unit: "per 250g", category: "Vegetables", description: "Fresh green chilies" },
  { id: "coriander", name: "Fresh Coriander (100g)", pricePerUnit: 20, unit: "per 100g", category: "Vegetables", description: "Fresh coriander leaves" },
  { id: "mint", name: "Fresh Mint (100g)", pricePerUnit: 15, unit: "per 100g", category: "Vegetables", description: "Fresh mint leaves" },
  { id: "capsicum", name: "Capsicum (250g)", pricePerUnit: 45, unit: "per 250g", category: "Vegetables", description: "Bell pepper" },
  
  // Dairy
  { id: "yogurt", name: "Yogurt (500ml)", pricePerUnit: 50, unit: "per 500ml", category: "Dairy", description: "Plain yogurt" },
  { id: "milk", name: "Milk (1ltr)", pricePerUnit: 60, unit: "per 1ltr", category: "Dairy", description: "Fresh milk" },
  { id: "butter", name: "Butter (200g)", pricePerUnit: 180, unit: "per 200g", category: "Dairy", description: "Salted butter" },
  { id: "ghee", name: "Ghee (250ml)", pricePerUnit: 250, unit: "per 250ml", category: "Dairy", description: "Clarified butter" },
  { id: "cream", name: "Cream (200ml)", pricePerUnit: 90, unit: "per 200ml", category: "Dairy", description: "Heavy cream" },
  
  // Spices
  { id: "cumin-seeds", name: "Cumin Seeds (100g)", pricePerUnit: 120, unit: "per 100g", category: "Spices", description: "Jeera seeds" },
  { id: "coriander-seeds", name: "Coriander Seeds (100g)", pricePerUnit: 100, unit: "per 100g", category: "Spices", description: "Dhania seeds" },
  { id: "turmeric", name: "Turmeric Powder (100g)", pricePerUnit: 60, unit: "per 100g", category: "Spices", description: "Ground turmeric" },
  { id: "red-chili", name: "Red Chili Powder (100g)", pricePerUnit: 80, unit: "per 100g", category: "Spices", description: "Ground red chili" },
  { id: "garam-masala", name: "Garam Masala (100g)", pricePerUnit: 150, unit: "per 100g", category: "Spices", description: "Spice blend" },
  { id: "saffron", name: "Saffron (1g)", pricePerUnit: 150, unit: "per 1g", category: "Spices", description: "Premium saffron strands" },
  { id: "black-pepper", name: "Black Pepper (50g)", pricePerUnit: 100, unit: "per 50g", category: "Spices", description: "Ground black pepper" },
  { id: "cardamom", name: "Cardamom (50g)", pricePerUnit: 200, unit: "per 50g", category: "Spices", description: "Green cardamom pods" },
  { id: "cinnamon", name: "Cinnamon (50g)", pricePerUnit: 120, unit: "per 50g", category: "Spices", description: "Cinnamon sticks" },
  { id: "bay-leaf", name: "Bay Leaf (25g)", pricePerUnit: 80, unit: "per 25g", category: "Spices", description: "Dried bay leaves" },
  { id: "cloves", name: "Cloves (50g)", pricePerUnit: 180, unit: "per 50g", category: "Spices", description: "Dried cloves" },
  
  // Condiments & Oils
  { id: "oil", name: "Cooking Oil (1ltr)", pricePerUnit: 150, unit: "per 1ltr", category: "Oils", description: "Vegetable or mustard oil" },
  { id: "salt", name: "Salt (1kg)", pricePerUnit: 20, unit: "per 1kg", category: "Condiments", description: "Table salt" },
  { id: "sugar", name: "Sugar (1kg)", pricePerUnit: 40, unit: "per 1kg", category: "Condiments", description: "White sugar" },
  { id: "vinegar", name: "Vinegar (500ml)", pricePerUnit: 40, unit: "per 500ml", category: "Condiments", description: "White vinegar" },
  { id: "soy-sauce", name: "Soy Sauce (250ml)", pricePerUnit: 60, unit: "per 250ml", category: "Condiments", description: "Soy sauce" },
  
  // Other essentials
  { id: "lemon", name: "Lemon (250g)", pricePerUnit: 30, unit: "per 250g", category: "Fruits", description: "Fresh lemons" },
  { id: "tamarind", name: "Tamarind (250g)", pricePerUnit: 80, unit: "per 250g", category: "Condiments", description: "Tamarind paste" },
  { id: "rose-water", name: "Rose Water (250ml)", pricePerUnit: 100, unit: "per 250ml", category: "Condiments", description: "Rose water" },
  { id: "coconut-milk", name: "Coconut Milk (400ml)", pricePerUnit: 120, unit: "per 400ml", category: "Dairy", description: "Coconut milk" },
  { id: "cashews", name: "Cashews (250g)", pricePerUnit: 400, unit: "per 250g", category: "Nuts", description: "Raw cashews" },
];
