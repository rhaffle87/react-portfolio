import { useState, useEffect } from "react"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div className="navbar py-7 flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">Portfolio</h1>
        <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 
        md:opacity-100 md:flex font-medium ${isScrolled ? "top-0 opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl" : "-top-10 opacity-0"} transition-all z-40`}>
            <li><a href="#home" className="sm:text-lg text-base font-medium">Home</a></li>
            <li><a href="#about" className="sm:text-lg text-base font-medium">About</a></li>
            <li><a href="#projects" className="sm:text-lg text-base font-medium">Projects</a></li>
            <li><a href="#contact" className="sm:text-lg text-base font-medium" >Contact</a></li>
        </ul>
        </div>
    )
}

export default Navbar