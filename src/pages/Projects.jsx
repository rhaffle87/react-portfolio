import { useState } from "react";
import { listProyek } from "../data/data";

function Projects() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = listProyek.filter((proyek) => {
    const query = searchQuery.toLowerCase();
    return (
      proyek.nama.toLowerCase().includes(query) ||
      proyek.year.toLowerCase().includes(query) ||
      proyek.tools.some((tool) => tool.toLowerCase().includes(query))
    );
  });

  return (
    <div className="projects mt-32 py-10">
      <h1
        className="text-center text-4xl font-bold mb-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Projects
      </h1>
      <p
        className="text-base/loose text-center opacity-50"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        Here are some of the projects I have worked on.
      </p>

      <div className="mt-10 flex justify-center">
        <input
          type="text"
          placeholder="Search projects by name, year, or technology..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 bg-zinc-800 border border-zinc-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EDC06E] focus:border-transparent"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        />
      </div>

      <div className="projects-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md hover:bg-zinc-700 transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
            >
              <img
                src={proyek.gambar}
                alt={`${proyek.nama} Image`}
                loading="lazy"
                className="rounded-md w-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-sm text-[#EDC06E] font-semibold">
                  {proyek.role}{" "}
                  <span className="opacity-60">· {proyek.year}</span>
                </p>
                <p className="text-base/loose my-4 text-gray-300">
                  {proyek.desk}
                </p>

                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      key={index}
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600/40 rounded-md font-medium text-sm"
                    >
                      {tool}
                    </p>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <a
                    href={proyek.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#68480D] text-white p-3 rounded-lg cursor-pointer block border border-zinc-600 hover:bg-[#E09B1B] transition-colors"
                  >
                    {proyek.role.includes("On-going")
                      ? "View Repository"
                      : "View Website"}
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-400 text-lg">No projects found matching your search, XD!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
