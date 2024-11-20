import { getCategoryData } from "@/lib/actions";
import ActivitiesList from "@/components/activities-list";

export default async function ActivityPage() {
  const categories = await getCategoryData(true);
  return (
    <>
      <ActivitiesList categories={categories} />
    </>
  );
}
