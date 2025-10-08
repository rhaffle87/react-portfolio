import DataImage from './data'
import StaggeredMenu from './components/StaggeredMenu'
import { listTools, listProyek } from './data'
import { menuItems, socialItems } from './data'

function App() {
  return (
      <> 
      <div className="fixed top-50 right-0 z-40 overflow-hidden">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#000000"
          changeMenuColorOnOpen={true}
          colors={['#EDC06E' , '#E09B1B' , '#68480D']}
          logoUrl="public/vite.svg"
          accentColor="#EDC06E"
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
      </div>

      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 pt-25 items-center xl:gap-0 gap-6 grid-cols-1" id='home'>
        <div className='animate__animated animate__fadeInUp animate__delay-3s'>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className='w-10 rounded-md' loading='lazy'/>
            <q>Beautiful code is born from perseverance.😊</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hello, I'm Rafli Alif</h1>
          <p className="text-base/loose mb-6 opacity-50">Hi! I’m Rafli Alif Ihza Hartono, a Telecommunications Engineering student at ITS who is passionate about technology, especially web development and electronics. With experiences in organizations and event committees, I’m used to working in teams, tackling challenges with practical solutions, and continuously learning to create impactful projects.</p>
          <div className="flex sm:gap-4 item-center gap-2">
            <a href="#" className='bg-yellow-700 p-4 rounded-2xl hover:bg-yellow-600'>Download CV <i className="ri-download-line ri-lg"></i></a>
            <a href="#projects" className='bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600'>Lihat Proyek<i class="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto md:items-center sm: animate__animated animate__fadeInUp animate__delay-4s" loading='lazy'/>
      </div>

      {/* About Section */}
      <div className='About mt-32 py-10' id='about'>
        <div className='xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg' data-aos="fade-up" data-aos-duration="1000">
          <img src={DataImage.HeroImage} alt="Image" className='w-12 rounded-md mb-10 sm:hidden' loading='lazy'/>
          <p className='text-base/loose mb-10 text-center sm:text-center md:text-center'>As a Telecommunications Engineering student at ITS,
            I served as Head of the Web Development Subdivision for EVOLUTION ITS 2025, leading team recruitment and coordination for a large student event. I also contributed to ILITS X FORDA ITS 2024 in logistics, resolving technical and vendor issues efficiently. Beyond campus, I built a digital art commission business on social media, gaining skills in creativity, client management, and entrepreneurship.
          </p>
          <div className='flex items-center justify-between'>
            <img src={DataImage.HeroImage} alt="Image" className='w-12 rounded-md sm:block hidden' loading='lazy'/>
            <div className='flex items-center gap-6'>
              <div>
                <h1 className='text-4xl mb-1'>2<span className='text-yellow-500'>+</span></h1>
              <p>Project Done</p>
              </div>
              <div>
                <h1 className='text-4xl mb-1'>1<span className='text-yellow-500'>+</span></h1>
              <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className='tools mt-32' id='tools'>
          <h1 className='text-4xl/snug font-bold mb-4' data-aos="fade-up" data-aos-duration="1000">Tools Used</h1>
          <p className='xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Here are the tools I used for designing and developing the website.</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool, index) => (
              <div className='group flex items-center gap-2 p-3 border border-zinc-600 hover:border-zinc-700 rounded-md  transition-colors' key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
              <img src={tool.gambar} alt="Tools Image" className='w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900' loading='lazy'/>
              <div>
                <h4 className='font-bold'>{tool.nama}</h4>
                <p className='opacity-50'>{tool.ket}</p>
              </div>
             </div>
            ))}
          </div>
        </div>
      </div>


      <div className="projects mt-32 py-10" id='projects'>
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
      
      <div className="Contact p-10 mt-32" id='contact'>
        <h1 className='text-4xl mb-2 font-bold text-center' data-aos="fade-up" data-aos-duration="1000">Contact</h1>
        <p className='text-base/loose text-center opacity-50 mb-10' data-aos="fade-up" data-aos-duration="1000" >Let's get connected with me!</p>
        <form action="https://formsubmit.co/rhaffle87@gmail.com" method="POST" className='bg-zinc-800 p-10 rounded-md w-fit mx-auto' autoComplete='off' data-aos="fade-up" data-aos-duration="1000" data-aos-delaty="500">
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold'>Name</label>
              <input type="text" name='Name' placeholder='Input your name ...' className='border border-zinc-500 p-2 rounded-md' required/>
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold'>Email</label>
              <input type="email" name='Email' placeholder='Input your email ...' className='border border-zinc-500 p-2 rounded-md' required/>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='Message' className='font-semibold'>Message</label>
              <textarea name="Message" id="Message" cols={45} rows={7} placeholder='Give me your Message ...' className='border border-zinc-500 p-2 rounded-md' required ></textarea>
            </div>  
            <div className='text-center'>
              <button type='submit' className='bg-yellow-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-yellow-600 transition-colors'>Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
