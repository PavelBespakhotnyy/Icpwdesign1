import { createContext, useContext, useEffect, useState } from "react";

export type Palette = "2" | "8" | "3" | "4";

interface ThemeContextValue {
  palette: Palette;
  setPalette: (p: Palette) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  palette: "4",
  setPalette: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [palette, setPalette] = useState<Palette>("4");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("palette-2", "palette-8", "palette-3", "palette-4");
    root.classList.add(`palette-${palette}`);
  }, [palette]);

  return (
    <ThemeContext.Provider value={{ palette, setPalette }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
