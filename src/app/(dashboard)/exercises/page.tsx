import ExerciseForm from "@/components/create-exercise-form";
import React from "react";
import ExerciseSummary from "@/components/exercise-summary";

export default async function ExercisePage() {
  return (
    <main className="flex flex-col items-center">
      <ExerciseForm />

      <ExerciseSummary />
    </main>
  );
}
