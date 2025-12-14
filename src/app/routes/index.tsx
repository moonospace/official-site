import {
  IntroSection,
  ProjectSection,
  SupportSection,
  TeamSection,
} from "@features/landing";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Ambitious Software Crafter | Moono",
      description:
        "Small teams of indie hacker trying to crafting and ship a good software globally",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col gap-6">
      <IntroSection />
      <TeamSection />
      <ProjectSection />
      <SupportSection />
    </main>
  );
}
