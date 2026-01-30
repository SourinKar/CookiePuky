import { useState } from "react";
import { Sparkles, Filter, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IngredientInput } from "@/components/IngredientInput";
import { RecipeCard, Recipe } from "@/components/RecipeCard";
import { Badge } from "@/components/ui/badge";

const mockRecipes: Recipe[] = [
  {
    id: "1",
    name: "Chicken Biryani",
    description: "Aromatic basmati rice layered with spiced chicken and caramelized onions",
    cookingTime: "45 mins",
    cookingTimeInMinutes: 45,
    difficulty: "Medium",
    servings: 4,
    matchPercentage: 85,
    isVeg: false,
    ingredients: [
      { name: "chicken", available: true },
      { name: "rice", available: true },
      { name: "onion", available: true },
      { name: "yogurt", available: false },
      { name: "saffron", available: false },
    ],
    steps: [
      "Marinate chicken with yogurt and spices for 30 minutes",
      "Par-boil rice with whole spices until 70% cooked",
      "Fry onions until golden and crispy",
      "Layer rice and chicken in a pot, add saffron milk",
      "Cook on dum (slow heat) for 25 minutes",
    ],
  },
  {
    id: "2",
    name: "Butter Chicken",
    description: "Creamy tomato-based curry with tender chicken pieces",
    cookingTime: "35 mins",
    cookingTimeInMinutes: 35,
    difficulty: "Easy",
    servings: 4,
    matchPercentage: 75,
    isVeg: false,
    ingredients: [
      { name: "chicken", available: true },
      { name: "tomato", available: true },
      { name: "onion", available: true },
      { name: "cream", available: false },
      { name: "butter", available: false },
    ],
    steps: [
      "Grill or pan-fry marinated chicken pieces",
      "Blend tomatoes with cashews for the gravy base",
      "Cook the gravy with butter and spices",
      "Add cream and simmer until thick",
      "Add chicken and garnish with cream and cilantro",
    ],
  },
  {
    id: "3",
    name: "Jeera Rice",
    description: "Fragrant cumin-tempered basmati rice, perfect with any curry",
    cookingTime: "20 mins",
    cookingTimeInMinutes: 20,
    difficulty: "Easy",
    servings: 4,
    matchPercentage: 95,
    isVeg: true,
    ingredients: [
      { name: "rice", available: true },
      { name: "cumin seeds", available: true },
      { name: "ghee", available: true },
    ],
    steps: [
      "Wash and soak rice for 20 minutes",
      "Heat ghee and add cumin seeds",
      "Add rice and sauté for 2 minutes",
      "Add water and cook until done",
    ],
  },
];

