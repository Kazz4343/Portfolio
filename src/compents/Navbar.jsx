import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar() {
  return (
    <nav className="w-full p-5 bg-background sticky z-50">
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="text-3xl font-bold bg-clip-text 
            text-transparent 
            bg-primary hover-glow duration-200
            ease-in-out cursor-pointer"
          >
            Kritsada
          </h1>
        </div>
        
        <div>
          <div className="text-accent text-2xl sm:hidden">
            <GiHamburgerMenu />
          </div>
          <ul className="gap-5 justify-between items-center hidden sm:flex">
            <li className="font-bold relative text-accent
              after:absolute 
              after:-bottom-0.75 
              after:w-0 after:left-0
              after:h-0.5 after:bg-green-800
              after:transition-all after:duration-300 cursor-pointer
              hover:after:w-full hover:text-primary duration-200"
            >
              <a href="#hero">
                About me
              </a>
            </li>
            <li className="font-bold relative text-accent
              after:absolute 
              after:-bottom-0.75 
              after:w-0 after:left-0
              after:h-0.5 after:bg-green-800 
              after:transition-all after:duration-300 cursor-pointer
              hover:after:w-full hover:text-primary duration-200"
            >
              <a href="#projects">
                Projects
              </a>
            </li>
            <li className="font-bold relative text-accent
              after:absolute 
              after:-bottom-0.75 
              after:w-0 after:left-0
              after:h-0.5 after:bg-green-800
              after:transition-all after:duration-300 cursor-pointer
              hover:after:w-full hover:text-primary duration-200"
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
