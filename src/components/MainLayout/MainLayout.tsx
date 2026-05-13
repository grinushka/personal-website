import { ContactInfo } from "@/components/ContactInfo";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { type Theme, useTheme } from "@/theme/themeProvider";
import { ArrowUpRightIcon, LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { type ReactNode, useEffect } from "react";
import { generateTypingKeyframes } from "./utils/generateTypingKeyframes";

import "./styles/aurora-animation.css";
import "./styles/typewriter-animation.css";

const THEME_ICONS: Record<Theme, ReactNode> = {
  light: <SunIcon className="h-4 w-4" />,
  dark: <MoonIcon className="h-4 w-4" />,
  system: <LaptopIcon className="h-4 w-4" />,
} as const;

const THEME_LABELS: Record<Theme, string> = {
  light: "Switch to dark mode",
  dark: "Switch to system theme",
  system: "Switch to light mode",
} as const;

const PERSONAL_INFO = ["software engineer", "passionate about AI", "amateur yogi", "crochet lover"];
const keyframes = generateTypingKeyframes("typing", PERSONAL_INFO);

export function MainLayout() {
  const { setTheme, theme } = useTheme();
  const isMobile = useIsMobile();

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = keyframes;
    document.head.appendChild(style);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 pt-25 flex flex-row justify-between gap-5 h-screen">
      {/* Aurora Borealis animation */}
      <div className="aurora" />

      <main className="flex flex-col gap-5">
        <div className="flex flex-col ">
          <span className="text-m text-muted-foreground pb-2">hey, I'm</span>
          <span className="text-3xl font-bold pb-3">Violet Soloveva</span>
          <div className="personal-info">
            {/* Typewriter animation */}
            <span className="typewriter" />
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-10">
          <div className="text-sm">
            <div className="text-muted-foreground text-xs mb-1">currently</div>
            <div className="ml-3">
              <div className="flex items-center gap-1">
                Frontend Engineer,
                <a href="https://www.saritasa.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <span className="text-muted-foreground">Saritasa</span>
                  <ArrowUpRightIcon className="h-3 w-3 text-muted-foreground self-end mb-0.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <div className="text-muted-foreground text-xs mb-1">previously</div>
            <div className="flex flex-col ml-3">
              <div className="flex items-center gap-1">
                Frontend Developer,
                <a
                  href="https://www.1ci.com/partner-product-catalogue/advertising-management/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <span className="text-muted-foreground">Proxima</span>
                  <ArrowUpRightIcon className="h-3 w-3 text-muted-foreground self-end mb-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <ContactInfo />
      </main>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        aria-label={THEME_LABELS[theme]}
        className={cn("hover:cursor-pointer w-8 h-8", isMobile && "ml-auto")}
      >
        <div key={theme} className="animate-in fade-in slide-in-from-top-2 duration-700" aria-hidden="true">
          {THEME_ICONS[theme]}
        </div>
      </Button>
    </div>
  );
}
