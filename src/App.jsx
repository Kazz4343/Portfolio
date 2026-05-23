import Hero from "./compents/Hero";
import Navbar from "./compents/Navbar";


export default function App() {
  return (
    <div className="bg-accent w-full h-screen flex flex-col">
      <Navbar />
      
      <main className="grow">
        <Hero />
        
      </main>

        <footer className="text-center">
          <p>© 2026 Kritsada Rodrit. All rights reserved.</p>
        </footer>
    </div>
  )
}
