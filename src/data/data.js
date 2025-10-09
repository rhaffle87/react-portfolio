import HeroImage from "/assets/hero-img.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/tailwind.png";
import Tools4 from "/assets/tools/js.png";
import Tools5 from "/assets/tools/nodejs.png";
import Tools6 from "/assets/tools/github.png";
import Tools7 from "/assets/tools/canva.png";
import Tools8 from "/assets/tools/figma.png";
import Tools9 from "/assets/tools/corel.png";
import Tools10 from "/assets/tools/php.png";
import Tools11 from "/assets/tools/mysql.png";
import Tools12 from "/assets/tools/wp.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Javascript",
    ket: "Language",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Github",
    ket: "Repository",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Canva",
    ket: "Design App",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Figma",
    ket: "Design App",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "CorelDraw",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "PHP",
    ket: "Language",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "MySQL",
    ket: "Database",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Wordpress",
    ket: "CMS",
    dad: "1200",
  },
];

import Proyek1 from "/assets/proyek/evol.png";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "EVOLUTION ITS 2025 Website",
    desk: "Led the web development subdivision to build and deploy the official event website.",
    tools: ["Wordpress", "PHP", "Javascript", "CSS", "HTML"],
    role: "Head of Web Development Subdivision",
    year: "2025",
    dad: "100",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Digital Art Commission Business",
    desk: "Make a personal digital art commission via social media platforms.",
    tools: ["Digital Art", "Entrepreneurship"],
    role: "Founder",
    year: "2021 – Present",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Academic Projects",
    desk: "Applied knowledge in electronics and telecommunications through lab works and research.",
    tools: ["Electronics", "Telcom", "Research"],
    role: "Student / Project Contributor",
    year: "2023 – Present",
    dad: "400",
  },
];

export const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Tools', ariaLabel: 'View tools used', link: '/tools' },
  { label: 'Projects', ariaLabel: 'View my projects', link: '/projects' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
]

export const socialItems = [
  { label: 'Instagram', link: 'https://www.instagram.com/rhaffle87/' },
  { label: 'GitHub', link: 'https://github.com/rhaffle87' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/rafli-alif-ihza-hartono-084460288/' }
]