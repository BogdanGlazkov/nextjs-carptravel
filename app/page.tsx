import Header from "@/views/Header";
import Hero from "@/views/Hero";
import About from "@/views/About";

export default function Home() {
  return (
    <>
      <div className="top">
        <Header />
        <Hero />
      </div>
      <About />
    </>
  );
}
