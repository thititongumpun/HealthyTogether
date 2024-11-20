"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { getExercises } from "@/app/(dashboard)/exercises/actions";

export default function Exercise() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [exercises, setExercises] = React.useState<
    {
      date: Date | null;
      id: string;
      userId: string;
      createdAt: Date | null;
      updatedAt: Date | null;
      subject: string | null;
      qty: number;
    }[]
  >([]);

  React.useEffect(() => {
    async function getData() {
      const data = await getExercises(date);
      setExercises(data);
    }

    getData();
  }, [date]);

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
      />
      {exercises && (
        <section className="container mx-auto p-4">
          <h1 className="mb-4 text-2xl font-bold">Exercise Summary</h1>
          {exercises.map((exercise) => (
            <Card key={exercise.id} className="mb-4">
              {exercise.date?.toLocaleDateString() ===
                date?.toLocaleDateString() && (
                <div>
                  <CardHeader>
                    <CardTitle></CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center justify-between">
                        <span>{exercise.subject}</span>
                        <span>{exercise.qty} minutes</span>
                      </li>
                    </ul>
                  </CardContent>
                </div>
              )}
            </Card>
          ))}
        </section>
      )}
    </>
  );
}
