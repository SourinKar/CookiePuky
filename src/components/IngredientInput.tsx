import { useState, KeyboardEvent } from "react";
import { X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface IngredientInputProps {
  ingredients: string[];
  setIngredients: (ingredients: string[]) => void;
}

export function IngredientInput({ ingredients, setIngredients }: IngredientInputProps) {
  const [inputValue, setInputValue] = useState("");

  const addIngredient = (ingredient: string) => {
    const trimmed = ingredient.trim().toLowerCase();
    if (trimmed && !ingredients.includes(trimmed)) {
      setIngredients([...ingredients, trimmed]);
    }
    setInputValue("");
  };

  const removeIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter((i) => i !== ingredient));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addIngredient(inputValue);
    }
  };

  const suggestedIngredients = [
    "chicken", "rice", "onion", "tomato", "garlic", "ginger", "potato", "paneer"
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type an ingredient and press Enter..."
          className="flex-1 h-12 text-base"
        />
        <Button
          onClick={() => addIngredient(inputValue)}
          variant="hero"
          size="icon"
          className="h-12 w-12"
        >
          <Plus className="w-5 h-5" />
        </Button>
      </div>

      {/* Ingredient Tags */}
      {ingredients.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {ingredients.map((ingredient) => (
            <span
              key={ingredient}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium animate-scale-in"
            >
              {ingredient}
              <button
                onClick={() => removeIngredient(ingredient)}
                className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Quick Add Suggestions */}
      {ingredients.length === 0 && (
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Quick add:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedIngredients.map((ingredient) => (
              <button
                key={ingredient}
                onClick={() => addIngredient(ingredient)}
                className="px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-full text-sm font-medium transition-colors hover:scale-105 active:scale-100"
              >
                + {ingredient}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