const premiumVariations: Recipe[] = [
  {
    id: "1a",
    name: "Chicken Biryani",
    variation: "Hyderabadi Style",
    description: "The classic dum biryani with raw marinated chicken layered with rice",
    cookingTime: "60 mins",
    cookingTimeInMinutes: 60,
    difficulty: "Hard",
    servings: 4,
    matchPercentage: 85,
    isVeg: false,
    isPremium: true,
    ingredients: [
      { name: "chicken", available: true },
      { name: "rice", available: true },
      { name: "onion", available: true },
      { name: "yogurt", available: false },
    ],
    steps: [
      "Marinate chicken with yogurt, green chilies, and mint",
      "Layer raw marinated chicken at the bottom",
      "Add par-boiled rice on top",
      "Seal and cook on dum for 45 minutes",
    ],
  },
  {
    id: "1b",
    name: "Chicken Biryani",
    variation: "Kolkata Style",
    description: "Mildly spiced biryani with potatoes and a subtle sweetness",
    cookingTime: "50 mins",
    cookingTimeInMinutes: 50,
    difficulty: "Medium",
    servings: 4,
    matchPercentage: 80,
    isVeg: false,
    isPremium: true,
    ingredients: [
      { name: "chicken", available: true },
      { name: "rice", available: true },
      { name: "potato", available: true },
      { name: "rose water", available: false },
    ],
    steps: [
      "Cook chicken in a light yogurt-based gravy",
      "Fry potatoes until golden",
      "Layer rice with chicken and potatoes",
      "Add rose water and cook on dum",
    ],
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Veg", value: "veg" },
  { label: "Non-Veg", value: "nonveg" },
  { label: "Quick (<30 min)", value: "quick" },
  { label: "Easy", value: "easy" },
];

const Recipes = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [showPremium, setShowPremium] = useState(false);

  const generateRecipes = () => {
    if (ingredients.length === 0) return;

    setIsLoading(true);
    // Simulate AI processing
    setTimeout(() => {
      // Update mock recipes based on user ingredients
      const updatedRecipes = mockRecipes.map((recipe) => ({
        ...recipe,
        ingredients: recipe.ingredients.map((ing) => ({
          ...ing,
          available: ingredients.some(
            (userIng) =>
              userIng.toLowerCase().includes(ing.name.toLowerCase()) ||
              ing.name.toLowerCase().includes(userIng.toLowerCase())
          ),
        })),
      }));

      // Recalculate match percentage
      updatedRecipes.forEach((recipe) => {
        const available = recipe.ingredients.filter((i) => i.available).length;
        recipe.matchPercentage = Math.round(
          (available / recipe.ingredients.length) * 100
        );
      });

      // Sort by match percentage
      updatedRecipes.sort((a, b) => b.matchPercentage - a.matchPercentage);

      setRecipes(updatedRecipes);
      setIsLoading(false);
    }, 1500);
  };

  const getFilteredRecipes = () => {
    if (activeFilter === "all") return recipes;

    return recipes.filter((recipe) => {
      switch (activeFilter) {
        case "veg":
          return recipe.isVeg === true;
        case "nonveg":
          return recipe.isVeg === false;
        case "quick":
          return recipe.cookingTimeInMinutes! < 30;
        case "easy":
          return recipe.difficulty === "Easy";
        default:
          return true;
      }
    });
  };

  const filteredRecipes = getFilteredRecipes();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
            AI Recipe Generator
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Enter your available ingredients and let our AI suggest the perfect recipes
          </p>
        </div>

        {/* Input Section */}
        <div className="max-w-2xl mx-auto mb-10 bg-card p-6 rounded-2xl shadow-card">
          <IngredientInput
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
          <Button
            variant="hero"
            size="lg"
            className="w-full mt-6"
            onClick={generateRecipes}
            disabled={ingredients.length === 0 || isLoading}
          >
            {isLoading ? (
              <>
                <Sparkles className="w-5 h-5 animate-spin" />
                Generating Recipes...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate Recipes
              </>
            )}
          </Button>
        </div>

        {/* Filters */}
        {recipes.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <Filter className="w-4 h-4 text-muted-foreground" />
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        )}

        {/* Results */}
        {recipes.length > 0 ? (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                Found {filteredRecipes.length} {activeFilter !== "all" ? `${filters.find(f => f.value === activeFilter)?.label.toLowerCase()} ` : ""}recipes
              </h2>
              <Button
                variant={showPremium ? "hero" : "outline"}
                size="sm"
                onClick={() => setShowPremium(!showPremium)}
              >
                <ChefHat className="w-4 h-4" />
                {showPremium ? "Hide" : "Show"} Premium Variations
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
              {showPremium &&
                premiumVariations
                  .filter((recipe) => {
                    if (activeFilter === "all") return true;
                    switch (activeFilter) {
                      case "veg":
                        return recipe.isVeg === true;
                      case "nonveg":
                        return recipe.isVeg === false;
                      case "quick":
                        return recipe.cookingTimeInMinutes! < 30;
                      case "easy":
                        return recipe.difficulty === "Easy";
                      default:
                        return true;
                    }
                  })
                  .map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
            </div>

            {filteredRecipes.length === 0 && !showPremium && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No recipes match the selected filter</p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <ChefHat className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No recipes yet</h3>
            <p className="text-muted-foreground">
              Add some ingredients above to get started
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
