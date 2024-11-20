import ExerciseForm from "@/components/create-exercise-form";
import React from "react";
import ExerciseSummary from "@/components/exercise-summary";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import { getExercises } from "./actions";

export default async function ExercisePage() {
  const exercises = await getExercises();
  return (
    <main className="flex flex-col items-center justify-center p-4">
      <CopilotKit runtimeUrl="/api/copilotkit">
        <CopilotSidebar>
          <ExerciseForm />

          <ExerciseSummary exercises={exercises} />
        </CopilotSidebar>
      </CopilotKit>
    </main>
  );
}
