import Link from "next/link";
import { AnimatedList } from "@/components/ui/animated-list";
import { getCategoryData } from "@/lib/actions";

export default async function AdvicePage() {
  const categories = await getCategoryData();

  return (
    <section className="container mx-auto items-center justify-center p-4">
      <div className="flex items-center justify-center p-6">
        <AnimatedList>
          {categories.map((category) => (
            <ol key={category.id} className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li className="rounded-md border p-2">
                <Link href={`/advices/${category.id}`}>
                  {category.categoryName}
                </Link>
              </li>
            </ol>
          ))}
        </AnimatedList>
      </div>
    </section>
  );
}
