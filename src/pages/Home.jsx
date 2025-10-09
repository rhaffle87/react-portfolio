import DataImage from '../data/data'

function Home() {
  return (
    <div className="hero grid md:grid-cols-2 pt-25 items-center xl:gap-0 gap-6 grid-cols-1">
      <div className='animate__animated animate__fadeInUp animate__delay-1s'>
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Hero Image" className='w-10 rounded-md' loading='lazy'/>
          <q>Keep doing the best and Hopes for the better.😊</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">Hello, I'm Rafli Alif</h1>
        <p className="text-base/loose mb-6 opacity-50">Hi! I’m Rafli Alif Ihza Hartono, a Telecommunications Engineering student at ITS who is passionate about technology, especially web development and electronics. With experiences in organizations and event committees, I’m used to working in teams, tackling challenges with practical solutions, and continuously learning to create impactful projects.</p>
        <div className="flex sm:gap-4 item-center gap-2">
          <a href="#" className='bg-yellow-700 p-4 rounded-2xl hover:bg-yellow-600'>Download CV <i className="ri-download-line ri-lg"></i></a>
          <a href="/projects" className='bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600'>Lihat Proyek<i className="ri-arrow-down-line ri-lg"></i></a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto md:items-center sm: animate__animated animate__fadeInUp animate__delay-2s" loading='lazy'/>
    </div>
  )
}

export default Home
