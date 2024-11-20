"use client";

import * as React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCriteriasData } from "@/app/(dashboard)/activities/actions";
import { AnimatedList } from "./ui/animated-list";
import { Checkbox } from "./ui/checkbox";

type Props = {
  categories: {
    id: string;
    categoryName: string | null;
    description: string | null;
    categoryOrderId: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date | null;
  }[];
};

export default function ActivitiesList({ categories }: Props) {
  const [activeTab, setActiveTab] = React.useState<string>(
    categories[0]?.id ?? "",
  );
  const [criterias, setCriterias] = React.useState<
    {
      id: string;
      subject: string | null;
      qty: number;
      unit: string | null;
      isActive: boolean;
      isFix: boolean;
      createdAt: Date | null;
      updatedAt: Date | null;
      categoryId: string;
    }[]
  >([]);

  React.useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCriteriasData(activeTab);
      setCriterias(data);
    };

    fetchCategories();
  }, [activeTab]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  return (
    <div className="flex h-screen w-full justify-center">
      <Tabs
        defaultValue={categories[0]?.id ?? ""}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-1 bg-white md:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id!}>
              {category.id === activeTab ? (
                <span className="font-bold">{category.categoryName}</span>
              ) : (
                category.categoryName
              )}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id!}>
            <section className="md:mt-25 mt-40 p-8 lg:m-1">
              <AnimatedList>
                <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
                  {criterias.map((item) => (
                    <li key={item.id} className="rounded-lg border">
                      <div className="flex items-start justify-between p-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-800">
                            {item.subject} {item.qty !== 0 ? item.qty : ""}{" "}
                            {item.unit}{" "}
                            {!item.isFix ? (
                              <span className="underline">
                                (กำหนดเป้าหมายเอง)
                              </span>
                            ) : null}
                          </h4>
                        </div>
                        <Checkbox className="h-6 w-6 rounded-lg" />
                      </div>
                    </li>
                  ))}
                </ul>
              </AnimatedList>
            </section>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
