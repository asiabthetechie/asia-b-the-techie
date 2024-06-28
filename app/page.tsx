import ProjectHighlights from "@/components/ProjectHighlights";
import Hero from "../components/Hero"
import Navbar from "@/components/Navbar";
import Expertise from "@/components/Expertise";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-screen bg-white dark:bg-black">
      <Navbar/>
      <div className="w-4/5 px-24 mx-auto flex flex-col gap-20">
        <Hero />
        <Expertise />
        <ProjectHighlights />
        <About />
      </div>
      <Footer />
    </main>
  );
}
