import { createFileRoute } from "@tanstack/react-router";

import Access from "../components/sections/access";
import Concept from "../components/sections/concept";
import Cuisine from "../components/sections/cuisine";
import Gallery from "../components/sections/gallery";
import Hero from "../components/sections/hero";
import Info from "../components/sections/info";
import Reservation from "../components/sections/reservation";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
      <Hero />
      <Concept />
      <Cuisine />
      <Gallery />
      <Info />
      <Access />
      <Reservation />
    </>
  );
}
