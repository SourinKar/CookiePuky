import { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ExternalLink, ShoppingBag, AlertCircle } from "lucide-react";
import type { RecipeIngredient } from "@/data/recipes";

interface IngredientAvailabilityProps {
  ingredients: RecipeIngredient[];
  onAvailabilityChange?: (availableIngredients: string[]) => void;
  recipeName?: string;
}

const groceryPlatforms = [
  { name: "Blinkit", url: "https://blinkit.com/search?q=", color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200" },
  { name: "Zepto", url: "https://www.zeptonow.com/search?query=", color: "bg-red-100 text-red-800 hover:bg-red-200" },
  { name: "Instamart", url: "https://www.swiggy.com/instamart/search?query=", color: "bg-orange-100 text-orange-800 hover:bg-orange-200" },
];

export function IngredientAvailability({ ingredients, onAvailabilityChange, recipeName }: IngredientAvailabilityProps) {
  const [availability, setAvailability] = useState<Record<string, boolean>>(
    ingredients.reduce((acc, ing) => {
      acc[ing.id] = true;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const [showConfirmation, setShowConfirmation] = useState(false);
  const missingIngredients = ingredients.filter((ing) => !availability[ing.id]);
  const totalCost = ingredients.reduce((sum, ing) => sum + ing.quantity * ing.pricePerUnit, 0);
  const missingCost = missingIngredients.reduce((sum, ing) => sum + ing.quantity * ing.pricePerUnit, 0);

  const handleAvailabilityChange = (ingredientId: string, available: boolean) => {
    const newAvailability = { ...availability, [ingredientId]: available };
    setAvailability(newAvailability);
    
    if (onAvailabilityChange) {
      const available_ids = Object.keys(newAvailability).filter((key) => newAvailability[key]);
      onAvailabilityChange(available_ids);
    }
  };

  const handleProceed = () => {
    if (missingIngredients.length > 0) {
      setShowConfirmation(true);
    }
  };

  return (
    <Card className="border-0 bg-card shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Ingredient Availability</h3>
            {recipeName && <p className="text-sm text-muted-foreground mt-1">For: {recipeName}</p>}
          </div>
          <Badge variant="outline" className="bg-blue-50">
            {ingredients.length} ingredients
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Ingredients List */}
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {ingredients.map((ingredient) => {
            const isAvailable = availability[ingredient.id];
            const ingredientCost = ingredient.quantity * ingredient.pricePerUnit;

            return (
              <div key={ingredient.id} className="p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                <div className="flex items-start gap-3 mb-2">
                  <Checkbox
                    id={ingredient.id}
                    checked={isAvailable}
                    onCheckedChange={(checked) => handleAvailabilityChange(ingredient.id, checked as boolean)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <label
                      htmlFor={ingredient.id}
                      className="text-sm font-medium cursor-pointer block"
                    >
                      {ingredient.name}
                    </label>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">
                        {ingredient.quantity} {ingredient.unit}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end flex-shrink-0">
                    <p className="font-bold text-primary text-lg">₹{ingredientCost.toFixed(0)}</p>
                    <Badge
                      variant={isAvailable ? "default" : "destructive"}
                      className="text-xs mt-1"
                    >
                      {isAvailable ? "Available" : "Missing"}
                    </Badge>
                  </div>
                </div>

                {/* Show grocery links only for missing ingredients */}
                {!isAvailable && (
                  <div className="ml-8 mt-2 pt-2 border-t border-muted flex gap-1.5 flex-wrap">
                    {groceryPlatforms.map((platform) => (
                      <a
                        key={platform.name}
                        href={`${platform.url}${encodeURIComponent(ingredient.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${platform.color} flex items-center gap-1 group`}
                        title={`Buy on ${platform.name}`}
                      >
                        {platform.name}
                        <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Cost Summary */}
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Total Ingredients Cost:</span>
            <span className="font-semibold">₹{totalCost.toFixed(0)}</span>
          </div>
          {missingCost > 0 && (
            <div className="flex justify-between text-sm text-destructive">
              <span className="text-muted-foreground">Missing Items Cost:</span>
              <span className="font-semibold">₹{missingCost.toFixed(0)}</span>
            </div>
          )}
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Available Items Cost:</span>
            <span className="font-semibold text-green-600">₹{(totalCost - missingCost).toFixed(0)}</span>
          </div>
        </div>

        {/* Missing Items Alert */}
        {missingIngredients.length > 0 && (
          <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg flex gap-2">
            <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-destructive">
                {missingIngredients.length} missing ingredient{missingIngredients.length !== 1 ? 's' : ''}
              </p>
              <p className="text-destructive/80 text-xs mt-1">
                You can purchase them from online grocery platforms
              </p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4">
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            onClick={handleProceed}
            disabled={ingredients.length === 0}
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            {missingIngredients.length > 0 ? "Find Missing Items" : "Proceed to Cook"}
          </Button>
        </div>
      </CardContent>

      {/* Confirmation Dialog for Missing Items */}
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Purchase Missing Ingredients</AlertDialogTitle>
            <AlertDialogDescription>
              {missingIngredients.length > 0 ? (
                <div className="space-y-3 mt-3">
                  <p>
                    We found <strong>{missingIngredients.length}</strong> missing ingredient{missingIngredients.length !== 1 ? 's' : ''} worth <strong>₹{missingCost.toFixed(0)}</strong>
                  </p>
                  <p className="text-sm">Select a grocery platform to purchase:</p>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {missingIngredients.map((ingredient) => (
                      <div key={ingredient.id} className="text-sm p-2 bg-muted rounded">
                        <p className="font-medium">{ingredient.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {ingredient.quantity} {ingredient.unit} × ₹{ingredient.pricePerUnit.toFixed(0)} = ₹{(ingredient.quantity * ingredient.pricePerUnit).toFixed(0)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </AlertDialogDescription>
          </AlertDialogHeader>

          {missingIngredients.length > 0 && (
            <div className="space-y-2 my-4">
              <p className="text-sm font-medium">Quick Links:</p>
              <div className="grid grid-cols-3 gap-2">
                {groceryPlatforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={`${platform.url}${encodeURIComponent(missingIngredients.map((i) => i.name).join(" "))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-2 rounded text-xs font-medium transition-colors flex items-center justify-center gap-1 ${platform.color}`}
                  >
                    {platform.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <AlertDialogCancel className="flex-1">Cancel</AlertDialogCancel>
            <AlertDialogAction className="flex-1" asChild>
              <a
                href={`${groceryPlatforms[0].url}${encodeURIComponent(missingIngredients.map((i) => i.name).join(" "))}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Blinkit
              </a>
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}
