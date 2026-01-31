import { useState } from "react";
import { Sparkles, Filter, ChefHat, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IngredientInput } from "@/components/IngredientInput";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RecipeDetailsModal } from "@/components/RecipeDetailsModal";
import { detailedRecipes, type DetailedRecipe } from "@/data/recipes";
import { Clock, Users, Flame, IndianRupee } from "lucide-react";

const categoryColors: Record<string, string> = {
  "North Indian": "bg-orange-100 text-orange-800",
  "South Indian": "bg-red-100 text-red-800",
  "Street Food": "bg-yellow-100 text-yellow-800",
  "Vegetarian": "bg-green-100 text-green-800",
  "Non-Vegetarian": "bg-purple-100 text-purple-800",
  "Desserts": "bg-pink-100 text-pink-800",
  "Beverages": "bg-blue-100 text-blue-800",
};

const difficultyEmojis: Record<string, string> = {
  Easy: "🟢",
  Medium: "🟡",
  Hard: "🔴",
};

const filters = [
  { label: "All", value: "all" },
  { label: "Vegetarian", value: "vegetarian" },
  { label: "Non-Vegetarian", value: "non-vegetarian" },
  { label: "North Indian", value: "north-indian" },
  { label: "South Indian", value: "south-indian" },
  { label: "Street Food", value: "street-food" },
  { label: "Easy", value: "easy" },
  { label: "Quick (<30 min)", value: "quick" },
];

