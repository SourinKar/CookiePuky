import { Link } from "react-router-dom";
import { ChefHat, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-display">CookiePuky</span>
          </Link>

          <div className="flex items-center gap-6 text-sm opacity-80">
            <Link to="/pricing" className="hover:opacity-100 transition-opacity">
              Pricing
            </Link>
            <Link to="/services" className="hover:opacity-100 transition-opacity">
              Services
            </Link>
            <Link to="/faqs" className="hover:opacity-100 transition-opacity">
              FAQs
            </Link>
          </div>

          <p className="flex items-center gap-1 text-sm opacity-60">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
