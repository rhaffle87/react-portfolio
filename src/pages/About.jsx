import React, { useEffect, useRef } from 'react'

function About() {
  const imageRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY
        const speed = 0.1
        const translateY = scrollY * speed
        imageRef.current.style.transform = `translateY(${translateY}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="About mt-10 mb-16">
      <div
        className="max-w-6xl mx-auto p-8 lg:p-12 rounded-lg bg-zinc-900/80"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* LEFT: Portrait */}
          <div className="flex justify-center md:justify-end">
            <div
              ref={imageRef}
              className="w-72 md:w-96 rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="/hehe.JPG"
                alt="Portrait of Rafli Alif"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: Text content */}
          <div className="text-left text-zinc-100">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              About Rafli
            </h2>

            <p className="text-base/relaxed mb-6">
              I am a Telecommunications Engineering student at Institut Teknologi Sepuluh
              Nopember (ITS), focusing on Networking and Software Engineering. I build web
              applications, work with cloud and networking tools, and contribute as a lab
              assistant for the Telecommunication Network Laboratory.
            </p>

            <div className="mb-6 p-4 rounded-lg bg-zinc-800/60">
              <h3 className="text-lg font-medium mb-2">Leadership & Projects</h3>
              <p className="text-sm/relaxed">
                Head of the Web Development Subdivision for EVOLUTION ITS 2025 — led team
                recruitment, coordinated tasks, and increased website engagement to over
                1000 interactions and 750+ search hits. Served on HIMATEKTRO's steering
                committee to design and run structured cadre programs for new students.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="text-2xl font-bold mb-1">3+</h4>
                <p className="text-sm">Projects Done</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-1">1+</h4>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: Additional Info */}
        <div className="mt-12 pt-8 border-t border-zinc-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-2">Education</h4>
              <p className="text-sm text-zinc-300">
                Institut Teknologi Sepuluh Nopember, Department of Electrical Engineering.
                Current GPA 3.29 (2025). Focused on networking, digital communication systems, and programming.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Skills</h4>
              <p className="text-sm text-zinc-300">
                Cloud computing, networking, Linux basics, Python, MATLAB, Cisco Packet Tracer, Wireshark.
                Languages: English — very good.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Awards & Training</h4>
              <p className="text-sm text-zinc-300">
                Environment ambassador certificate, BANGGA scholarship recipient, Full English Program at The Golden Institute, and multiple leadership trainings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
