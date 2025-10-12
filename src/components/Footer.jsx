import { SiVite, SiTailwindcss, SiVercel } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="mt-16 py-8 border-t border-zinc-800 text-gray-300">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Tech stack links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-center">
          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-all hover:-translate-y-1"
          >
            <SiVite className="h-5 w-5 text-yellow-500" />
            <span>Built with Vite</span>
          </a>

          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-all hover:-translate-y-1"
          >
            <SiTailwindcss className="h-5 w-5 text-cyan-400" />
            <span>Styled with Tailwind CSS</span>
          </a>

          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-all hover:-translate-y-1"
          >
            <SiVercel className="h-5 w-5 text-white" />
            <span>Deployed on Vercel</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs md:text-sm text-gray-500 text-center md:text-right">
          © 2025 Rafli Alif. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
