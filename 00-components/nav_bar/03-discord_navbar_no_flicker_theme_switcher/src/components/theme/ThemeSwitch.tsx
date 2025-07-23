"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

/**
 * ThemeSwitch component toggles between light and dark themes.
 *
 * This component uses the `next-themes` library to manage theme switching
 * between light and dark modes. It leverages the react-icons library to
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

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={32}
        height={32}
        sizes="32x32"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  // set apropriate on click method and icon
  if (resolvedTheme == "dark") {
    return <FiSun onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme == "light") {
    return <FiSun onClick={() => setTheme("dark")} />;
  }
}

export default ThemeSwitch;
