import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ShoppingCart, Utensils, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Recipes",
    description: "Smart recipe suggestions based on your available ingredients",
  },
  {
    icon: ShoppingCart,
    title: "Instant Grocery Links",
    description: "One-click links to Blinkit, Zepto & Swiggy Instamart for missing items",
  },
  {
    icon: Utensils,
    title: "Multiple Variations",
    description: "Explore different styles of the same dish with Premium",
  },
  {
    icon: Crown,
    title: "Premium Features",
    description: "Unlock unlimited recipes and exclusive variations for just ₹49/month",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium animate-fade-in delay-0">
              <Sparkles className="w-4 h-4" />
              AI-Powered Recipe Generator
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight animate-fade-in delay-1">
              Turn Your{" "}
              <span className="text-gradient">Ingredients</span>{" "}
              Into Delicious Recipes
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-2">
              Stop wondering what to cook! Enter the ingredients you have, and let our AI suggest perfect Indian recipes with instant grocery links for anything you're missing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/recipes">
                  Start Cooking <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 animate-fade-in delay-4">
              {[
                { value: "1000+", label: "Recipes" },
                { value: "50+", label: "Cuisines" },
                { value: "10K+", label: "Happy Users" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why Choose CookiePuky?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The smartest way to discover and cook amazing recipes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`bg-card p-6 rounded-2xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in ${
                  index === 0 ? "delay-0" : 
                  index === 1 ? "delay-1" : 
                  index === 2 ? "delay-2" : 
                  index === 3 ? "delay-3" : "delay-4"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-16 text-center text-primary-foreground overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzLTItMi0yLTQgMi00IDItNCAtMi0yLTItNCAyLTQgMi00cy0yLTItMi00IDItNCAyLTQiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Ready to Transform Your Cooking?
              </h2>
              <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">
                Join thousands of home cooks who've discovered the joy of effortless meal planning
              </p>
              <Button
                size="xl"
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <Link to="/recipes">
                  Get Started Free <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
