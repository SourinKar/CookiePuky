import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { ingredientDatabase } from "@/data/ingredients";

const categories = ["All", ...new Set(ingredientDatabase.map((ing) => ing.category))];

function IngredientsNewComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredIngredients = ingredientDatabase.filter((ing) => {
    const matchesSearch =
      ing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ing.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || ing.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Ingredient Catalog
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Browse our complete collection of ingredients with prices. Use recipe details to buy missing items!
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search ingredients by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-11"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 items-center">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ingredients Grid */}
        {filteredIngredients.length > 0 ? (
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredIngredients.map((ingredient) => (
                <Card
                  key={ingredient.id}
                  className="border-0 bg-card hover:shadow-md transition-shadow"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-base">{ingredient.name}</h3>
                        {ingredient.description && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {ingredient.description}
                          </p>
                        )}
                      </div>
                      <Badge variant="outline" className="flex-shrink-0">
                        {ingredient.category}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    {/* Price Info */}
                    <div className="p-3 bg-gradient-hero rounded-lg">
                      <p className="text-xs text-primary-foreground/80">Price per {ingredient.unit}</p>
                      <p className="text-2xl font-bold text-primary-foreground">
                        ₹{ingredient.pricePerUnit.toFixed(0)}
                      </p>
                    </div>

                    <p className="text-xs text-muted-foreground text-center">
                      To buy this ingredient, view a recipe and check ingredient details
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">
              No ingredients found matching your search
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Summary Stats */}
        <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-4">
          <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="pt-6">
              <p className="text-sm text-blue-900 font-medium">Total Ingredients</p>
              <p className="text-3xl font-bold text-blue-900 mt-2">
                {ingredientDatabase.length}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="pt-6">
              <p className="text-sm text-green-900 font-medium">Categories</p>
              <p className="text-3xl font-bold text-green-900 mt-2">
                {categories.length - 1}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-orange-50 to-orange-100">
            <CardContent className="pt-6">
              <p className="text-sm text-orange-900 font-medium">Avg. Price</p>
              <p className="text-3xl font-bold text-orange-900 mt-2">
                ₹{(ingredientDatabase.reduce((sum, ing) => sum + ing.pricePerUnit, 0) / ingredientDatabase.length).toFixed(0)}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default IngredientsNewComponent;
