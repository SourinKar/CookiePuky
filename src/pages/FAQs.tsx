import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does the AI generate recipes?",
    answer:
      "Our AI uses advanced machine learning models trained on thousands of authentic Indian recipes. When you input your ingredients, it analyzes combinations, cooking techniques, and flavor profiles to suggest the most relevant and delicious recipes that match your available ingredients.",
  },
  {
    question: "Do I need all the ingredients to cook a recipe?",
    answer:
      "Not necessarily! Our recipes show you which ingredients you have (in green) and which are missing (in red). For missing ingredients, we provide instant purchase links to Blinkit, Zepto, and Swiggy Instamart. Many recipes also include substitution suggestions.",
  },
  {
    question: "Is the premium subscription worth it?",
    answer:
      "If you cook regularly and want variety, absolutely! Premium gives you up to 5 variations of every dish (Hyderabadi, Kolkata, Mughlai, Quick, Low-oil versions), unlimited recipe generations, ad-free experience, and exclusive grocery discounts. At just ₹49/month, it's less than the cost of one restaurant meal.",
  },
  {
    question: "Are the grocery links paid/affiliate links?",
    answer:
      "We may earn a small commission from grocery partners, but this doesn't affect the prices you pay. In fact, Premium members often get exclusive discounts and free delivery benefits that more than cover the subscription cost.",
  },
  {
    question: "Can I cancel my premium subscription anytime?",
    answer:
      "Yes, you can cancel anytime from your account settings. You'll continue to have access to premium features until the end of your billing period. There are no cancellation fees or long-term commitments.",
  },
  {
    question: "How accurate are the recipe suggestions?",
    answer:
      "Our AI is trained on authentic Indian recipes and continuously improves based on user feedback. We show you a match percentage for each recipe so you know exactly how well it fits your available ingredients. Recipes with 80%+ match are typically perfect for immediate cooking.",
  },
  {
    question: "Can I save my favorite recipes?",
    answer:
      "Yes! You can save unlimited recipes to your personal cookbook. Premium members also get access to organized collections and the ability to create custom meal plans.",
  },
  {
    question: "Do you have recipes for dietary restrictions?",
    answer:
      "Absolutely! Use our filters to find vegetarian, vegan, low-oil, quick-cook, and other specialized recipes. We're constantly adding more dietary options based on user requests.",
  },
  {
    question: "Is my data safe with CookiePuky?",
    answer:
      "We take privacy seriously. Your ingredient data is only used to generate personalized recipes. We never sell personal information to third parties. Read our privacy policy for complete details.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Premium members get priority support via email. Free users can reach us through the contact form or community forums. We typically respond within 24 hours.",
  },
];

const FAQs = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Help Center
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about CookiePuky
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 shadow-card border-0 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? Reach out to our support team.
            </p>
            <a
              href="mailto:support@cookiepuky.com"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              support@cookiepuky.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
