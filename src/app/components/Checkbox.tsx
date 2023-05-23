"use client";
import React from "react";
import { Switch } from "@headlessui/react";
// import { AiOutlineCheck } from "react-icons/ai";
import { CheckIcon } from "@heroicons/react/24/outline";

type Props = {
  label?: string;
  name: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
};

export default function Checkbox({
  label,
  name,
  checked,
  onChange,
  disabled,
}: Props) {
  return (
    <Switch.Group>
      <div className="flex items-center justify-between">
        <Switch.Label className="mr-4">{label}</Switch.Label>
        <Switch
          checked={checked}
          onChange={onChange}
          name={name}
          disabled={disabled}
          className={`
            relative flex h-6 w-6 items-center justify-center rounded-lg outline-none ring-1 transition-all duration-200 
            ${!checked && !disabled ? "ring-gray-400" : ""}
            ${checked && !disabled ? " ring-purple-500" : "bg-purple-500"} 
            ${
              disabled
                ? "bg-gray-200 ring-gray-200"
                : "bg-white ring-purple-500"
            }  
          `}
        >
          <CheckIcon
            className={`
              ${checked ? "scale-100" : "scale-0"} 
              ${checked && !disabled ? "text-purple-500" : "text-gray-400"} 
              h-5 w-5 transition-transform duration-200 ease-out`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}