function RecipesV2Component() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedRecipe, setSelectedRecipe] = useState<DetailedRecipe | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [matchPercentages, setMatchPercentages] = useState<Record<string, number>>({});

  const calculateMatchPercentage = (recipe: DetailedRecipe): number => {
    if (ingredients.length === 0) return 0;

    const matchedIngredients = recipe.ingredients.filter((ing) =>
      ingredients.some(
        (userIng) =>
          userIng.toLowerCase().includes(ing.name.toLowerCase()) ||
          ing.name.toLowerCase().includes(userIng.toLowerCase())
      )
    ).length;

    return Math.round((matchedIngredients / recipe.ingredients.length) * 100);
  };

  const handleGenerateRecipes = () => {
    if (ingredients.length === 0) return;

    const percentages: Record<string, number> = {};
    detailedRecipes.forEach((recipe) => {
      percentages[recipe.id] = calculateMatchPercentage(recipe);
    });
    setMatchPercentages(percentages);
  };

  const getFilteredRecipes = (): DetailedRecipe[] => {
    let filtered = detailedRecipes;

    // Apply ingredient filter (only show if match percentage > 0)
    if (ingredients.length > 0) {
      filtered = filtered.filter((recipe) => {
        const matchPercentage = matchPercentages[recipe.id] || 0;
        return matchPercentage > 0;
      });

      // Sort by match percentage descending
      filtered.sort((a, b) => {
        const matchA = matchPercentages[a.id] || 0;
        const matchB = matchPercentages[b.id] || 0;
        return matchB - matchA;
      });
    }

    // Apply category/difficulty filter
    if (activeFilter === "all") return filtered;

    return filtered.filter((recipe) => {
      switch (activeFilter) {
        case "vegetarian":
          return recipe.isVeg === true;
        case "non-vegetarian":
          return recipe.isVeg === false;
        case "north-indian":
          return recipe.category === "North Indian";
        case "south-indian":
          return recipe.category === "South Indian";
        case "street-food":
          return recipe.category === "Street Food";
        case "easy":
          return recipe.difficulty === "Easy";
        case "quick":
          return recipe.cookingTime < 30;
        default:
          return true;
      }
    });
  };

  const handleRecipeClick = (recipe: DetailedRecipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const filteredRecipes = getFilteredRecipes();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-3 flex items-center justify-center gap-2">
            <BookOpen className="w-8 h-8 text-primary" />
            Indian Recipes Explorer
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover delicious Indian recipes with detailed ingredients, pricing, and step-by-step instructions. Find recipes based on what you have!
          </p>
        </div>

        {/* Input Section */}
        <div className="max-w-2xl mx-auto mb-10 bg-card p-6 rounded-2xl shadow-card border border-primary/5">
          <h2 className="text-lg font-semibold mb-4">Find Recipes by Ingredients</h2>
          <IngredientInput
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
          <Button
            variant="hero"
            size="lg"
            className="w-full mt-6"
            onClick={handleGenerateRecipes}
            disabled={ingredients.length === 0}
          >
            <Sparkles className="w-5 h-5" />
            Search Recipes
          </Button>
        </div>

        {/* Filters */}
        {filteredRecipes.length > 0 || ingredients.length === 0 ? (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 px-4">
            <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeFilter === filter.value
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {/* Results */}
        {filteredRecipes.length > 0 ? (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold">
                Found {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''}
              </h2>
              {ingredients.length > 0 && (
                <p className="text-sm text-muted-foreground mt-1">
                  Sorted by ingredient match
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => {
                const matchPercentage = matchPercentages[recipe.id] || 0;

                return (
                  <Card
                    key={recipe.id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-card group"
                    onClick={() => handleRecipeClick(recipe)}
                  >
                    <CardHeader className="pb-3 relative">
                      {/* Match Badge */}
                      {ingredients.length > 0 && (
                        <div className="absolute top-3 right-3 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary-foreground">
                            {matchPercentage}%
                          </span>
                        </div>
                      )}

                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <h3 className="font-display text-lg font-bold flex-1 group-hover:text-primary transition-colors">
                            {recipe.name}
                          </h3>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {recipe.description}
                        </p>
                      </div>

                      {/* Category Badge */}
                      <Badge className={`mt-2 w-fit ${categoryColors[recipe.category]}`}>
                        {recipe.category}
                      </Badge>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Quick Info */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 bg-muted rounded flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                          <div>
                            <p className="text-xs text-muted-foreground">Time</p>
                            <p className="text-sm font-medium">{recipe.cookingTime}m</p>
                          </div>
                        </div>

                        <div className="p-2 bg-muted rounded flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary flex-shrink-0" />
                          <div>
                            <p className="text-xs text-muted-foreground">Serves</p>
                            <p className="text-sm font-medium">{recipe.servings}</p>
                          </div>
                        </div>

                        <div className="p-2 bg-muted rounded flex items-center gap-2">
                          <Flame className="w-4 h-4 text-primary flex-shrink-0" />
                          <div>
                            <p className="text-xs text-muted-foreground">Level</p>
                            <p className="text-sm font-medium">
                              {difficultyEmojis[recipe.difficulty]} {recipe.difficulty}
                            </p>
                          </div>
                        </div>

                        <div className="p-2 bg-muted rounded flex items-center gap-2">
                          <IndianRupee className="w-4 h-4 text-primary flex-shrink-0" />
                          <div>
                            <p className="text-xs text-muted-foreground">Cost</p>
                            <p className="text-sm font-medium">₹{recipe.estimatedCost}</p>
                          </div>
                        </div>
                      </div>

                      {/* Ingredients Preview */}
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-2">
                          {recipe.ingredients.length} Ingredients
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {recipe.ingredients.slice(0, 5).map((ing) => (
                            <Badge
                              key={ing.id}
                              variant="secondary"
                              className="text-xs"
                            >
                              {ing.name.split(" ")[0]}
                            </Badge>
                          ))}
                          {recipe.ingredients.length > 5 && (
                            <Badge variant="outline" className="text-xs">
                              +{recipe.ingredients.length - 5} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* View Details Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        View Details & Cook
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ) : ingredients.length > 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <ChefHat className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No recipes found</h3>
            <p className="text-muted-foreground">
              Try different ingredients or use the category filters to explore more recipes
            </p>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Explore Our Recipe Collection</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We have {detailedRecipes.length} delicious Indian recipes. Add ingredients above to find matching recipes, or browse by category below!
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {detailedRecipes.slice(0, 6).map((recipe) => (
                <Card
                  key={recipe.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-card group"
                  onClick={() => handleRecipeClick(recipe)}
                >
                  <CardHeader className="pb-3">
                    <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                      {recipe.name}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                      {recipe.description}
                    </p>
                    <Badge className={`mt-2 w-fit ${categoryColors[recipe.category]}`}>
                      {recipe.category}
                    </Badge>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-muted rounded text-center">
                        <p className="text-xs text-muted-foreground">Time</p>
                        <p className="text-sm font-medium">{recipe.cookingTime}m</p>
                      </div>
                      <div className="p-2 bg-muted rounded text-center">
                        <p className="text-xs text-muted-foreground">₹{recipe.estimatedCost}</p>
                        <p className="text-sm font-medium">Cost</p>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Recipe Details Modal */}
      <RecipeDetailsModal
        recipe={selectedRecipe}
        open={showModal}
        onOpenChange={setShowModal}
      />
    </div>
  );
}

export default RecipesV2Component;
