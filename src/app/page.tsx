import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import Image from "next/image"
import Education from "./education/page"
import Project from "./projects/page"
import Contact from "./contact/page"





export default function Home() {
  return (
    <div className="flex flex-col gap-20 px-5 md:px-10  
   ">


   


      <nav className="bg-red-500 text-white px-4 py-2 flex justify-between items-center">
        <div className="text-lg font-bold">Portfolio</div>
        <ul className="hidden md:flex gap-4">
          <li><a href="#education">Education</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="md:hidden">☰</div> 
      </nav>


      <h1 className="mt-10 mb-10 px-5 py-5 text-2xl sm:text-3xl md:text-4xl font-bold outline outline-4 outline-amber-600 font-serif bg-red-400 text-black shadow-lg
      shadow-red-500 ">
        Welcome to my Portfolio:
      </h1>

      {/* Introduction */}
      <div className="flex flex-col md:flex-row gap-5">
        <div className="px-5 md:w-1/2">
          <h2 className="font-bold text-red-800 text-2xl underline decoration-double">
            Hi! This is Zubia Fatima
          </h2>
          <p className="font-bold font-serif underline decoration-4 text-xl">
            Frontend Developer
          </p>
          <div className="font-bold text-base md:text-lg">
            <p>
              A passionate frontend developer with 1 year of experience
              in user-friendly and visually stunning web applications.
            </p>
            <p>
              My expertise lies in HTML, CSS, JavaScript, TypeScript, and React,
              with a strong focus on delivering high-quality solutions that meet
              clients' needs.
            </p>
          </div>
        </div>
        <div className="mx-auto md:w-1/2">
          <Image
            src="/image7.jpg"
            alt="Profile Picture"
            width={400}
            height={300}
            className="w-full max-w-[400px] h-auto border-8 border-dashed border-yellow-500"
          />
        </div>
      </div>

    
      <section id="education">
        <Education />
      </section>

      <section id="project" >
        <Project />
      </section>

      <section id="contact" className="py-10 ">
        <Contact />
      </section>


      <footer>
        <Footer />
      </footer>
    </div>
   
  );
}
