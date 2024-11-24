import TextBorderAnimation from "@/components/animata/text/text-border-animation";
import CalorieCounter from "@/components/animata/widget/calorie-counter";
import RetroGrid from "@/components/ui/retro-grid";
import { getTranslate } from "@/tolgee/server";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import getTotalExerciseMinutes from "./actions";
import { auth } from "@/auth";

export default async function Page() {
  const t = await getTranslate();
  const minutes = await getTotalExerciseMinutes();
  const session = await auth();

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        <TextBorderAnimation text={t("home-welcome-page")} />
      </span>
      <RetroGrid />
      <CalorieCounter
        date={new Date()}
        goal={60}
        fulfilled={minutes}
        image={
          session?.user?.image ??
          "https://plus.unsplash.com/premium_vector-1689096672037-98309fdc7f44?bg=FFFFFF&q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
        }
      />
      <CopilotKit runtimeUrl="/api/copilotkit">
        <CopilotPopup />
      </CopilotKit>
    </div>
  );
}
