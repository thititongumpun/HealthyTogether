"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useTranslate } from "@tolgee/react";
import { useCopilotReadable } from "@copilotkit/react-core";
import { sports } from "@/data/sport";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteExercise } from "@/lib/actions";
import { toast } from "@/hooks/use-toast";
import Ticker from "./animata/text/ticker";

type ExerciseProps = {
  exercises: {
    date: Date | null;
    id: string;
    userId: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    subject: string | null;
    qty: number;
  }[];
};

export default function Exercise({ exercises }: ExerciseProps) {
  const { t } = useTranslate();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isPending, startTransition] = React.useTransition();
  const filterExerciseByDate = exercises.filter(
    (exercise) =>
      exercise.date?.toLocaleDateString() === date?.toLocaleDateString(),
  );

  async function handleDelete(id: string, name: string) {
    startTransition(async () => {
      try {
        const res = await deleteExercise({ id, name });
        toast({
          title: "Success",
          description: res?.message,
        });
      } catch (e) {
        console.log("error to delete exercise", e);
      }
    });
  }

  useCopilotReadable({
    description:
      "The list of exercises each exercise is number of unit of time (minutes)",
    value: exercises,
  });

  useCopilotReadable({
    description: "The list sports the avaliable in activity list",
    value: sports,
  });

  return (
    <>
      <div className="flex w-full items-center justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
        />
      </div>
      <Separator className="my-4 p-1.5" />
      <h1 className="mb-4 text-center text-2xl font-bold">
        {t("exercise-summary")}
      </h1>
      {filterExerciseByDate && (
        <section className="grid grid-cols-1 gap-2 p-4 md:grid-cols-3">
          {filterExerciseByDate.map((exercise) => (
            <Card key={exercise.id} className="">
              <div>
                <CardHeader>
                  <CardTitle className="ml-auto">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleDelete(exercise.id, exercise.subject as string);
                      }}
                    >
                      <Button
                        className="h-6 w-6 rounded-lg"
                        disabled={isPending}
                      >
                        <X />
                      </Button>
                    </form>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between gap-14">
                      <span>{exercise.subject}</span>
                      {/* <span>{exercise.qty} minutes</span> */}
                      <Ticker value={exercise.qty.toString()} />
                    </li>
                  </ul>
                </CardContent>
              </div>
            </Card>
          ))}
        </section>
      )}
    </>
  );
}
