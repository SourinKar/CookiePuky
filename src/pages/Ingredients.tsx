import { useState } from "react";
import { Search, Leaf, Flame, MapPin, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const basicIngredients = [
  { name: "Onion", emoji: "🧅", category: "vegetable" },
  { name: "Potato", emoji: "🥔", category: "vegetable" },
  { name: "Rice", emoji: "🍚", category: "grain" },
  { name: "Tomato", emoji: "🍅", category: "vegetable" },
  { name: "Salt", emoji: "🧂", category: "spice" },
  { name: "Oil", emoji: "🫒", category: "oil" },
  { name: "Garlic", emoji: "🧄", category: "vegetable" },
  { name: "Ginger", emoji: "🫚", category: "spice" },
  { name: "Green Chili", emoji: "🌶️", category: "spice" },
  { name: "Cumin", emoji: "✨", category: "spice" },
  { name: "Turmeric", emoji: "💛", category: "spice" },
  { name: "Coriander", emoji: "🌿", category: "herb" },
];

const spices = [
  { name: "Garam Masala", emoji: "🌶️", category: "spice" },
  { name: "Red Chili Powder", emoji: "🔴", category: "spice" },
  { name: "Coriander Powder", emoji: "🟤", category: "spice" },
  { name: "Cumin Powder", emoji: "🟡", category: "spice" },
  { name: "Mustard Seeds", emoji: "🟡", category: "spice" },
  { name: "Fenugreek", emoji: "🌿", category: "spice" },
  { name: "Asafoetida", emoji: "✨", category: "spice" },
  { name: "Bay Leaves", emoji: "🍃", category: "spice" },
];

const exoticIngredients = [
  { name: "Saffron", emoji: "🧡", category: "exotic" },
  { name: "Truffle Oil", emoji: "🍄", category: "exotic" },
  { name: "Quinoa", emoji: "🌾", category: "exotic" },
  { name: "Avocado", emoji: "🥑", category: "exotic" },
  { name: "Chia Seeds", emoji: "⚫", category: "exotic" },
  { name: "Nutritional Yeast", emoji: "🧀", category: "exotic" },
];

const filters = [
  { label: "All", value: "all", icon: null },
  { label: "Most Used", value: "popular", icon: TrendingUp },
  { label: "Spices", value: "spices", icon: Flame },
  { label: "Exotic", value: "exotic", icon: Leaf },
  { label: "Indian", value: "indian", icon: MapPin },
];

const Ingredients = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const allIngredients = [...basicIngredients, ...spices, ...exoticIngredients];

  const filteredIngredients = allIngredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Ingredient Explorer
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Browse our collection of ingredients and discover new recipes
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search ingredients..."
              className="pl-12 h-12 text-base"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {filter.icon && <filter.icon className="w-4 h-4" />}
              {filter.label}
            </button>
          ))}
        </div>

        {/* Basic Ingredients */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center text-primary-foreground text-sm">
              🥗
            </span>
            Basic Ingredients
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {basicIngredients
              .filter((i) =>
                i.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((ingredient) => (
                <div
                  key={ingredient.name}
                  className="bg-card p-4 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer text-center group"
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                    {ingredient.emoji}
                  </div>
                  <p className="font-medium text-sm">{ingredient.name}</p>
                </div>
              ))}
          </div>
        </section>

        {/* Spices */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-premium flex items-center justify-center text-primary-foreground text-sm">
              🌶️
            </span>
            Spices & Seasonings
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {spices
              .filter((i) =>
                i.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((ingredient) => (
                <div
                  key={ingredient.name}
                  className="bg-card p-4 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer text-center group"
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                    {ingredient.emoji}
                  </div>
                  <p className="font-medium text-sm">{ingredient.name}</p>
                </div>
              ))}
          </div>
        </section>

        {/* Exotic */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-fresh flex items-center justify-center text-secondary-foreground text-sm">
              ✨
            </span>
            Exotic Ingredients
            <Badge className="bg-gradient-premium text-primary-foreground border-0">
              Premium
            </Badge>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {exoticIngredients
              .filter((i) =>
                i.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((ingredient) => (
                <div
                  key={ingredient.name}
                  className="bg-card p-4 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer text-center group relative overflow-hidden"
                >
                  <div className="absolute top-2 right-2">
                    <span className="text-xs px-2 py-0.5 bg-accent/20 rounded-full text-accent-foreground">
                      Exotic
                    </span>
                  </div>
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                    {ingredient.emoji}
                  </div>
                  <p className="font-medium text-sm">{ingredient.name}</p>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ingredients;
