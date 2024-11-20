import CalorieCounter from "@/components/animata/widget/calorie-counter";
import RetroGrid from "@/components/ui/retro-grid";
import { getTranslate } from "@/tolgee/server";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";

export default async function Page() {
  const t = await getTranslate();
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        <h1>{t("home-welcome-page")}</h1>
      </span>

      <RetroGrid />
      <CalorieCounter
        date={new Date()}
        goal={4000}
        fulfilled={120}
        image="https://plus.unsplash.com/premium_vector-1689096672037-98309fdc7f44?bg=FFFFFF&q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
      />
      <CopilotKit runtimeUrl="/api/copilotkit">
        <CopilotPopup />
      </CopilotKit>
    </div>
  );
}
