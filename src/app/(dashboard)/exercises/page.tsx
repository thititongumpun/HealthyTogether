import React from "react";
import ExerciseSummary from "@/components/exercise-summary";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import { getExercises } from "./actions";
import Modal from "@/components/animata/overlay/modal";

export default async function ExercisePage() {
  const exercises = await getExercises();
  return (
    <main className="flex flex-col items-center justify-center space-y-2 p-4">
      <Modal />
      <CopilotKit runtimeUrl="/api/copilotkit">
        <CopilotSidebar>
          <ExerciseSummary exercises={exercises} />
        </CopilotSidebar>
      </CopilotKit>
    </main>
  );
}
