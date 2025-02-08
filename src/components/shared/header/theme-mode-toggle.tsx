"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, SunMoon } from "lucide-react";
import { DropdownMenuCheckboxItem } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

const themes = ["system", "dark", "light"];

type Checked = DropdownMenuCheckboxItemProps["checked"];

const ThemeModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {theme === "system" ? (
            <SunMoon />
          ) : theme === "dark" ? (
            <MoonIcon />
          ) : (
            <SunIcon />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themes.map((t) => (
          <DropdownMenuCheckboxItem
            key={t}
            checked={theme === (t as Checked)}
            className="px-2 text-sm cursor-pointer"
            onClick={() => setTheme(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeModeToggle;
