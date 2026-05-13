import { MainLayout } from "@/components/MainLayout/MainLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: MainLayout
});
