import React from "react";

export default function About() {
    const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 80 },
    { name: "Tailwind CSS", level: 80 },
    { name: "JavaScript", level: 65 },
    { name: "Laravel / PHP", level: 75 },
    { name: "PostgreSQL", level: 80 },
    { name: "TypeScript", level: 80 },
    { name: "Angular", level: 70 },
    { name: "Git / GitHub", level: 85 },
    { name: "React", level: 30 },

  ];

  return (
    <section className="py-16 px-8 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">About</h2>
      <div className="w-16 h-1 bg-blue-500 mb-6"></div>

      <p className="text-gray-600 mb-10">
          I’m a passionate Full Stack Developer with hands-on experience in building responsive, scalable, and efficient web applications.
           I enjoy transforming complex ideas into user-friendly digital solutions using modern technologies like Angular, Laravel, and React.</p>

      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Left Side - Image */}
        <div className="flex-shrink-0 w-full lg:w-1/3 md:w-1/2">
          <img
            src="src/assets/images/professionalMen.avif"
            alt="Profile"
            className="rounded-lg shadow-lg object-cover w-full h-[400px]"
          />
        </div>

        {/* Right Side - Details */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Full Stack Developer.
          </h3>
          <p className="text-gray-600 italic mb-6 max-w-2xl">
            Passionate about building dynamic web applications, connecting responsive front-end interfaces with powerful back-end systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Name:</strong> <span>Balaji R</span>
              </li>
              <li>
                <strong>Birthday:</strong> <span>28 Oct 2001</span>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919345086197" className="text-blue-400 hover:underline">
                  +91 93450 86197
                </a>
              </li>
              <li>
                <strong>City:</strong> <span>Sivakasi</span>
              </li>
            </ul>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Age:</strong> <span>24</span>
              </li>
              <li>
                <strong>Degree:</strong> <span>Bachelor of Engineering in CSE</span>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:balajics076@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Balaji," className="text-blue-400 hover:underline">
                  balajics076@gmail.com
                </a>
              </li>
              <li>
                <strong>Experience:</strong> 1.3 Years at Pranion Technology Ventures Pvt. Ltd.
              </li>
            </ul>
          </div>
          <p className="text-gray-600 md:hidden sm:block lg:block">
            I’m a dedicated and detail-oriented Full Stack Developer with a passion for crafting efficient, 
            scalable, and visually engaging web solutions. I believe in writing clean, maintainable code and continuously 
            learning new technologies to improve performance and user experience.         
          </p>
        </div>
      </div>
      <p className="text-gray-600 hidden lg:hidden md:block">
            I’m a dedicated and detail-oriented Full Stack Developer with a passion for crafting efficient, 
            scalable, and visually engaging web solutions. I believe in writing clean, maintainable code and continuously 
            learning new technologies to improve performance and user experience.         
          </p>
      <div className="py-16 px-8 md:px-20 bg-blue-50 mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Skills</h2>
        <div className="w-16 h-1 bg-blue-500 mb-6"></div>
        <p className="text-gray-600 mb-10">
          Continuously improving and learning new technologies to build scalable,
          efficient, and user-friendly applications across the full stack.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold text-gray-700">
                  {skill.name}
                </span>
                <span className="text-sm font-semibold text-gray-700">
                  {/* {skill.level}%  // Displaying skill level percentage */}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
