"use client";
import { format } from "date-fns";
import DonutChart from "../graphs/donut-chart";

interface ICalorieCounterProps {
  date: Date;
  goal: number;
  fulfilled: number;
  image: string;
}

export const testCalorieCounterProps: ICalorieCounterProps = {
  date: new Date(),
  goal: 4000,
  fulfilled: 120,
  image:
    "https://plus.unsplash.com/premium_vector-1689096672037-98309fdc7f44?bg=FFFFFF&q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
};

export default function CalorieCounter({
  date = testCalorieCounterProps.date,
  goal = testCalorieCounterProps.goal,
  fulfilled = testCalorieCounterProps.fulfilled,
  image = testCalorieCounterProps.image,
}: ICalorieCounterProps) {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    date.getDay()
  ];

  const progress = (fulfilled / goal) * 100;
  const isOverGoal = fulfilled > goal;
  const chartColor = isOverGoal ? "text-red-400" : "text-green-400"; // Change color dynamicall

  return (
    <div className="calorie-container relative flex h-96 w-52 flex-col items-center justify-start gap-4 rounded-3xl border-2 border-gray-200 bg-gray-100 px-5 py-3 dark:border-none dark:bg-slate-800 sm:w-72">
      <div className="day-date flex w-full flex-row items-center justify-between pt-2">
        <div>
          <p className="day text-gray-400">{weekday}</p>
          <div className="date font-md text-xl dark:text-white">
            {format(date, "dd/MM/yyyy")}
          </div>
        </div>
        <img alt="image" src={image} className="h-10 w-10 rounded-full" />
      </div>
      {progress <= 100 ? (
        <DonutChart
          progress={progress}
          circleWidth={18}
          progressWidth={18}
          size={180}
          progressClassName={`dark:text-cyan-300 ${chartColor}`} // Use dynamic color
          className="relative m-2 flex items-center justify-center"
        />
      ) : (
        <div className="relative m-2 flex items-center justify-center text-lg text-green-500">
          Overachieved!
        </div>
      )}
      <div className="goal absolute bottom-8 flex h-14 w-56 items-center justify-between rounded-xl border-gray-100 bg-gray-400 bg-opacity-10 bg-clip-padding px-4 backdrop-blur-sm backdrop-filter sm:w-64">
        <p className="dark:text-white">Your goal</p>
        <p className="font-bold text-orange-300">{goal} Minutes</p>
      </div>
      <div className="fulfilled absolute top-40 flex flex-col items-center">
        <p className="text-gray-400 dark:text-gray-200">Today</p>
        <p className="font-md text-xl dark:text-white">{fulfilled} Minutes</p>
      </div>
    </div>
  );
}
