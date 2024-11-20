"use client";

import * as React from "react";
import { useTolgee } from "@tolgee/react";
import { setLanguage } from "@/tolgee/language";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, GlobeIcon } from "lucide-react";

export default function LanguageSwitcher() {
  const tolgee = useTolgee(["language"]);
  const language = tolgee.getLanguage();

  const languages = [
    { code: "en", label: "English" },
    { code: "th", label: "ไทย (Thai)" },
    { code: "zh", label: "中文 (Chinese)" },
  ];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
  };

  const getCurrentLanguageLabel = () => {
    const currentLang = languages.find((lang) => lang.code === language);
    return currentLang ? currentLang.label : "Select language";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <GlobeIcon className="h-5 w-5" />
          <span>{getCurrentLanguageLabel()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onSelect={() => handleLanguageChange(lang.code)}
            className="flex items-center justify-between"
          >
            {lang.label}
            {language === lang.code && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
