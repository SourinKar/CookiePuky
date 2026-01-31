# 📚 Component & File Documentation

## Project Structure Overview

```
pantry-pal-main/
├── src/
│   ├── data/
│   │   ├── ingredients.ts          ← Ingredient database (40+ items)
│   │   └── recipes.ts              ← Recipe database (10+ recipes)
│   ├── components/
│   │   ├── IngredientAvailability.tsx    ← New: Availability checker
│   │   ├── RecipeDetailsModal.tsx        ← New: Recipe viewer modal
│   │   ├── RecipeCard.tsx          ← Existing: Recipe card display
│   │   ├── IngredientInput.tsx      ← Existing: Ingredient search input
│   │   ├── Navbar.tsx              ← Existing: Navigation
│   │   ├── Footer.tsx              ← Existing: Footer
│   │   └── ui/                     ← shadcn/ui components
│   ├── pages/
│   │   ├── RecipesV2.tsx           ← New: Enhanced recipes page
│   │   ├── Recipes.tsx             ← Updated: Routes to V2
│   │   ├── IngredientsNew.tsx       ← New: Ingredient catalog
│   │   ├── Ingredients.tsx         ← Updated: Routes to new version
│   │   ├── Index.tsx               ← Home page
│   │   ├── Pricing.tsx             ← Pricing page
│   │   ├── Services.tsx            ← Services page
│   │   ├── FAQs.tsx                ← FAQs page
│   │   └── NotFound.tsx            ← 404 page
│   ├── hooks/
│   │   ├── use-dark-mode.ts        ← Dark mode hook
│   │   ├── use-mobile.tsx          ← Mobile detection
│   │   └── use-toast.ts            ← Toast notifications
│   ├── lib/
│   │   └── utils.ts                ← Utility functions
│   ├── App.tsx                     ← Main app router
│   ├── main.tsx                    ← Entry point
│   ├── index.css                   ← Global styles
│   └── vite-env.d.ts               ← Vite env types
├── public/
│   └── robots.txt
├── FEATURES.md                     ← Complete feature documentation
├── QUICKSTART.md                   ← Quick start guide
├── package.json                    ← Dependencies and scripts
├── vite.config.ts                  ← Vite configuration
├── tailwind.config.ts              ← Tailwind CSS config
├── tsconfig.json                   ← TypeScript configuration
└── README.md                       ← Project README
```

---

## 🆕 NEW FILES CREATED

### 1. **src/data/ingredients.ts**
**Purpose**: Central ingredient database with pricing

**Key Exports**:
```typescript
export interface Ingredient {
  id: string;
  name: string;
  pricePerUnit: number;
  unit: string;
  category: string;
  description?: string;
}

export const ingredientDatabase: Ingredient[];
```

**Contains**:
- 40+ ingredients across 8 categories
- Real-world pricing (in INR)
- Detailed descriptions
- Unit of measurement

**Usage**:
```typescript
import { ingredientDatabase } from "@/data/ingredients";
const rice = ingredientDatabase.find(i => i.id === "basmati-rice");
console.log(rice.pricePerUnit); // ₹80
```

---

### 2. **src/data/recipes.ts**
**Purpose**: Comprehensive recipe database with detailed instructions

**Key Exports**:
```typescript
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
  tips?: string[];
}

export const detailedRecipes: DetailedRecipe[];
```

**Contains**:
- 10 authentic Indian recipes
- Each with 10-15 ingredients
- Step-by-step cooking instructions (10-15 steps)
- Pro tips for each recipe
- Cost calculations

**Usage**:
```typescript
import { detailedRecipes } from "@/data/recipes";
const biryani = detailedRecipes.find(r => r.id === "chicken-biryani");
console.log(biryani.estimatedCost); // ₹350
```

---

### 3. **src/components/IngredientAvailability.tsx**
**Purpose**: Interactive component to check ingredient availability and calculate costs

**Props**:
```typescript
interface IngredientAvailabilityProps {
  ingredients: RecipeIngredient[];
  onAvailabilityChange?: (availableIngredients: string[]) => void;
  recipeName?: string;
}
```

