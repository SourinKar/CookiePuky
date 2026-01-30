import { Check, Crown, Sparkles, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const freePlan = {
  name: "Free",
  price: "₹0",
  period: "forever",
  description: "Perfect for getting started",
  features: [
    "Up to 5 recipe generations per day",
    "Basic recipe suggestions",
    "Single recipe per dish",
    "Grocery links for missing ingredients",
  ],
  limitations: [
    "Limited recipe variations",
    "Contains ads",
  ],
};

const premiumPlan = {
  name: "Premium",
  price: "₹49",
  period: "per month",
  description: "Unlock the full cooking experience",
  features: [
    "Unlimited recipe generations",
    "Up to 5 variations per dish",
    "Hyderabadi, Kolkata, Mughlai & more styles",
    "Priority recipe ranking",
    "Ad-free experience",
    "Free Blinkit subscription benefit*",
    "Free Zepto subscription benefit*",
    "Free Swiggy Instamart benefit*",
    "Early access to new features",
  ],
};

const Pricing = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Simple Pricing
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Choose Your Plan
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Start free and upgrade when you're ready for the full experience
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <Card className="relative border-2 border-border shadow-card">
            <CardHeader className="pb-4">
              <h3 className="text-2xl font-display font-bold">{freePlan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">{freePlan.price}</span>
                <span className="text-muted-foreground">/{freePlan.period}</span>
              </div>
              <p className="text-muted-foreground">{freePlan.description}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {freePlan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
                {freePlan.limitations.map((limitation) => (
                  <li key={limitation} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                      ✕
                    </span>
                    <span className="text-sm">{limitation}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="lg" className="w-full">
                Current Plan
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="relative border-2 border-primary shadow-glow overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-premium text-primary-foreground text-xs font-semibold rounded-bl-lg">
              MOST POPULAR
            </div>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <Crown className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-display font-bold">{premiumPlan.name}</h3>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gradient">{premiumPlan.price}</span>
                <span className="text-muted-foreground">/{premiumPlan.period}</span>
              </div>
              <p className="text-muted-foreground">{premiumPlan.description}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {premiumPlan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" className="w-full">
                Get Premium
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                *Grocery subscription benefits are promotional vouchers/discounts
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-center mb-10">
            What's Included with Premium
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-2xl shadow-card text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">5 Recipe Variations</h3>
              <p className="text-sm text-muted-foreground">
                Get Hyderabadi, Kolkata, Mughlai, Quick & Low-oil versions of every dish
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-card text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-premium flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Grocery Benefits</h3>
              <p className="text-sm text-muted-foreground">
                Exclusive discounts and free delivery on Blinkit, Zepto & Instamart
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-card text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-fresh flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Priority Access</h3>
              <p className="text-sm text-muted-foreground">
                Be the first to try new features and get priority support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
