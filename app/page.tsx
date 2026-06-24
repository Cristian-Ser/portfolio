import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Project />
        <About />
        <Contact />
      </main>
    </>
  );
}
