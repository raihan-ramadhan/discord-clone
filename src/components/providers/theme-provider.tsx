"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useEffect } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // give every element that have transition-colors-smooth className styles after it loaded
  useEffect(() => {
    const elements = document.querySelectorAll(".transition-colors-smooth");

    elements.forEach((element: any) => {
      element.classList.add("!transition-colors", "!duration-200");
    });
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
