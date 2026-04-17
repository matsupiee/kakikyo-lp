import Access from "./sections/access";
import Concept from "./sections/concept";
import Cuisine from "./sections/cuisine";
import Gallery from "./sections/gallery";
import Hero from "./sections/hero";
import Info from "./sections/info";
import Reservation from "./sections/reservation";
import StickyCta from "./sticky-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Concept />
      <Cuisine />
      <Gallery />
      <Info />
      <Access />
      <Reservation />
      <StickyCta />
    </>
  );
}
