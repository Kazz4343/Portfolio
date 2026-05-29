import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#1a2332] text-white"> 
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        
        {/* Left Column: Text & Socials */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 text-[#ff79c6]">Let's Connect</h2>
          <p className="text-gray-300 mb-8 max-w-md">
            I'm currently looking for new opportunities as a frontend developer. 
            Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>
          <div className="flex gap-4">
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

        {/* Right Column: Form */}
        <form className="space-y-4 bg-[#111827] p-8 rounded-xl border border-gray-800">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-400">Name</label>
            <p> - Kritsada Rodrit</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-400">Email</label>
            <p> - mgjb101@hotmail.com</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-400">Phone</label>
            <p> - 090 694 2222</p>
          </div>
        </form>

      </div>
    </section>
  );
}