import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Head from "./components/Head";

export default function Home() {
  return (
   <div>
    <main>
      <Navbar />
      <Head/>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </main>
   </div>
  );
}
