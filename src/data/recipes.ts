export interface RecipeIngredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  pricePerUnit: number;
}

export interface DetailedRecipe {
  id: string;
  name: string;
  description: string;
  category: "North Indian" | "South Indian" | "Street Food" | "Vegetarian" | "Non-Vegetarian" | "Desserts" | "Beverages";
  servings: number;
  cookingTime: number;
  difficulty: "Easy" | "Medium" | "Hard";
  isVeg: boolean;
  ingredients: RecipeIngredient[];
  steps: string[];
  estimatedCost: number;
  image?: string;
  tips?: string[];
}

export const detailedRecipes: DetailedRecipe[] = [
  {
    id: "chicken-biryani",
    name: "Chicken Biryani",
    description: "Aromatic basmati rice layered with spiced chicken and caramelized onions. A classic Indian one-pot meal.",
    category: "Non-Vegetarian",
    servings: 4,
    cookingTime: 45,
    difficulty: "Medium",
    isVeg: false,
    ingredients: [
      { id: "chicken", name: "Chicken", quantity: 0.75, unit: "kg", pricePerUnit: 150 },
      { id: "basmati-rice", name: "Basmati Rice", quantity: 1, unit: "kg", pricePerUnit: 80 },
      { id: "onion", name: "Onion", quantity: 0.5, unit: "kg", pricePerUnit: 30 },
      { id: "yogurt", name: "Yogurt", quantity: 0.25, unit: "kg", pricePerUnit: 100 },
      { id: "ginger", name: "Ginger-Garlic Paste", quantity: 0.05, unit: "kg", pricePerUnit: 100 },
      { id: "green-chili", name: "Green Chili", quantity: 0.05, unit: "kg", pricePerUnit: 40 },
      { id: "coriander", name: "Fresh Coriander", quantity: 0.02, unit: "kg", pricePerUnit: 200 },
      { id: "mint", name: "Fresh Mint", quantity: 0.02, unit: "kg", pricePerUnit: 150 },
      { id: "saffron", name: "Saffron", quantity: 0.001, unit: "kg", pricePerUnit: 150000 },
      { id: "garam-masala", name: "Garam Masala", quantity: 0.01, unit: "kg", pricePerUnit: 1500 },
      { id: "oil", name: "Oil", quantity: 0.1, unit: "ltr", pricePerUnit: 150 },
      { id: "salt", name: "Salt", quantity: 0.02, unit: "kg", pricePerUnit: 20 },
    ],
    steps: [
      "Marinate chicken with yogurt, ginger-garlic paste, green chilies, and half the garam masala for 30 minutes",
      "Heat ghee and fry onions until golden and crispy, reserve some for garnish",
      "In a large pot, layer marinated chicken with fried onions",
      "Soak saffron in warm milk and pour over the chicken layer",
      "Wash and par-boil rice with whole spices until 70% cooked",
      "Layer the par-boiled rice over the chicken",
      "Cover the pot and cook on high heat for 2-3 minutes until steam forms",
      "Reduce heat to low and cook (dum) for 25-30 minutes until chicken is tender",
      "Let it rest for 5 minutes, then fluff gently with a fork",
      "Garnish with fried onions, fresh coriander, and mint"
    ],
    estimatedCost: 350,
    tips: [
      "Marinating chicken overnight gives better flavor",
      "Use aged basmati rice for better aroma",
      "Seal the pot edges with dough for better dum cooking",
      "Don't open the lid while cooking to maintain steam"
    ]
  },
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    description: "Creamy tomato-based curry with tender chicken pieces. A restaurant-style classic that's easy to make at home.",
    category: "Non-Vegetarian",
    servings: 4,
    cookingTime: 35,
    difficulty: "Easy",
    isVeg: false,
    ingredients: [
      { id: "chicken", name: "Chicken", quantity: 0.75, unit: "kg", pricePerUnit: 150 },
      { id: "tomato", name: "Tomato", quantity: 0.5, unit: "kg", pricePerUnit: 40 },
      { id: "onion", name: "Onion", quantity: 0.3, unit: "kg", pricePerUnit: 30 },
      { id: "ginger", name: "Ginger-Garlic Paste", quantity: 0.04, unit: "kg", pricePerUnit: 100 },
      { id: "green-chili", name: "Green Chili", quantity: 0.03, unit: "kg", pricePerUnit: 40 },
      { id: "cream", name: "Cream", quantity: 0.2, unit: "ltr", pricePerUnit: 450 },
      { id: "butter", name: "Butter", quantity: 0.05, unit: "kg", pricePerUnit: 900 },
      { id: "oil", name: "Oil", quantity: 0.08, unit: "ltr", pricePerUnit: 150 },
      { id: "garam-masala", name: "Garam Masala", quantity: 0.01, unit: "kg", pricePerUnit: 1500 },
      { id: "red-chili", name: "Red Chili Powder", quantity: 0.005, unit: "kg", pricePerUnit: 800 },
      { id: "turmeric", name: "Turmeric", quantity: 0.005, unit: "kg", pricePerUnit: 600 },
      { id: "salt", name: "Salt", quantity: 0.015, unit: "kg", pricePerUnit: 20 },
      { id: "coriander", name: "Fresh Coriander", quantity: 0.02, unit: "kg", pricePerUnit: 200 },
    ],
    steps: [
      "Cut chicken into medium pieces and season with salt and turmeric",
      "Heat oil in a pan and fry chicken until golden, set aside",
      "In the same pan, sauté onions until translucent",
      "Add ginger-garlic paste and green chilies, cook for 1 minute",
      "Add chopped tomatoes and cook until soft",
      "Blend the tomato-onion mixture into a smooth paste",
      "Return the paste to the pan and add garam masala and red chili powder",
      "Simmer for 5 minutes until oil separates from the gravy",
      "Add the fried chicken back to the pan",
      "Pour in cream and add butter, stir well",
      "Simmer for 10-15 minutes on low heat",
      "Garnish with fresh coriander and a dollop of cream"
    ],
    estimatedCost: 280,
    tips: [
      "Marinating chicken for 15 minutes before frying adds tenderness",
      "Using cashew paste instead of cream makes it richer",
      "The sauce should be smooth - strain if needed",
      "Low heat prevents the cream from curdling"
    ]
  },
  {
    id: "paneer-tikka-masala",
    name: "Paneer Tikka Masala",
    description: "Creamy tomato curry with marinated paneer cubes. A vegetarian delight perfect for any occasion.",
    category: "Vegetarian",
    servings: 4,
    cookingTime: 40,
    difficulty: "Medium",
    isVeg: true,
    ingredients: [
      { id: "paneer", name: "Paneer", quantity: 0.5, unit: "kg", pricePerUnit: 480 },
      { id: "tomato", name: "Tomato", quantity: 0.5, unit: "kg", pricePerUnit: 40 },
      { id: "onion", name: "Onion", quantity: 0.4, unit: "kg", pricePerUnit: 30 },
      { id: "ginger", name: "Ginger-Garlic Paste", quantity: 0.04, unit: "kg", pricePerUnit: 100 },
      { id: "green-chili", name: "Green Chili", quantity: 0.04, unit: "kg", pricePerUnit: 40 },
      { id: "yogurt", name: "Yogurt", quantity: 0.2, unit: "kg", pricePerUnit: 100 },
      { id: "cream", name: "Cream", quantity: 0.15, unit: "ltr", pricePerUnit: 450 },
      { id: "oil", name: "Oil", quantity: 0.08, unit: "ltr", pricePerUnit: 150 },
      { id: "garam-masala", name: "Garam Masala", quantity: 0.01, unit: "kg", pricePerUnit: 1500 },
      { id: "turmeric", name: "Turmeric", quantity: 0.004, unit: "kg", pricePerUnit: 600 },
      { id: "red-chili", name: "Red Chili Powder", quantity: 0.005, unit: "kg", pricePerUnit: 800 },
      { id: "coriander", name: "Fresh Coriander", quantity: 0.02, unit: "kg", pricePerUnit: 200 },
      { id: "salt", name: "Salt", quantity: 0.015, unit: "kg", pricePerUnit: 20 },
    ],
    steps: [
      "Cut paneer into cubes and soak in salt water for 15 minutes",
      "Mix yogurt with ginger-garlic paste, green chilies, and spices for marinade",
      "Marinate paneer for 30 minutes",
      "Heat oil and fry marinated paneer until golden, set aside",
      "In the same oil, sauté onions until golden",
      "Add ginger-garlic paste and cook for 1 minute",
      "Add tomatoes and cook until completely soft",
      "Blend the tomato mixture into a smooth sauce",
      "Strain through a sieve for a silky texture",
      "Add turmeric, red chili, and garam masala",
      "Simmer for 8-10 minutes",
      "Add the fried paneer and simmer for 5 more minutes",
      "Pour in cream and cook for 2-3 minutes",
      "Garnish with fresh coriander"
    ],
    estimatedCost: 220,
    tips: [
      "Never skip marinating for better flavor",
      "Frying paneer gives a light golden crust",
      "Straining gives a restaurant-like smooth sauce",
      "Add cream at the end to prevent curdling"
    ]
  },
  {
    id: "chole-bhature",
    name: "Chole Bhature",
    description: "Deep-fried fluffy bread served with spiced chickpea curry. A North Indian street food favorite.",
    category: "Street Food",
    servings: 4,
    cookingTime: 50,
    difficulty: "Medium",
    isVeg: true,
    ingredients: [
      { id: "wheat-flour", name: "Wheat Flour", quantity: 0.5, unit: "kg", pricePerUnit: 40 },
      { id: "onion", name: "Onion", quantity: 0.3, unit: "kg", pricePerUnit: 30 },
      { id: "tomato", name: "Tomato", quantity: 0.25, unit: "kg", pricePerUnit: 40 },
      { id: "ginger", name: "Ginger-Garlic Paste", quantity: 0.03, unit: "kg", pricePerUnit: 100 },
      { id: "green-chili", name: "Green Chili", quantity: 0.03, unit: "kg", pricePerUnit: 40 },
      { id: "oil", name: "Oil", quantity: 0.3, unit: "ltr", pricePerUnit: 150 },
      { id: "yogurt", name: "Yogurt", quantity: 0.1, unit: "kg", pricePerUnit: 100 },
      { id: "garam-masala", name: "Garam Masala", quantity: 0.01, unit: "kg", pricePerUnit: 1500 },
      { id: "turmeric", name: "Turmeric", quantity: 0.004, unit: "kg", pricePerUnit: 600 },
      { id: "salt", name: "Salt", quantity: 0.02, unit: "kg", pricePerUnit: 20 },
      { id: "coriander", name: "Fresh Coriander", quantity: 0.02, unit: "kg", pricePerUnit: 200 },
      { id: "lemon", name: "Lemon", quantity: 0.1, unit: "kg", pricePerUnit: 120 },
    ],
    steps: [
      "Mix wheat flour with yogurt, salt, and a pinch of garam masala to make a soft dough",
      "Let the dough rest for 2-3 hours",
      "Soak chickpeas overnight and pressure cook for 3 whistles",
      "Heat oil and sauté onions until golden",
      "Add ginger-garlic paste and green chilies, cook for 1 minute",
      "Add tomatoes and cook until soft",
      "Add cooked chickpeas with turmeric and garam masala",
      "Simmer for 10 minutes until curry thickens",
      "Divide dough into 8 portions and shape into balls",
      "Roll each ball slightly and let it rest for 5 minutes",
      "Heat oil to 180°C and fry each bhature until puffed and golden",
      "Drain on paper towels",
      "Serve hot with the spiced chickpea curry",
      "Garnish with fresh coriander and lemon juice"
    ],
    estimatedCost: 150,
    tips: [
      "The dough must rest for a light and fluffy bhature",
      "Ensure oil is hot enough for proper puffing",
      "Frying quickly prevents oil absorption",
      "Serve immediately while bhature are hot"
    ]
  },
  {
    id: "sambar",
    name: "Sambar",
    description: "Tangy South Indian vegetable stew with lentils and tamarind. Served with idli or dosa.",
    category: "South Indian",
    servings: 4,
    cookingTime: 35,
    difficulty: "Medium",
    isVeg: true,
    ingredients: [
      { id: "onion", name: "Onion", quantity: 0.25, unit: "kg", pricePerUnit: 30 },
      { id: "tomato", name: "Tomato", quantity: 0.25, unit: "kg", pricePerUnit: 40 },
      { id: "potato", name: "Potato", quantity: 0.2, unit: "kg", pricePerUnit: 25 },
      { id: "tamarind", name: "Tamarind", quantity: 0.05, unit: "kg", pricePerUnit: 320 },
      { id: "ginger", name: "Ginger", quantity: 0.02, unit: "kg", pricePerUnit: 200 },
      { id: "green-chili", name: "Green Chili", quantity: 0.04, unit: "kg", pricePerUnit: 40 },
      { id: "coriander", name: "Coriander Seeds", quantity: 0.01, unit: "kg", pricePerUnit: 1000 },
      { id: "cumin-seeds", name: "Cumin Seeds", quantity: 0.01, unit: "kg", pricePerUnit: 1200 },
      { id: "red-chili", name: "Red Chili Powder", quantity: 0.005, unit: "kg", pricePerUnit: 800 },
      { id: "turmeric", name: "Turmeric", quantity: 0.003, unit: "kg", pricePerUnit: 600 },
      { id: "oil", name: "Oil", quantity: 0.05, unit: "ltr", pricePerUnit: 150 },
      { id: "salt", name: "Salt", quantity: 0.015, unit: "kg", pricePerUnit: 20 },
      { id: "coriander", name: "Fresh Coriander", quantity: 0.01, unit: "kg", pricePerUnit: 200 },
    ],
    steps: [
      "Roast coriander and cumin seeds until fragrant, then grind into powder",
      "Soak tamarind in warm water and extract juice",
      "Cut potatoes and onions into small cubes",
      "Heat oil and add mustard seeds, let them splutter",
      "Add curry leaves and asafoetida",
      "Add onions and sauté until soft",
      "Add tomatoes and cook until soft",
      "Add potatoes and pressure cook for 2 whistles",
      "Add turmeric and red chili powder",
      "Add the roasted spice powder",
      "Pour in tamarind juice",
      "Add green chilies",
      "Simmer for 10 minutes until all vegetables are tender",
      "Garnish with fresh coriander and curry leaves"
    ],
    estimatedCost: 120,
    tips: [
      "Tamarind is crucial for the tangy flavor",
      "Don't overcook vegetables to maintain texture",
      "Roasting spices freshly gives better aroma",
      "Sambar tastes better the next day"
    ]
  },
  {
    id: "dosa",
    name: "Crispy Dosa",
    description: "Thin, crispy crepe made from fermented rice and lentil batter. South Indian breakfast classic.",
    category: "South Indian",
    servings: 4,
    cookingTime: 30,
    difficulty: "Medium",
    isVeg: true,
    ingredients: [
      { id: "rice-flour", name: "Rice", quantity: 0.25, unit: "kg", pricePerUnit: 80 },
      { id: "oil", name: "Oil", quantity: 0.1, unit: "ltr", pricePerUnit: 150 },
      { id: "onion", name: "Onion", quantity: 0.1, unit: "kg", pricePerUnit: 30 },
      { id: "green-chili", name: "Green Chili", quantity: 0.02, unit: "kg", pricePerUnit: 40 },
      { id: "ginger", name: "Ginger", quantity: 0.01, unit: "kg", pricePerUnit: 200 },
      { id: "coriander", name: "Fresh Coriander", quantity: 0.01, unit: "kg", pricePerUnit: 200 },
      { id: "salt", name: "Salt", quantity: 0.01, unit: "kg", pricePerUnit: 20 },
    ],
    steps: [
      "Prepare dosa batter (typically done a day before by fermenting)",
      "Heat a non-stick griddle or dosa pan on high heat",
      "Grease lightly with oil",
      "Pour a ladleful of batter in the center",
      "Quickly spread the batter in circular motions to form a thin crepe",
      "Drizzle oil around the edges",
      "Cook until the bottom is golden and crispy (1-2 minutes)",
      "Flip and cook the other side for 30 seconds",
      "Serve hot with sambar and chutney"
    ],
    estimatedCost: 80,
    tips: [
      "Batter consistency is key - should be pourable but not too thin",
      "Fermentation gives authentic tangy flavor",
      "Use a cast iron dosa tawa for best results",
      "High heat ensures crispiness"
    ]
  },
  {
    id: "aloo-gobi",
    name: "Aloo Gobi",
    description: "Dry potato and cauliflower curry with aromatic spices. A simple yet flavorful vegetarian dish.",
    category: "Vegetarian",
    servings: 4,
    cookingTime: 25,
    difficulty: "Easy",
    isVeg: true,
    ingredients: [
      { id: "potato", name: "Potato", quantity: 0.5, unit: "kg", pricePerUnit: 25 },
      { id: "onion", name: "Onion", quantity: 0.3, unit: "kg", pricePerUnit: 30 },
      { id: "tomato", name: "Tomato", quantity: 0.2, unit: "kg", pricePerUnit: 40 },
      { id: "ginger", name: "Ginger-Garlic Paste", quantity: 0.02, unit: "kg", pricePerUnit: 100 },
      { id: "green-chili", name: "Green Chili", quantity: 0.02, unit: "kg", pricePerUnit: 40 },
      { id: "cumin-seeds", name: "Cumin Seeds", quantity: 0.005, unit: "kg", pricePerUnit: 1200 },
      { id: "turmeric", name: "Turmeric", quantity: 0.003, unit: "kg", pricePerUnit: 600 },
      { id: "red-chili", name: "Red Chili Powder", quantity: 0.004, unit: "kg", pricePerUnit: 800 },
      { id: "oil", name: "Oil", quantity: 0.06, unit: "ltr", pricePerUnit: 150 },
      { id: "salt", name: "Salt", quantity: 0.01, unit: "kg", pricePerUnit: 20 },
      { id: "coriander", name: "Fresh Coriander", quantity: 0.02, unit: "kg", pricePerUnit: 200 },
    ],
    steps: [
      "Cut potatoes and cauliflower into bite-sized pieces",
      "Heat oil in a large pan and add cumin seeds",
      "Let seeds splutter for a few seconds",
      "Add onions and sauté until translucent",
      "Add ginger-garlic paste and green chilies",
      "Add tomatoes and cook until soft",
      "Add potatoes and stir well",
      "Add turmeric and red chili powder",
      "Cover and cook for 10 minutes",
      "Add cauliflower pieces",
      "Mix well and cover again",
      "Cook for 10-12 minutes until vegetables are tender",
      "Garnish with fresh coriander"
    ],
    estimatedCost: 110,
    tips: [
      "Cut vegetables into uniform sizes for even cooking",
      "Don't overcook cauliflower to keep it crispy",
      "Add a pinch of garam masala for extra depth",
      "Serve hot with roti or rice"
    ]
  },
  {
    id: "dal-makhani",
    name: "Dal Makhani",
    description: "Creamy black lentil curry with butter and cream. A rich and indulgent vegetarian dish.",
    category: "Vegetarian",
    servings: 4,
    cookingTime: 40,
    difficulty: "Medium",
    isVeg: true,
    ingredients: [
      { id: "lemon", name: "Black Lentils", quantity: 0.2, unit: "kg", pricePerUnit: 120 },
      { id: "tomato", name: "Tomato", quantity: 0.3, unit: "kg", pricePerUnit: 40 },
      { id: "onion", name: "Onion", quantity: 0.2, unit: "kg", pricePerUnit: 30 },
      { id: "ginger", name: "Ginger-Garlic Paste", quantity: 0.03, unit: "kg", pricePerUnit: 100 },
      { id: "green-chili", name: "Green Chili", quantity: 0.02, unit: "kg", pricePerUnit: 40 },
      { id: "cream", name: "Cream", quantity: 0.2, unit: "ltr", pricePerUnit: 450 },
      { id: "butter", name: "Butter", quantity: 0.06, unit: "kg", pricePerUnit: 900 },
      { id: "oil", name: "Oil", quantity: 0.05, unit: "ltr", pricePerUnit: 150 },
      { id: "garam-masala", name: "Garam Masala", quantity: 0.008, unit: "kg", pricePerUnit: 1500 },
      { id: "cumin-seeds", name: "Cumin Seeds", quantity: 0.005, unit: "kg", pricePerUnit: 1200 },
      { id: "turmeric", name: "Turmeric", quantity: 0.003, unit: "kg", pricePerUnit: 600 },
      { id: "salt", name: "Salt", quantity: 0.01, unit: "kg", pricePerUnit: 20 },
      { id: "coriander", name: "Fresh Coriander", quantity: 0.02, unit: "kg", pricePerUnit: 200 },
    ],
    steps: [
      "Soak black lentils for 2 hours",
      "Pressure cook lentils with turmeric and salt until soft",
      "Heat butter and oil in a pan",
      "Add cumin seeds and let them splutter",
      "Add onions and sauté until golden",
      "Add ginger-garlic paste and green chilies",
      "Add tomatoes and cook until completely soft",
      "Blend the tomato mixture into a smooth puree",
      "Add the cooked lentils to the tomato puree",
      "Simmer for 15 minutes",
      "Add garam masala and adjust seasoning",
      "Pour in the cream",
      "Cook for 5 more minutes on medium heat",
      "Garnish with fresh coriander and a dollop of cream"
    ],
    estimatedCost: 180,
    tips: [
      "Soak lentils for easier cooking",
      "Long cooking time develops deep flavors",
      "Stirring often prevents sticking",
      "Best served with naan bread"
    ]
  },
  {
    id: "tandoori-chicken",
    name: "Tandoori Chicken",
    description: "Succulent chicken marinated in yogurt and spices, cooked until tender and aromatic.",
    category: "Non-Vegetarian",
    servings: 4,
    cookingTime: 40,
    difficulty: "Medium",
    isVeg: false,
    ingredients: [
      { id: "chicken", name: "Chicken", quantity: 1, unit: "kg", pricePerUnit: 150 },
      { id: "yogurt", name: "Yogurt", quantity: 0.3, unit: "kg", pricePerUnit: 100 },
      { id: "ginger", name: "Ginger-Garlic Paste", quantity: 0.05, unit: "kg", pricePerUnit: 100 },
      { id: "green-chili", name: "Green Chili", quantity: 0.03, unit: "kg", pricePerUnit: 40 },
      { id: "lemon", name: "Lemon", quantity: 0.1, unit: "kg", pricePerUnit: 120 },
      { id: "red-chili", name: "Red Chili Powder", quantity: 0.01, unit: "kg", pricePerUnit: 800 },
      { id: "turmeric", name: "Turmeric", quantity: 0.005, unit: "kg", pricePerUnit: 600 },
      { id: "garam-masala", name: "Garam Masala", quantity: 0.01, unit: "kg", pricePerUnit: 1500 },
      { id: "coriander", name: "Fresh Coriander", quantity: 0.02, unit: "kg", pricePerUnit: 200 },
      { id: "salt", name: "Salt", quantity: 0.02, unit: "kg", pricePerUnit: 20 },
      { id: "oil", name: "Oil", quantity: 0.06, unit: "ltr", pricePerUnit: 150 },
    ],
    steps: [
      "Cut chicken into medium pieces",
      "Make a paste of ginger-garlic, green chilies, and fresh coriander",
      "Mix this paste with yogurt, spices, and lemon juice",
      "Marinate chicken in this mixture for at least 4 hours or overnight",
      "Heat oven or grill to 200°C",
      "Skewer the marinated chicken pieces",
      "Grill for 20-25 minutes, basting with oil and marinade",
      "Turn occasionally for even cooking",
      "Chicken is ready when cooked through and charred at edges",
      "Serve hot with onions, lemon wedges, and mint chutney"
    ],
    estimatedCost: 200,
    tips: [
      "Longer marination gives better flavor penetration",
      "Use cast iron skewers for even heat distribution",
      "Don't overcrowd the grill",
      "Lemon juice helps in tenderizing the chicken"
    ]
  },
  {
    id: "masala-dosa",
    name: "Masala Dosa",
    description: "Crispy dosa filled with spiced potato and onion filling. Served with sambar and chutney.",
    category: "South Indian",
    servings: 4,
    cookingTime: 40,
    difficulty: "Hard",
    isVeg: true,
    ingredients: [
      { id: "rice-flour", name: "Rice", quantity: 0.25, unit: "kg", pricePerUnit: 80 },
      { id: "potato", name: "Potato", quantity: 0.3, unit: "kg", pricePerUnit: 25 },
      { id: "onion", name: "Onion", quantity: 0.2, unit: "kg", pricePerUnit: 30 },
      { id: "green-chili", name: "Green Chili", quantity: 0.03, unit: "kg", pricePerUnit: 40 },
      { id: "ginger", name: "Ginger", quantity: 0.02, unit: "kg", pricePerUnit: 200 },
      { id: "cumin-seeds", name: "Cumin Seeds", quantity: 0.005, unit: "kg", pricePerUnit: 1200 },
      { id: "turmeric", name: "Turmeric", quantity: 0.003, unit: "kg", pricePerUnit: 600 },
      { id: "oil", name: "Oil", quantity: 0.1, unit: "ltr", pricePerUnit: 150 },
      { id: "salt", name: "Salt", quantity: 0.02, unit: "kg", pricePerUnit: 20 },
      { id: "coriander", name: "Fresh Coriander", quantity: 0.02, unit: "kg", pricePerUnit: 200 },
    ],
    steps: [
      "Prepare dosa batter (fermented rice and lentil batter)",
      "Boil and cut potatoes into small cubes",
      "Heat oil and add cumin seeds",
      "Add onions and sauté until translucent",
      "Add green chilies, ginger, and turmeric",
      "Add boiled potatoes and mix well",
      "Cook for 5 minutes and keep aside",
      "Heat a dosa pan and grease with oil",
      "Pour dosa batter and spread into a thin circle",
      "Drizzle oil around the edges",
      "When the bottom turns golden, place potato filling on one half",
      "Fold the dosa in half",
      "Cook until crispy",
      "Serve hot with sambar and chutney"
    ],
    estimatedCost: 100,
    tips: [
      "Proper fermentation is essential for good dosa",
      "Potato filling should be warm when folding",
      "High heat ensures crispiness",
      "Serve immediately while hot"
    ]
  },
];
