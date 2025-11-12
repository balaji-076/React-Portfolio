import { useState } from "react";
import SidebarItem from "./SidebarItem";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaSkype, FaHome, FaUser, FaEnvelope, FaRegFileAlt } from "react-icons/fa";
import khabibImg from "../../assets/images/khabib.jpeg";

function Sidebar({closeSidebar}) {
  const [active, setActive] = useState("Home");

  return (
    <div className="flex flex-col items-center p-6 text-white gap-8 h-screen">

      {/* Profile Section */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-28 h-28 rounded-full overflow-hidden border-8 border-gray-800">
          <img src={khabibImg} alt="profile" className="w-full h-full object-cover"/>
        </div>
        <h2 className="text-xl font-semibold">Balaji R</h2>
        <div className="flex gap-4 mt-2">
          <IconCircle><FaXTwitter size={18} /></IconCircle>
          <IconCircle><FaFacebookF size={18} /></IconCircle>
          <IconCircle><FaInstagram size={18} /></IconCircle>
          <IconCircle><FaSkype size={18} /></IconCircle>
          <IconCircle><FaLinkedinIn size={18} /></IconCircle>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex flex-col items-center gap-6 mt-4 w-full">

        <SidebarItem
          to="home"
          label="Home"
          icon={<FaHome size={20} />}
          active={active}
          setActive={setActive}
          closeSidebar={closeSidebar}
        />

        <SidebarItem
          to="about"
          label="About"
          icon={<FaUser size={20} />}
          active={active}
          setActive={setActive}
          closeSidebar={closeSidebar}
        />

        <SidebarItem
          to="resume"
          label="Resume"
          icon={<FaRegFileAlt size={20} />}
          active={active}
          setActive={setActive}
          closeSidebar={closeSidebar}
        />

        <SidebarItem
          to="contact"
          label="Contact"
          icon={<FaEnvelope size={20} />}
          active={active}
          setActive={setActive}
          closeSidebar={closeSidebar}
        />
      </div>
    </div>
  );
}

function IconCircle({ children }) {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-sky-800 cursor-pointer">
      {children}
    </div>
  );
}

export default Sidebar;
