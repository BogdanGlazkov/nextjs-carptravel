import Header from "@/views/Header";
import Hero from "@/views/Hero";
import About from "@/views/About";
import Offers from "../views/Offers";
import Career from "../views/Career";
import Contacts from "../views/Contacts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Offers />
        <Career />
        <Contacts />
      </main>
    </>
  );
}
