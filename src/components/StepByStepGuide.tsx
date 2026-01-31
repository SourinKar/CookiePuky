import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, CheckCircle, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import "@/styles/orange-glow.css";
import type { RecipeIngredient } from "@/data/recipes";

interface StepByStepGuideProps {
  recipeName: string;
  steps: string[];
  ingredients: RecipeIngredient[];
  cookingTime: number;
  servings: number;
}

export function StepByStepGuide({
  recipeName,
  steps,
  ingredients,
  cookingTime,
  servings,
}: StepByStepGuideProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const isStepCompleted = (stepIndex: number) => completedSteps.includes(stepIndex);

  const toggleStepComplete = (stepIndex: number) => {
    setCompletedSteps((prev) =>
      prev.includes(stepIndex)
        ? prev.filter((i) => i !== stepIndex)
        : [...prev, stepIndex]
    );
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const progressPercentage = (completedSteps.length / steps.length) * 100;

  return (
    <Card className="border-0 bg-card">
      <CardHeader>
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold relative inline-block orange-glow-title">
                Cook {recipeName}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Step {currentStep + 1} of {steps.length}
              </p>
            </div>
            <div className="flex items-center gap-2 flex-wrap justify-end">
              <div className="flex items-center gap-1.5 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-medium">{cookingTime} mins</span>
              </div>
              <Badge variant="outline">
                {servings} servings
              </Badge>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Current Step Display */}
        <div className="space-y-4">
          <div className="p-6 orange-glow-step-box rounded-xl min-h-32 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full orange-glow-step-number text-white flex items-center justify-center font-bold shadow-lg">
                  {currentStep + 1}
                </div>
                <h3 className="text-lg font-semibold relative orange-glow-step-title">Step {currentStep + 1}</h3>
              </div>
              <p className="text-base leading-relaxed text-foreground">
                {steps[currentStep]}
              </p>
            </div>
            </div>
          </div>

          {/* Step Completion Toggle */}
          <div className="flex gap-2">
            <Button
              variant={isStepCompleted(currentStep) ? "default" : "outline"}
              className={`flex-1 ${isStepCompleted(currentStep) ? 'orange-glow-button-complete' : 'orange-glow-button-incomplete'}`}
              onClick={() => toggleStepComplete(currentStep)}
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              {isStepCompleted(currentStep) ? "Completed" : "Mark as Complete"}
            </Button>
          </div>

        {/* Step Navigation */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePreviousStep}
            disabled={currentStep === 0}
            className="flex-1"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleNextStep}
            disabled={currentStep === steps.length - 1}
            className="flex-1"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        {/* Step Overview - Vertical Timeline */}
        <div className="space-y-2">
          <h3 className="font-semibold text-sm">Recipe Steps Overview</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                  currentStep === index
                    ? "orange-glow-timeline-active"
                    : "border-muted orange-glow-timeline-inactive"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      isStepCompleted(index)
                        ? "bg-green-500 text-white"
                        : currentStep === index
                        ? "orange-glow-timeline-number"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {isStepCompleted(index) ? "✓" : index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-muted-foreground">
                      Step {index + 1}
                    </p>
                    <p className={`text-sm ${isStepCompleted(index) ? "line-through text-muted-foreground" : ""}`}>
                      {step.substring(0, 60)}
                      {step.length > 60 ? "..." : ""}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Helpful Tips for Current Step */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2 text-sm">💡 Tip</h4>
          <p className="text-sm text-blue-800">
            {currentStep === 0
              ? "Take your time to prepare all ingredients before starting. This helps cooking go smoothly!"
              : currentStep === steps.length - 1
              ? "Great job! You're almost done. Make sure to garnish and serve while hot for the best taste!"
              : "Focus on this step and don't rush. Quality execution makes all the difference in cooking."}
          </p>
        </div>

        {/* Ingredients Checklist */}
        <div>
          <h3 className="font-semibold text-sm mb-2">All Ingredients</h3>
          <div className="grid grid-cols-2 gap-2">
            {ingredients.map((ingredient) => (
              <div
                key={ingredient.id}
                className="p-2 bg-muted rounded text-xs flex items-start gap-2"
              >
                <input
                  type="checkbox"
                  className="mt-0.5 rounded"
                  defaultChecked
                  aria-label={`${ingredient.name} ready`}
                />
                <div className="flex-1">
                  <p className="font-medium">{ingredient.name}</p>
                  <p className="text-muted-foreground">
                    {ingredient.quantity} {ingredient.unit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completion Message */}
        {completedSteps.length === steps.length && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
            <p className="text-sm font-semibold text-green-900">
              🎉 Recipe Complete! Enjoy your meal!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
