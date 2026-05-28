export default function Projects() {
  const projectInfo = [
    {
      id: 1,
      title: "Social Media Clone",
      description:
        "A responsive full-stack social media clone featuring secure user authentication, real-time data streaming, and a sleek, modern interface.",
      tags: ["React", "Tailwind CSS", "Vercel", "Firebase"],
      image: "/public/social.png",
      liveLink: "https://socialmedia-clone-six.vercel.app/",
    },
    {
      id: 2,
      title: "Swift Code",
      description:
        "The core objective is to showcase look, feel, and visual polish. SwiftCode is a high-fidelity, responsive frontend landing page built to demonstrate advanced UI/UX execution, modern layout design, and polished aesthetics. The primary goal of this project is to showcase frontend development skills.",
      tags: ["React", "Tailwind CSS", "Vercel"],
      image: "./public/switfcode.png",
      liveLink: "https://swift-code-beta.vercel.app/",
    },
    {
      id: 3,
      title: "Movie Website",
      description:
        "A responsive, client-side movie discovery web application built to practice modern frontend integration and dynamic data fetching. The application interfaces with a third-party film database API (such as TMDB) to allow users to search, browse, and explore trending movies or TV shows.",
      tags: ["React", "API fetching", "HTML", "CSS", "Vercel"],
      image: "./public/movie.png",
      liveLink: "https://movie-web-practice.vercel.app/",
    },
    {
      id: 4,
      title: "Weather Website",
      description:
        "A lightweight, responsive weather tracking application developed to practice fetching API integration and simple tailwindcss styling.",
      tags: ["React", "API fetching", "Tailwind CSS", "Vercel"],
      image: "./public/weather.png",
      liveLink: "https://simple-weather-app-lake-seven.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#2D3748] w-full py-16 px-6 md:px-16 text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-10 tracking-tight text-left">
          Projects
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectInfo.map((project) => (
            <a
              key={project.id}
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700/50 hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Card Image Container */}
              <div className="overflow-hidden relative aspect-video bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-slate-700 text-slate-300 px-2.5 py-1 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
