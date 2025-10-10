import { SiVite, SiTailwindcss, SiVercel } from 'react-icons/si';

const Footer = () => {
  return (
    <div className="my-10 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <div className="flex gap-7 items-center">
        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
          <SiVite className="h-6 w-6" />
          <span>Build with Vite</span>
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
          <SiTailwindcss className="h-6 w-6" />
          <span>Styled with Tailwind CSS</span>
        </a>
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
          <SiVercel className="h-6 w-6" />
          <span>Deployed into Vercel</span>
        </a>
      </div>
      <div className="text-sm text-gray-600">
        © 2025 Rafli Alif. All rights reserved.
      </div>
    </div>
  )
}

export default Footer