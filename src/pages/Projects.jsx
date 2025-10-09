import { listProyek } from '../data/data'

function Projects() {
  return (
    <div className="projects mt-32 py-10">
      <h1 className='text-center text-4xl font-bold mb-2' data-aos="fade-up" data-aos-duration="1000">Projects</h1>
      <p className='text-base/loose text-center opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"> Here are some of the projects I have worked on.</p>
      <div className='projects-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
        {listProyek.map((proyek) => (
          <div key={proyek.id} className='p-4 bg-zinc-700 rounded-md hover:bg-zinc-600' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
            <img src={proyek.gambar} alt="Proyek Image" loading='lazy' />
            <div>
              <h1 className='text-2xl font-bold my-4'>{proyek.nama}</h1>
              <p className='text-sm text-yellow-400 font-semibold'>
                {proyek.role} <span className='opacity-60'>· {proyek.year}</span>
              </p>
              <p className='text-base/loose my-4'>{proyek.desk}</p>
              <div className='flex flex-wrap gap-2'>
                {proyek.tools.map((tool, index) => (
                  <p key={index} className='py-1 px-3 border border-zinc-500 bg-zinc-500 rounded-md font-semibold text-sm'>{tool}</p>
                ))}
              </div>
              <div className='mt-8 text-center'>
                <a href="#" className='bg-yellow-700 p-3 rounded-lg cursor-pointer block border border-zinc-600 hover:bg-yellow-600 transition-colors'>Lihat Website</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