**Features**:
- ✅ Checkbox to mark availability
- 💰 Real-time cost calculation
- 💸 Shows cost breakdown:
  - Total ingredients cost
  - Missing items cost
  - Available items cost
- 🛒 Quick shopping links (Blinkit, Zepto, Instamart)
- 📋 Confirmation dialog for missing items

**Key Functions**:
- `handleAvailabilityChange()` - Updates ingredient availability
- `handleProceed()` - Shows confirmation for missing items

**Usage**:
```typescript
<IngredientAvailability
  ingredients={recipe.ingredients}
  recipeName={recipe.name}
  onAvailabilityChange={(available) => console.log(available)}
/>
```

---

### 4. **src/components/RecipeDetailsModal.tsx**
**Purpose**: Full-screen modal displaying complete recipe information

**Props**:
```typescript
interface RecipeDetailsModalProps {
  recipe: DetailedRecipe | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
```

**Displays**:
- 📋 Recipe name and description
- 🏷️ Category badge
- ⏱️ Cooking time
- 👥 Servings
- 🔥 Difficulty level
- ₹ Estimated cost
- 📊 Ingredient list with pricing
- 👣 Step-by-step instructions
- 💡 Pro tips
- 🛒 Ingredient availability checker
- 💾 Save recipe button

**Features**:
- Scrollable content
- Responsive layout
- Category color coding
- Difficulty emoji indicators
- All UI from shadcn/ui

**Usage**:
```typescript
<RecipeDetailsModal
  recipe={selectedRecipe}
  open={showModal}
  onOpenChange={setShowModal}
/>
```

---

## 🆕 UPDATED PAGES

### 5. **src/pages/RecipesV2.tsx**
**Purpose**: Enhanced recipes page with search, filtering, and sorting

**Key Features**:
- 🔍 Search recipes by ingredients
- 📊 Match percentage calculation (0-100%)
- 🔀 Automatic sorting by match percentage
- 🏷️ Multiple filter options:
  - All / Vegetarian / Non-Vegetarian
  - North Indian / South Indian / Street Food
  - Easy recipes / Quick recipes (<30 min)
- 📱 Responsive grid layout (1-3 columns)
- 🎨 Beautiful recipe cards with:
  - Match percentage badge
  - Cooking time & servings
  - Difficulty indicator
  - Cost display
  - Ingredient preview
  - View details button

**State Management**:
```typescript
const [ingredients, setIngredients] = useState<string[]>([]);
const [activeFilter, setActiveFilter] = useState("all");
const [selectedRecipe, setSelectedRecipe] = useState<DetailedRecipe | null>(null);
const [showModal, setShowModal] = useState(false);
const [matchPercentages, setMatchPercentages] = useState<Record<string, number>>({});
```

**Key Functions**:
- `calculateMatchPercentage()` - Compares user ingredients with recipe
- `getFilteredRecipes()` - Applies filters and sorting
- `handleGenerateRecipes()` - Calculates matches
- `handleRecipeClick()` - Opens recipe modal

---

### 6. **src/pages/IngredientsNew.tsx**
**Purpose**: Ingredient catalog with search, filtering, and shopping cart

**Key Features**:
- 🔎 Search ingredients by name/description
- 🏷️ Filter by category
- 🛒 Add to cart functionality
- 💰 Price display per unit
- 📦 Cart summary with total
- 📊 Statistics:
  - Total ingredients count
  - Number of categories
  - Average ingredient price

**State Management**:
```typescript
const [searchTerm, setSearchTerm] = useState("");
const [activeCategory, setActiveCategory] = useState("All");
const [cart, setCart] = useState<string[]>([]);
```

**UI Elements**:
- Search input with icon
- Category filter buttons
- Cart summary card
- Ingredient grid (3 columns on desktop)
- Statistics cards

---

### 7. **src/pages/Recipes.tsx** (Updated)
**Purpose**: Router to new enhanced recipes page

