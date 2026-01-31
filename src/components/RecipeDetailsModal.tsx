import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IngredientAvailability } from "./IngredientAvailability";
import { StepByStepGuide } from "./StepByStepGuide";
import { Clock, Users, Flame, IndianRupee, Lightbulb, ChefHat } from "lucide-react";
import type { DetailedRecipe } from "@/data/recipes";

interface RecipeDetailsModalProps {
  recipe: DetailedRecipe | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

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

export function RecipeDetailsModal({ recipe, open, onOpenChange }: RecipeDetailsModalProps) {
  const [expandedSteps, setExpandedSteps] = useState<number[]>([]);
  const [showCookingGuide, setShowCookingGuide] = useState(false);

  if (!recipe) return null;

  const toggleStep = (index: number) => {
    setExpandedSteps((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <ScrollArea className="h-full">
          <div className="p-6">
            <DialogHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <DialogTitle className="text-2xl font-bold">{recipe.name}</DialogTitle>
                  <DialogDescription className="mt-2">
                    {recipe.description}
                  </DialogDescription>
                </div>
                <Badge className={categoryColors[recipe.category]}>
                  {recipe.category}
                </Badge>
              </div>
            </DialogHeader>

            {/* Toggle between Recipe Info and Cooking Guide */}
            <div className="flex gap-2 mt-4 border-b pb-4">
              <Button
                variant={!showCookingGuide ? "default" : "outline"}
                size="sm"
                onClick={() => setShowCookingGuide(false)}
              >
                📋 Recipe Details
              </Button>
              <Button
                variant={showCookingGuide ? "default" : "outline"}
                size="sm"
                onClick={() => setShowCookingGuide(true)}
              >
                <ChefHat className="w-4 h-4 mr-2" />
                👨‍🍳 Start Cooking
              </Button>
            </div>

            <div className="space-y-6 mt-6">
              {!showCookingGuide ? (
                <>
                  {/* Recipe Details View */}
                  {/* Quick Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-muted-foreground">
                          Cooking Time
                        </span>
                      </div>
                      <p className="font-semibold">{recipe.cookingTime} mins</p>
                    </div>

                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-muted-foreground">
                          Servings
                        </span>
                      </div>
                      <p className="font-semibold">{recipe.servings} people</p>
                    </div>

                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Flame className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-muted-foreground">
                          Difficulty
                        </span>
                      </div>
                      <p className="font-semibold">
                        {difficultyEmojis[recipe.difficulty]} {recipe.difficulty}
                      </p>
                    </div>

                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <IndianRupee className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-muted-foreground">
                          Approx Cost
                        </span>
                      </div>
                      <p className="font-semibold">₹{recipe.estimatedCost}</p>
                    </div>
                  </div>

                  {/* Ingredient Availability Section */}
                  <IngredientAvailability
                    ingredients={recipe.ingredients}
                    recipeName={recipe.name}
                  />

                  {/* Ingredients List with Pricing */}
                  <Card className="border-0 bg-muted p-4">
                    <h3 className="font-semibold mb-4">Ingredients with Pricing</h3>
                    <div className="space-y-2">
                      {recipe.ingredients.map((ing) => (
                        <div key={ing.id} className="p-2 bg-background rounded border text-sm">
                          <div className="flex justify-between items-start gap-2">
                            <span className="font-medium">{ing.name}</span>
                            <span className="font-bold text-primary whitespace-nowrap">
                              ₹{(ing.quantity * ing.pricePerUnit).toFixed(0)}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {ing.quantity} {ing.unit} × ₹{ing.pricePerUnit.toFixed(0)}/unit
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-3 italic">
                      ℹ️ Check availability below and use the links to purchase missing items
                    </p>
                  </Card>

                  {/* Cooking Steps Preview */}
                  <div>
                    <h3 className="font-semibold mb-3">Cooking Steps</h3>
                    <div className="space-y-2">
                      {recipe.steps.map((step, index) => (
                        <div
                          key={index}
                          className="border rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() => toggleStep(index)}
                            className="w-full p-3 text-left flex items-start gap-3 hover:bg-muted/50 transition-colors"
                          >
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                              {index + 1}
                            </span>
                            <span className="text-sm font-medium flex-1">{step}</span>
                            <span className="text-xs text-muted-foreground">
                              {expandedSteps.includes(index) ? "▼" : "▶"}
                            </span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tips */}
                  {recipe.tips && recipe.tips.length > 0 && (
                    <Card className="border-blue-200 bg-blue-50 p-4">
                      <div className="flex gap-3">
                        <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">Pro Tips</h4>
                          <ul className="space-y-1">
                            {recipe.tips.map((tip, index) => (
                              <li key={index} className="text-sm text-blue-800">
                                • {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 border-t">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => onOpenChange(false)}
                    >
                      Close
                    </Button>
                    <Button 
                      variant="default" 
                      className="flex-1"
                      onClick={() => setShowCookingGuide(true)}
                    >
                      <ChefHat className="w-4 h-4 mr-2" />
                      Start Cooking
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  {/* Cooking Guide View */}
                  <StepByStepGuide
                    recipeName={recipe.name}
                    steps={recipe.steps}
                    ingredients={recipe.ingredients}
                    cookingTime={recipe.cookingTime}
                    servings={recipe.servings}
                  />

                  {/* Close Button for Cooking Guide */}
                  <div className="flex gap-2 pt-4 border-t">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setShowCookingGuide(false)}
                    >
                      ← Back to Details
                    </Button>
                    <Button
                      variant="default"
                      className="flex-1"
                      onClick={() => onOpenChange(false)}
                    >
                      Close Recipe
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
