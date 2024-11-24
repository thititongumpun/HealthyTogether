import Spinner from "@/components/animata/progress/spinner";

export default function loading() {
  return (
    <section className="items-cetner flex min-h-screen flex-col justify-center">
      <Spinner />
    </section>
  );
}
