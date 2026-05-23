

export default function Navbar() {
  return (
    <div className="flex justify-between p-5 bg-background sticky">
      <div >
        <h1 className="text-3xl font-bold bg-clip-text 
          text-transparent 
          bg-primary hover-glow duration-200
          ease-in-out cursor-pointer"
        >
          Kritsada
        </h1>
      </div>

      <ul className="flex gap-5 justify-between items-center">
        <li className="font-bold relative text-accent
          after:absolute 
          after:-bottom-0.75 
          after:w-0 after:left-0
          after:h-0.5 after:bg-green-800
          after:transition-all after:duration-300 cursor-pointer
          hover:after:w-full hover:text-primary duration-200"
        >
          About me
        </li>
        <li className="font-bold relative text-accent
          after:absolute 
          after:-bottom-0.75 
          after:w-0 after:left-0
          after:h-0.5 after:bg-green-800 
          after:transition-all after:duration-300 cursor-pointer
          hover:after:w-full hover:text-primary duration-200"
        >
          Projects
        </li>
        <li className="font-bold relative text-accent
          after:absolute 
          after:-bottom-0.75 
          after:w-0 after:left-0
          after:h-0.5 after:bg-green-800
          after:transition-all after:duration-300 cursor-pointer
          hover:after:w-full hover:text-primary duration-200"
        >
          Contract
        </li>
      </ul>
    </div>
  )
}
