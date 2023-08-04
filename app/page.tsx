import Header from "@/views/Header";
import Hero from "@/views/Hero";
import About from "@/views/About";
import Offers from "../views/Offers";

export default function Home() {
  return (
    <>
      <div className="top">
        <Header />
        <Hero />
      </div>
      <About />
      <Offers />
    </>
  );
}
