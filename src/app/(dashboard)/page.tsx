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
      <CopilotKit runtimeUrl="/api/copilotkit">
        <CopilotPopup />
      </CopilotKit>
    </div>
  );
}
