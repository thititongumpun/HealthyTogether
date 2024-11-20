"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { AddExercise } from "@/lib/actions";
import { sports } from "@/data/sport";

const FormSchema = z.object({
  date: z.date({
    required_error: "กรุณาเลือกวันที่",
  }),
  name: z.string({
    required_error: "กรุณาเลือกชื่อกิจกรรม",
  }),
  qty: z.coerce
    .number()
    .min(1, {
      message: "จำนวนต้องมากกว่า 1",
    })
    .max(1000000, { message: "น้อยกว่า 1000000" }),
});

export default function ExerciseForm() {
  const newDate = new Date();
  newDate.setHours(0, 0, 0, 0);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      date: newDate,
      qty: 0,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const res = await AddExercise(data);
      toast({
        title: "ยืนยันสำเร็จ",
        description: res?.message,
      });
    } catch (e) {
      console.log("error to created exercise", e);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>วันที่</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>วันที่ทำกิจกรรม</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Language</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value
                        ? sports.find((sport) => sport.value === field.value)
                            ?.label
                        : "เลือกกิจกรรม"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search language..." />
                    <CommandList>
                      <CommandEmpty>No language found.</CommandEmpty>
                      <CommandGroup>
                        {sports.map((sport) => (
                          <CommandItem
                            value={sport.label}
                            key={sport.value}
                            onSelect={() => {
                              form.setValue("name", sport.value);
                            }}
                          >
                            {sport.label}
                            <Check
                              className={cn(
                                "ml-auto",
                                sport.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="qty"
          render={({ field }) => (
            <FormItem>
              <FormLabel>จำนวน</FormLabel>
              <FormControl>
                <Input placeholder="30" type="number" {...field} />
              </FormControl>
              <FormDescription>จำนวนนาที</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">ยืนยัน</Button>
      </form>
    </Form>
  );
}
