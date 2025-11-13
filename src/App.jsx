import Sidebar from './components/react-bits/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react'


function App() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-[100%] flex text-white'>
      <button
        className={`"block lg:hidden fixed z-50 bg-[#040b14] p-1.5 rounded-md shadow-md duration-300 ${isOpen ? "top-4 md:ml-[55%] ml-[58%]" : 'top-4 right-3'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={15} /> : <FaBars size={15} />}
      </button>

      {/* Sidebar (separate from button) */}
      <div
        className={`fixed lg:static top-0 left-0 h-screen lg:h-auto bg-[#040b14] z-40 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:flex lg:flex-col lg:w-[16%] w-[70%] sm:w-[60%]`}
      >
        <Sidebar closeSidebar={() => setIsOpen(false)} />
      </div>

      {/* <div className="flex flex-col bg-[#040b14] h-screen sticky top-0 hidden lg:flex lg:w-[16%]"> */}
        {/* <Sidebar /> */}
      {/* </div> */}
      <div className="flex flex-col lg:w-[84%] w-full" >
        <div className="inset-0" onClick={() => setIsOpen(false)} >
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="resume">
            <Resume />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
