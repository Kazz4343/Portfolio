import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import TerminalClone from "./TerminalClone"


export default function Hero() {
  return (
    <section id="Hero" className="w-full bg-[#E2D4C5] py-15 px-4 md:px-16 flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl w-full">

        {/* Left side content */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-85 bg-white rounded-lg p-4 flex flex-col gap-4 shadow-sm">
            <div className="grow flex justify-center mt-5">
              <img alt="profile" src="/Profile.png" className="h-75 w-75 rounded-xl"/>
            </div>
            
            <div className="flex flex-col gap-2 mt-2 mx-4 mb-2">
              <h2 className="grow text-xl font-semibold">Tech Stack</h2>
              <ul className="flex flex-wrap gap-2 text-xs font-medium">
                <li className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">React</li>
                <li className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">Next.js</li>
                <li className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">Tailwind CSS</li>
                <li className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">Firebase</li>
                <li className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">JavaScript / TypeScript</li>
              </ul>
            </div>

            <div className="flex gap-3 mt-1 ml-4">
              <a href="https://github.com/Kazz4343" 
                target="_blank"
                className="flex items-center text-2xl text-[#6C5CE7]"
              >
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kritsada-rodrit-1b647923a/" 
                target="_blank"
                className="flex items-center text-2xl text-[#6D95FF]"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        {/* Right side content */}
        <div className="flex flex-col gap-2 max-w-xl w-full">
          <div className="">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-800">Hello, I am Kritsada!</h1>
            
          </div>
          <div className="mt-3 flex">
            <p className="text-left leading-relaxed text-slate-600">
              A self-taught frontend developer with a background in International 
              Business and Trust & Safety operations. I combine analytical problem-solving 
              with React and Tailwind CSS to craft highly polished, accessible, and high-performance user interfaces.
            </p>
          </div>

          <TerminalClone />
          
        </div>
      </div>
    </section>
  )
}
