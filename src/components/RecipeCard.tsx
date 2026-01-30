import { Clock, ChefHat, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Recipe {
  id: string;
  name: string;
  description: string;
  cookingTime: string;
  cookingTimeInMinutes?: number;
  difficulty: "Easy" | "Medium" | "Hard";
  servings: number;
  matchPercentage: number;
  isVeg?: boolean;
  ingredients: { name: string; available: boolean }[];
  steps: string[];
  isPremium?: boolean;
  variation?: string;
}

interface RecipeCardProps {
  recipe: Recipe;
}

const groceryLinks = {
  blinkit: "https://blinkit.com/search?q=",
  zepto: "https://www.zeptonow.com/search?query=",
  instamart: "https://www.swiggy.com/instamart/search?query=",
};

export function RecipeCard({ recipe }: RecipeCardProps) {
  const missingIngredients = recipe.ingredients.filter((i) => !i.available);

  return (
    <Card className="overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 animate-fade-in border-0 bg-card">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-display text-xl font-bold">{recipe.name}</h3>
              {recipe.isPremium && (
                <Badge className="bg-gradient-premium text-primary-foreground border-0">
                  Premium
                </Badge>
              )}
            </div>
            {recipe.variation && (
              <p className="text-sm text-primary font-medium">{recipe.variation}</p>
            )}
            <p className="text-sm text-muted-foreground">{recipe.description}</p>
          </div>
          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center">
            <span className="text-lg font-bold text-primary-foreground">
              {recipe.matchPercentage}%
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-3">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            {recipe.cookingTime}
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <ChefHat className="w-4 h-4" />
            {recipe.difficulty}
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            {recipe.servings} servings
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Ingredients */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Ingredients</h4>
          <div className="flex flex-wrap gap-1.5">
            {recipe.ingredients.map((ingredient) => (
              <span
                key={ingredient.name}
                className={`px-2 py-1 rounded-md text-xs font-medium ${
                  ingredient.available
                    ? "bg-secondary/10 text-secondary"
                    : "bg-destructive/10 text-destructive"
                }`}
              >
                {ingredient.name}
              </span>
            ))}
          </div>
        </div>

        {/* Missing Ingredients with Grocery Links */}
        {missingIngredients.length > 0 && (
          <div className="p-3 bg-muted rounded-lg space-y-2">
            <h4 className="font-semibold text-sm flex items-center gap-2">
              🛒 Missing Ingredients
            </h4>
            <div className="space-y-2">
              {missingIngredients.map((ingredient) => (
                <div key={ingredient.name} className="flex items-center justify-between">
                  <span className="text-sm">{ingredient.name}</span>
                  <div className="flex gap-1">
                    <a
                      href={`${groceryLinks.blinkit}${encodeURIComponent(ingredient.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 bg-accent/20 hover:bg-accent/30 rounded text-xs font-medium transition-colors flex items-center gap-1"
                    >
                      Blinkit <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={`${groceryLinks.zepto}${encodeURIComponent(ingredient.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 bg-primary/20 hover:bg-primary/30 rounded text-xs font-medium transition-colors flex items-center gap-1"
                    >
                      Zepto <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={`${groceryLinks.instamart}${encodeURIComponent(ingredient.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 bg-secondary/20 hover:bg-secondary/30 rounded text-xs font-medium transition-colors flex items-center gap-1"
                    >
                      Instamart <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cooking Steps */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Steps</h4>
          <ol className="space-y-2">
            {recipe.steps.map((step, index) => (
              <li key={index} className="flex gap-3 text-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </span>
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <Button variant="outline" className="w-full mt-4">
          Save Recipe
        </Button>
      </CardContent>
    </Card>
  );
}