**Before**:
```typescript
// Old implementation with 3 mock recipes
const Recipes = () => { ... }
```

**After**:
```typescript
import RecipesV2 from "./RecipesV2";

export default function Recipes() {
  return <RecipesV2 />;
}
```

---

### 8. **src/pages/Ingredients.tsx** (Updated)
**Purpose**: Router to new ingredient catalog page

**Before**:
```typescript
// Old implementation with emoji-based ingredients
const Ingredients = () => { ... }
```

**After**:
```typescript
import IngredientsNew from "./IngredientsNew";

export default function Ingredients() {
  return <IngredientsNew />;
}
```

---

## 📊 EXISTING COMPONENTS USED

### 9. **src/components/RecipeCard.tsx**
**Purpose**: Card display for individual recipes (legacy)

**Note**: Still available for reference, but RecipesV2 uses inline card rendering

---

### 10. **src/components/IngredientInput.tsx**
**Purpose**: Input component for adding ingredients

**Used in**: RecipesV2 for ingredient search

---

### 11. **src/components/Navbar.tsx**
**Purpose**: Top navigation bar

**Routes to**:
- Home (/)
- Recipes (/recipes)
- Ingredients (/ingredients)
- Pricing (/pricing)
- Services (/services)
- FAQs (/faqs)

---

## 🎨 UI COMPONENTS (shadcn/ui)

Used throughout the new components:

```typescript
// From shadcn/ui
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";
```

---

## 🔗 ICONS (Lucide React)

```typescript
import {
  Clock, Users, Flame, IndianRupee,       // Recipe info
  Search, Filter, ShoppingCart, ShoppingBag,  // Actions
  AlertCircle, ChefHat, BookOpen, ExternalLink,  // UI
  Lightbulb                                     // Tips
} from "lucide-react";
```

---

## 📈 Data Flow

```
App.tsx
├── Router
│   ├── /recipes → RecipesV2
│   │   ├── Search ingredients
│   │   ├── Calculate matches
│   │   ├── Display recipe cards
│   │   └── Click → RecipeDetailsModal
│   │       ├── Show full recipe
│   │       ├── Display ingredients
│   │       ├── IngredientAvailability
│   │       │   ├── Check availability
│   │       │   ├── Calculate cost
│   │       │   └── Show shopping links
│   │       └── Display steps
│   │
│   └── /ingredients → IngredientsNew
│       ├── Search/filter ingredients
│       ├── Display ingredient cards
│       ├── Add to cart
│       └── Show cart total
│
└── Navbar (Navigation between pages)
```

---

## 🔧 Customization Guide

### To Add a New Recipe:
1. Edit `src/data/recipes.ts`
2. Add to `detailedRecipes` array
3. Follow `DetailedRecipe` interface
4. Automatically appears in all pages

### To Add a New Ingredient:
1. Edit `src/data/ingredients.ts`
2. Add to `ingredientDatabase` array
3. Follow `Ingredient` interface
4. Use in recipes with `RecipeIngredient` model

### To Add New Filter:
1. Edit `src/pages/RecipesV2.tsx`
2. Add to `filters` array
3. Add case in `getFilteredRecipes()`

### To Change Colors/Styling:
1. Edit `categoryColors` object in components
2. Uses Tailwind CSS classes
3. Supports dark mode automatically

---

## 📋 Summary

**Total New Code**:
- 2 data files (ingredients + recipes)
- 2 new components (availability + modal)
- 2 new pages (RecipesV2 + IngredientsNew)
- 2 updated files (routing)

**Total Components**: 100+ UI components from shadcn/ui + custom logic
**Total Recipes**: 10 authentic Indian recipes
**Total Ingredients**: 40+ with real pricing
**Total Lines of Code**: ~2000+ lines of well-documented code

**Features Implemented**:
✅ Recipe search by ingredients
✅ Ingredient pricing system
✅ Availability tracking
✅ Cost calculation
✅ Online shopping integration
✅ Category filtering
✅ Responsive design
✅ Professional UI

---

**Ready to extend? Each component is self-contained and easily modifiable!**
