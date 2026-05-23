import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="grid grid-cols-2 p-15 gap-5 mt-5">
      {/* Left side content */}
      <div className="">
        <div className="">
          <p className="text-7xl font-bold text-background">Hello, I am</p>
          <h1 className="text-7xl font-bold text-background">Kritsada!</h1>
        </div>
        <div className="mt-3 flex">
          <p className="grow text-justify max-w-md leading-relaxed hyphens-auto">
            A self-taught frontend developer with a background in International 
            Business and Trust & Safety operations. I combine analytical problem-solving 
            with React and Tailwind CSS to craft highly polished, accessible, and high-performance user interfaces.
          </p>
        </div>

        <div className="flex gap-3 mt-5">
          <a href="https://github.com/Kazz4343" 
            target="_blank"
            className="flex items-center text-2xl text-[#6C5CE7]"
          >
            <FaGithub />
          </a>
          <a href="https://github.com/Kazz4343" 
            target="_blank"
            className="flex items-center text-2xl text-[#6D95FF]"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      {/* Right side content */}
      <div>
        <div className="bg-[#2D2A3E] text-[#A29BFE] 
          font-mono p-6 rounded-2xl shadow-2xl 
          border border-white/5 relative 
          max-w-xl w-full"
        >
  {/* Code imitation */}
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <pre className="text-sm overflow-x-auto whitespace-pre-wrap leading-relaxed">
            <code>
              <span className="text-[#6C5CE7]">const</span> aboutMe: <span className="text-[#00B894]">DeveloperProfile</span> = &#123;{"\n"}
              {"  "}name: <span className="text-[#E07A5F]">'Kritsada'</span>,{"\n"}
              {"  "}role: <span className="text-[#E07A5F]">'Frontend web developer with some backend knowledge'</span>,{"\n"}
              {"  "}stack: &#123;{"\n"}
              {"    "}language: [<span className="text-[#E07A5F]">'JavaScript'</span>, <span className="text-[#E07A5F]">'TypeScript'</span>],{"\n"}
              {"    "}frameworks: [<span className="text-[#E07A5F]">'React'</span>, <span className="text-[#E07A5F]">'Next.js'</span>, <span className="text-[#E07A5F]">'TailwindCSS'</span>,{"\n"}
              {"  "}&#125;,{"\n"}
              {"  "}coreStrengths: [ <span className="text-[#E07A5F]">'Detail-Oriented'</span>, <span className="text-[#E07A5F]">'User-centric Thinking'</span>, <span className="text-[#E07A5F]">'Responsive & Accessible Web Design',</span>, <span className="text-[#E07A5F]">'Adaptability'</span>, <span className="text-[#E07A5F]">'Problem-Solver'</span> ],{"\n"}
              &#125;;
            </code>
          </pre>

          
          <div className="absolute bottom-75 -right-6 bg-white/15 
            backdrop-blur-md rounded-xl px-4 py-2 text-md flex 
            items-center gap-2 text-white shadow-lg animate-float-slow"
          >
            <span>☕ </span>Transforming coffee into a brand new idea
          </div>
        </div>
      </div>
    </div>
  )
}
