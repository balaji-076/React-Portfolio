function SidebarItem({ to, icon, label, active, setActive,closeSidebar }) {

  const handleClick = (e) => {
    e.preventDefault();
    setActive(label);

    const el = document.getElementById(to);
    el?.scrollIntoView({ behavior: "smooth" });
        if (window.innerWidth < 1024 && closeSidebar) {
      closeSidebar();
    }

  };

  const isActive = active === label;

  return (
    <a href={"#" + to} onClick={handleClick} className="flex items-center gap-4 py-2 px-3 cursor-pointer">
      <span className={`text-lg transition ${ isActive ? "text-sky-400" : "text-white group-hover:text-sky-400" }`}>
        {icon}
      </span>
      <span>{label}</span>
    </a>
  );
}

export default SidebarItem;
