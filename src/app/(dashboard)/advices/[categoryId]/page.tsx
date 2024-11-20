import BackButton from "@/components/back-button";
import { getAdviceData } from "../actions";
import { AnimatedList } from "@/components/ui/animated-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  params: Promise<{ categoryId: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { categoryId } = await params;
  const data = await getAdviceData(categoryId);
  return (
    <section className="p-4">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="max-w-md">
          <h1 className="text-xl font-extrabold text-gray-800 sm:text-2xl">
            Advices
          </h1>
          <p className="mt-2 text-gray-600">Youtube or external links here.</p>
        </div>
        <AnimatedList>
          <ul className="mt-16 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {data.map((item) => (
              <li key={item.id} className="rounded-lg border">
                <div className="flex items-start justify-between p-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">
                      {item.subject}
                    </h4>
                  </div>
                  <Button
                    variant="link"
                    className="rounded-lg border px-3 py-2 text-sm duration-150"
                  >
                    <Link href={`${item.url}`} passHref={true} target="_blank">
                      Open
                    </Link>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </AnimatedList>
        <div className="flex items-center justify-center py-12">
          <BackButton className="w-full max-w-lg">Back</BackButton>
        </div>
      </div>
    </section>
  );
}
