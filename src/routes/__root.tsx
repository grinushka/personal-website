import { createRootRoute } from "@tanstack/react-router";
import { MainLayout } from "../components/MainLayout/MainLayout";
import { ThemeProvider } from "../theme/themeProvider";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  ),
});
