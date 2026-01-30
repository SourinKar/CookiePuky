import { Sparkles, ShoppingCart, Bot, Utensils, TrendingUp, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Sparkles,
    title: "AI Recipe Recommendation",
    description: "Our advanced AI analyzes your ingredients and suggests the most relevant Indian recipes, ranked by ingredient match and popularity.",
    available: true,
  },
  {
    icon: Utensils,
    title: "Ingredient-to-Recipe Mapping",
    description: "Smart mapping system that understands ingredient relationships and suggests recipes you can actually make with what you have.",
    available: true,
  },
  {
    icon: ShoppingCart,
    title: "Grocery Integration",
    description: "Seamless links to Blinkit, Zepto, and Swiggy Instamart for instant ordering of missing ingredients.",
    available: true,
  },
  {
    icon: Bot,
    title: "Smart Cooking Assistant",
    description: "Interactive step-by-step cooking guidance with timers, tips, and voice commands.",
    available: false,
    comingSoon: true,
  },
  {
    icon: TrendingUp,
    title: "Grocery Price Comparison",
    description: "Compare prices across Blinkit, Zepto, and Instamart to find the best deals on your ingredients.",
    available: false,
    comingSoon: true,
  },
  {
    icon: Zap,
    title: "Meal Planner",
    description: "AI-powered weekly meal planning based on your preferences, dietary restrictions, and budget.",
    available: false,
    comingSoon: true,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Our Services
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to transform your cooking experience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`relative overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in ${
                !service.available ? "opacity-80" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.comingSoon && (
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                    Coming Soon
                  </Badge>
                </div>
              )}
              <CardContent className="p-6">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                    service.available
                      ? "bg-gradient-hero"
                      : "bg-muted"
                  }`}
                >
                  <service.icon
                    className={`w-7 h-7 ${
                      service.available
                        ? "text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
                {service.available && (
                  <div className="mt-4 flex items-center gap-2 text-sm text-secondary font-medium">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    Available Now
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-center mb-10">
            How CookiePuky Works
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Enter Your Ingredients",
                  description: "Add the ingredients you have in your kitchen",
                },
                {
                  step: 2,
                  title: "AI Generates Recipes",
                  description: "Our AI finds the best matching Indian recipes",
                },
                {
                  step: 3,
                  title: "Order Missing Items",
                  description: "One-click links to order missing ingredients",
                },
                {
                  step: 4,
                  title: "Start Cooking!",
                  description: "Follow step-by-step instructions and enjoy",
                },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className={`flex items-center gap-6 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                    <div className="bg-card p-6 rounded-2xl shadow-card">
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold shadow-glow">
                    {item.step}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
