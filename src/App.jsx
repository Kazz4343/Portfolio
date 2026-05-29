import Contact from "./compents/Contact";
import Hero from "./compents/Hero";
import Navbar from "./compents/Navbar";
import Projects from "./compents/Projects";


export default function App() {
  return (
    <div className="bg-accent w-full h-screen flex flex-col">
      <Navbar />
      
      <main className="grow">
        <Hero />
        <Projects />
        <Contact />
      </main>

        <footer className="text-center">
          <div className="fixed bottom-4 right-4 z-50 bg-black text-white px-3 py-1 rounded-md text-xs font-mono opacity-75">
            <span className="block sm:hidden">DEFAULT (Mobile)</span>
            <span className="hidden sm:block md:hidden">sm (Small)</span>
            <span className="hidden md:block lg:hidden">md (Medium)</span>
            <span className="hidden lg:block xl:hidden">lg (Large)</span>
            <span className="hidden xl:block 2xl:hidden">xl (Extra Large)</span>
            <span className="hidden 2xl:block">2xl (Huge)</span>
          </div>
          <p className="bg-black text-white">© 2026 Kritsada Rodrit. All rights reserved.</p>
        </footer>
    </div>
  )
}
