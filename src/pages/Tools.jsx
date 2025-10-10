import { listTools } from '../data/data'
import LogoLoop from '../components/LogoLoop'
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiGithub,
  SiCanva,
  SiFigma,
  SiCoreldraw,
  SiPhp,
  SiMysql,
  SiWordpress,
} from "react-icons/si";

const techLogos = [
  {
    node: <SiReact />,
    title: "React JS",
    subtitle: "Framework",
    href: "https://react.dev/",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    subtitle: "Framework",
    href: "https://tailwindcss.com/",
  },
  {
    node: <SiJavascript />,
    title: "Javascript",
    subtitle: "Language",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiNodedotjs />,
    title: "Node JS",
    subtitle: "Javascript Runtime",
    href: "https://nodejs.org/",
  },
  {
    node: <SiGithub />,
    title: "Github",
    subtitle: "Repository",
    href: "https://github.com/",
  },
  {
    node: <SiCanva />,
    title: "Canva",
    subtitle: "Design App",
    href: "https://www.canva.com/",
  },
  {
    node: <SiFigma />,
    title: "Figma",
    subtitle: "Design App",
    href: "https://www.figma.com/",
  },
  {
    node: <SiCoreldraw />,
    title: "CorelDraw",
    subtitle: "Design App",
    href: "https://www.coreldraw.com/",
  },
  {
    node: <SiPhp />,
    title: "PHP",
    subtitle: "Language",
    href: "https://www.php.net/",
  },
  {
    node: <SiMysql />,
    title: "MySQL",
    subtitle: "Database",
    href: "https://www.mysql.com/",
  },
  {
    node: <SiWordpress />,
    title: "Wordpress",
    subtitle: "CMS",
    href: "https://wordpress.org/",
  },
];

function Tools() {
  return (
    <div className='container mx-auto px-4'>
      <div className='tools mt-32'>
      <h1 className='text-4xl/snug font-bold mb-4' data-aos="fade-up" data-aos-duration="1000">Tools Used</h1>
      <p className='xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Here are the tools I used for designing and developing the website.</p>

        {/* Logo Loop Section */}
        <div className="w-full max-w-[100vw] overflow-x-hidden flex justify-center mt-10">
          <LogoLoop
            logos={techLogos}
            logoHeight={80}        
            gap={32}               
            direction="right"      
            speed={60}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="#18181b" 
            scaleOnHover={true}
            ariaLabel="Tech logos"
            width="100%"          
          />
        </div>
        
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
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
  )
}

export default Tools
