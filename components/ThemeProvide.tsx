"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React, { ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode; // ReactNode covers all valid JSX/React child elements
  attribute?: string;  // 'next-themes' typically supports an `attribute` prop
  defaultTheme?: string; // For setting the default theme (e.g., 'light' or 'dark')
  enableSystem?: boolean; // To enable system theme preference
  storageKey?: string;    // Custom key for localStorage
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
