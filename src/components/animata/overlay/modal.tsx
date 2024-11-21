"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PlusCircle } from "lucide-react";

import { cn } from "@/lib/utils";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useTranslate } from "@tolgee/react";
import { AddExercise } from "@/lib/actions";
import { sports } from "@/data/sport";

const FormSchema = z.object({
  date: z.date({
    required_error: "Please select date",
  }),
  name: z.string({
    required_error: "Please select exercise name",
  }),
  qty: z.coerce
    .number()
    .min(1, {
      message: "Muse be more than 1",
    })
    .max(1000000, { message: "Must be less than 1,000,000" }),
});

export default function Modal({
  modalSize = "lg",
}: {
  modalSize?: "sm" | "lg";
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslate();
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
        title: "Create sucessfully.",
        description: res?.message,
      });
      setIsOpen(false);
    } catch (e) {
      console.log("error to created exercise", e);
    }
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded bg-primary p-2 font-medium transition-opacity hover:opacity-90"
      >
        เพิ่มรายการใหม่
      </button>

      <AnimatePresence>
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-y-scroll p-8 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0, rotate: "180deg" }}
              animate={{
                scale: 1,
                rotate: "0deg",
                transition: {
                  type: "spring",
                  bounce: 0.25,
                },
              }}
              exit={{ scale: 0, rotate: "180deg" }}
              onClick={(e) => e.stopPropagation()}
              className={cn(
                "relative w-full max-w-lg cursor-default overflow-hidden rounded-xl bg-primary p-6 shadow-2xl",
                {
                  "max-w-sm": modalSize === "sm",
                },
              )}
            >
              <div className="flex flex-col gap-3">
                <PlusCircle className="mx-auto" size={48} />
                <h3
                  className={cn("text-center text-3xl font-bold", {
                    "text-2xl": modalSize === "sm",
                  })}
                >
                  เพิ่มรายการใหม่
                </h3>
                <p className="mb-1 text-center">
                  เลือกวันที่และกิจกรรมที่ต้องการบันทึก
                </p>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>{t("exercise-date-label")}</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
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
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormDescription>
                            {t("exercise-date-desc")}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>{t("exercise-exerise-label")}</FormLabel>
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
                                  {field.value ? (
                                    sports.find(
                                      (sport) => sport.value === field.value,
                                    )?.label
                                  ) : (
                                    <>{t("exercise-exerise-label")}</>
                                  )}
                                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                              <Command>
                                <CommandInput placeholder="Search language..." />
                                <CommandList>
                                  <CommandEmpty>
                                    No activity found.
                                  </CommandEmpty>
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
                          <FormLabel>{t("exercise-qty-label")}</FormLabel>
                          <FormControl>
                            <Input placeholder="30" type="number" {...field} />
                          </FormControl>
                          <FormDescription>
                            {t("exercise-qty-desc")}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <DialogFooter>
                      <Button type="submit">
                        {t("exercise-submit-button")}
                      </Button>
                    </DialogFooter>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
