import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChefHat, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDarkMode } from "@/hooks/use-dark-mode";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Recipes", path: "/recipes" },
  { name: "Ingredients", path: "/ingredients" },
  { name: "Pricing", path: "/pricing" },
  { name: "Services", path: "/services" },
  { name: "FAQs", path: "/faqs" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300">
              <ChefHat className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-display text-gradient">
              CookiePuky
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-accent" />
              ) : (
                <Moon className="w-5 h-5 text-accent" />
              )}
            </button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/recipes">Start Cooking</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-accent" />
              ) : (
                <Moon className="w-5 h-5 text-accent" />
              )}
            </button>
            <button
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                    location.pathname === link.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="hero" className="mt-2" asChild>
                <Link to="/recipes" onClick={() => setIsOpen(false)}>
                  Start Cooking
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
