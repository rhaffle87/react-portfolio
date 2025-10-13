import DataImage from '../data/data'

function About() {
  return (
    <div className='About mt-32 py-10'>
      <div className='xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg' data-aos="fade-up" data-aos-duration="1000">
        <img src={DataImage.HeroImage} alt="Image" className='w-12 rounded-md mb-10 sm:hidden' loading='lazy'/>
        <p className='text-base/loose mb-10 text-center sm:text-center md:text-center'>
          As a Telecommunications Engineering student at Sepuluh Nopember Institute of Technology (ITS), Indonesia, I have a strong passion for web development and electronics. Throughout my academic journey,
          I served as Head of the Web Development Subdivision for EVOLUTION ITS 2025, leading team recruitment and coordination for a large student event. I also contributed to ILITS X FORDA ITS 2024 in logistics, resolving technical and vendor issues efficiently. Beyond campus, I built a digital art commission business on social media, gaining skills in creativity and entrepreneurship.
        </p>
        <div className='flex items-center justify-between'>
          <img src={DataImage.HeroImage} alt="Image" className='w-12 rounded-md sm:block hidden' loading='lazy'/>
          <div className='flex items-center gap-6'>
            <div>
              <h1 className='text-4xl mb-1'>3<span className='text-yellow-500'>+</span></h1>
            <p>Projects Done</p>
            </div>
            <div>
              <h1 className='text-4xl mb-1'>1<span className='text-yellow-500'>+</span></h1>
            <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
