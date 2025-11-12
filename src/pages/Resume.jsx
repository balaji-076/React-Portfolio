
export default function Resume() {
  return (
    <section className="py-16 px-8 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Resume</h2>
      <div className="w-16 h-1 bg-blue-500 mb-6"></div>
      <p className="text-gray-600 max-w-l">
        Passionate and results-driven Full Stack Developer with hands-on
        experience in both frontend and backend development. Skilled in creating
        efficient, scalable, and user-friendly web applications using modern
        technologies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          {/* Summary */}
          <h3 className="text-xl font-semibold mb-4">Summary</h3>
          <div className="border-l-2 border-blue-500 pl-6 mb-8">
            <h4 className="font-semibold text-gray-800">BALAJI R – Full Stack Developer</h4>
            <p className="italic text-gray-600 mt-1 mb-2">
              Passionate about crafting dynamic and scalable web applications
              with clean, efficient code and responsive design.
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>Sivakasi, Tamil Nadu, India</li>
              <li>
                <a href="tel:+919345086197" className="text-blue-600 hover:underline">
                  +91 93450 86197
                </a>
              </li>
              <li>
                <a href="mailto:balajics076@gmail.com" className="text-blue-600 hover:underline">
                  balajics076@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Education */}
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <div className="border-l-2 border-blue-500 pl-6 space-y-6">
            <div>
              <h4 className="font-semibold text-gray-800">Bachelor of Engineering in Computer Science and Engineering</h4>
              <p className="text-sm text-gray-500">2020 - 2024</p>
              <p className="italic text-gray-600">
                Kamaraj College of Engineering and Technology, Virudhunagar.
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Graduated with solid knowledge in software development and modern web technologies.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">Higher Secondary Education</h4>
              <p className="text-sm text-gray-500">2019 - 2020</p>
              <p className="italic text-gray-600">
                Hindu Thevamar Hr Sec School, Sivakasi
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Focused on mathematics, physics, and logical reasoning.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Professional Experience</h3>
          <div className="border-l-2 border-blue-500 pl-6 space-y-6">
            <div>
              <h4 className="font-semibold text-gray-800">Frontend & Backend Developer</h4>
              <p className="text-sm text-gray-500">2025 - Present</p>
              <p className="italic text-gray-600">Pranion Technology Ventures Pvt. Ltd.</p>
              <ul className="list-disc list-inside text-gray-600 text-sm mt-1 space-y-1">
                <li>
                  Developed and maintained dynamic web modules using Angular,
                  TypeScript, and Laravel.
                </li>
                <li>
                  Designed RESTful APIs and optimized backend logic with
                  PostgreSQL and PHP.
                </li>
                <li>
                  Collaborated with cross-functional teams to improve UI
                  performance and code quality.
                </li>
                <li>
                  Worked on document management, tracking, and role-based access
                  modules for enterprise applications.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">Training Period – Web Development</h4>
              <p className="text-sm text-gray-500">Apr 2024 - Jun 2024</p>
              <p className="italic text-gray-600">Pranion Technology Ventures Pvt. Ltd.</p>
              <ul className="list-disc list-inside text-gray-600 text-sm mt-1 space-y-1">
                <li>
                  Assisted in frontend development using PHP and Tailwind
                  CSS.
                </li>
                <li>
                  Implemented API integrations and UI improvements for live
                  applications.
                </li>
                <li>
                  Gained practical experience in full-stack development and
                  version control systems.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      
      {/* Download Resume Button */}
      <div className="mt-12 text-center">
        <a
          href="src/assets/pdf/Resume (2) (1).pdf"
          download
          className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-all"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
