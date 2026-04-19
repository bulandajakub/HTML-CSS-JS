"use client";

import { HiSun, HiMoon } from "react-icons/hi2";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Button from "@/components/ui/Button";

/**
 * ThemeSwitch component toggles between light and dark themes.
 *
 * This component use the `next-themes` library to manage theme switching
 * between light and dark modes. It leverage the react-icons library to
 * display respective icons for each theme. The component handles the mounted
 * state to ensure proper rendering and avoids flickering during the theme
 * switch. Depending on the resolved theme, it displays a sun icon to switch
 * to light mode or a moon icon to switch to dark mode.
 */

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // check if component is mounted on client, use effect run only in client
  useEffect(() => setMounted(true), []);

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  if (!mounted) {
    return (
      <Button variant="neutral" mode="ghost" disabled title="Loading Theme">
        <HiSun style={{ opacity: 0 }} />
      </Button>
    );
  }

  return (
    <Button
      variant="neutral"
      mode="ghost"
      onClick={toggleTheme}
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      {resolvedTheme === "dark" ? <HiSun /> : <HiMoon />}
    </Button>
  );
}

export default ThemeSwitch;
