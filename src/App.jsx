import { useState } from "react";

// FontAwesome icons
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaBars, FaChevronDown, FaChevronUp,
  FaCode, FaPython, FaPhp, FaJs, FaReact, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaDocker, FaDatabase, FaCloud, FaVial, FaProjectDiagram, FaTools, FaGlobe, FaServer
} from "react-icons/fa";

// SimpleIcons (only the ones that exist)
import {
  SiTypescript, SiAngular, SiBootstrap, SiTailwindcss,
  SiKubernetes, SiMysql, SiDotnet
} from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMaster, setOpenMaster] = useState(false);
  const [openBachelor, setOpenBachelor] = useState(false);
  const [openJob, setOpenJob] = useState(null);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="space-y-12 font-sans bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl min-h-screen bg-cover bg-center bg-no-repeat bg-fixed text-gray-100" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}back.webp')` }}>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">MyPortfolio</h1>
        <div className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="space-y-12 flex flex-col items-center gap-4 py-4 bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl shadow-md md:hidden">
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="space-y-12 flex flex-col md:flex-row items-center justify-center text-center md:text-left px-10 py-20 bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl from-blue-100 to-blue-50"  
      data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="max-w-xl bg-transparent">
          <h2 className="text-4xl font-bold text-teal-300">Hi, I’m Ronald 👋</h2>
          <p className="mt-4 text-lg text-gray-100">
            A Software Engineer passionate about building scalable apps, cloud solutions, and innovative tech.
          </p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-6 py-3 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-700">
              View My Works
            </a>
            <a href="#contact" className="px-6 py-3 border border-blue-600 rounded-lg hover:bg-blue-50">
              Contact Me
            </a>
          </div>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="Profile"
          className="rounded-full w-64 h-64 mt-10 md:mt-0 shadow-lg opacity-80  grayscale-[30%]"
        />
      </section>
      
      {/* Content Section */}
      <div className="space-y-12 max-w-screen-lg mx-auto px-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        {/* About Section */}
        <section id="about" className="px-10 py-20 bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 className="text-3xl font-bold mb-6 text-teal-300">About Me</h3>
          <p className="text-lg text-gray-100 leading-relaxed max-w-4xl">
            I am a seasoned <strong>Full-Stack Software Engineer</strong> with over 
            <strong> 16 years of professional experience</strong> across 
            <strong> financial services, healthcare, and enterprise systems</strong>. 
            My expertise spans <strong>C#/.NET, Python, SQL, React, and TypeScript</strong>, 
            combined with modern <strong>DevOps practices</strong> using Docker, Kubernetes, and CI/CD pipelines.
          </p>

          <p className="text-lg text-gray-100 leading-relaxed max-w-4xl mt-4">
            I specialize in designing and building scalable, secure, and high-performance applications 
            using <strong>microservices architecture</strong>, <strong>cloud platforms (Azure)</strong>, and 
            best practices such as <strong>SOLID principles</strong> and design patterns. 
            Beyond coding, I bring strong skills in <strong>system analysis, technical leadership, 
            and collaboration with cross-functional teams</strong>.
          </p>

          <p className="text-lg text-gray-100 leading-relaxed max-w-4xl mt-4">
            Currently pursuing a <strong>Master of Software Engineering (Level 9)</strong> in New Zealand, 
            I continue to enhance my technical expertise while working on innovative academic and professional projects.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-10 py-20 bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 className="text-3xl font-bold mb-10 text-teal-300">Projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Satellite Office – Salary Packaging */}
            <div className="p-6 bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-teal-300">Salary Packaging & Financial Systems</h4>
              <p className="text-gray-100 mt-2">
                Built and maintained enterprise-grade salary packaging and financial systems at Smartgroup 
                (via Satellite Office), improving scalability and compliance for Australian clients.
              </p>
              <p className="text-sm text-gray-100 mt-2">
                <strong>Tech:</strong> .NET Core, SQL Server, Microservices, Docker, Kubernetes, Azure DevOps
              </p>
            </div>

            {/* Willis Towers Watson – BrightChoices */}
            <div className="p-6 bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-teal-300">BrightChoices</h4>
              <p className="text-gray-100 mt-2">
                Employee benefits marketplace where users explore, compare, and enroll in health and 
                financial benefits. Delivered enhancements that improved <strong>user experience and performance</strong>.
              </p>
              <p className="text-sm text-gray-100 mt-2">
                <strong>Tech:</strong> C#, ASP.NET MVC, Angular, SQL Server, Azure
              </p>
            </div>

            {/* Willis Towers Watson – Benefit Access */}
            <div className="p-6 bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-teal-300">Benefit Access</h4>
              <p className="text-gray-100 mt-2">
                Secure platform for employees to access and manage workplace benefits. 
                Integrated <strong>single sign-on, role-based access, and reporting</strong>.
              </p>
              <p className="text-sm text-gray-100 mt-2">
                <strong>Tech:</strong> C#, ASP.NET, Angular, SQL Server, Azure DevOps
              </p>
            </div>

            {/* Willis Towers Watson – FSA Portal */}
            <div className="p-6 bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-teal-300">FSA Portal</h4>
              <p className="text-gray-100 mt-2">
                Flexible Spending Account portal enabling employees to manage contributions, reimbursements, 
                and balances. Improved <strong>compliance and workflows</strong>.
              </p>
              <p className="text-sm text-gray-100 mt-2">
                <strong>Tech:</strong> C#, ASP.NET MVC, SQL Server, REST APIs, CI/CD
              </p>
            </div>

            {/* AXA Philippines – Customer Portals */}
            <div className="p-6 bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-teal-300">Insurance Customer Portals</h4>
              <p className="text-gray-100 mt-2">
                Built online portals at AXA Philippines for <strong>policy management, claims processing, 
                and digital payments</strong>, driving digital transformation for clients.
              </p>
              <p className="text-sm text-gray-100 mt-2">
                <strong>Tech:</strong> .NET Core, Angular, REST APIs, SQL Server
              </p>
            </div>

            {/* Equicom & Eclaro – HR & Healthcare Systems */}
            <div className="p-6 bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-teal-300">HR & Healthcare Systems</h4>
              <p className="text-gray-100 mt-2">
                Designed and developed HRIS, billing, and healthcare management applications at Equicom 
                and Eclaro, supporting enterprise operations and analytics.
              </p>
              <p className="text-sm text-gray-100 mt-2">
                <strong>Tech:</strong> C#, .NET Framework, MVC, SQL Server, SSRS, Crystal Reports
              </p>
            </div>

            {/* GitHub Projects */}
            <div className="p-6 bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl border rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-teal-300">Car Rental System</h4>
              <p className="text-gray-100 mt-2">
                Full-stack project for Yoobee MSE800 using layered architecture, UML diagrams, and 
                standalone builds for deployment.
              </p>
              <a href="https://github.com/retiangson/MSE800_Car_Rental" target="_blank" rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-700 transition">
                View on GitHub
              </a>
            </div>

            <div className="p-6 bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl border rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-teal-300">Store Management System</h4>
              <p className="text-gray-100 mt-2">
                CLI-based Python app with SQLAlchemy for data persistence, validation, and testing.
              </p>
              <a href="https://github.com/retiangson/MSE800_PSE/tree/main/Week3/Activity6" target="_blank" rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-700 transition">
                View on GitHub
              </a>
            </div>

            <div className="p-6 bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl border rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-teal-300">HR System</h4>
              <p className="text-gray-100 mt-2">
                Object-Oriented Python HR system showcasing encapsulation, inheritance, and modular design.
              </p>
              <a href="https://github.com/retiangson/MSE800_PSE/tree/main/Week3/Activity4" target="_blank" rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-700 transition">
                View on GitHub
              </a>
            </div>

            <div className="p-6 bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl border rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-teal-300">Quantum Computing with Qiskit</h4>
              <p className="text-gray-100 mt-2">
                Academic experiments using Qiskit: quantum circuits, oracles, Grover’s Search, 
                and quantum teleportation.
              </p>
              <a href="https://github.com/retiangson/MSE800_PSE/tree/main/Quantum_Computing" target="_blank" rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-700 transition">
                View on GitHub
              </a>
            </div>

            <div className="p-6 bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl border rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-teal-300">Python OOP & Assignments</h4>
              <p className="text-gray-100 mt-2">
                A collection of Python assignments for Yoobee MSE modules, covering OOP design, 
                database integration, and unit testing.
              </p>
              <a href="https://github.com/retiangson/MSE800_PSE/tree/main" target="_blank" rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-700 transition">
                View on GitHub
              </a>
            </div>

          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="px-10 py-20 bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 className="text-3xl font-bold mb-10 text-teal-300">Education</h3>

          <div className="relative border-l-4 border-indigo-500 pl-6 space-y-12">

            {/* Master's Degree */}
            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpenMaster(!openMaster)}
              >
                <h4 className="text-xl font-semibold text-teal-300">
                  Master of Software Engineering (Level 9)
                </h4>
                {openMaster ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <span className="block text-gray-100 text-sm mb-3">
                2024 – 2026 (Ongoing) | Yoobee College, New Zealand
              </span>

              {openMaster && (
                <div className="text-gray-100 space-y-4">
                  <p>
                    The program is designed to advance technical expertise in modern
                    software engineering, research, and applied emerging technologies.
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      <strong>Professional Software Engineering:</strong> 
                      Advanced design of single and n-tier applications using Python, C#, and .NET. 
                      Focus on software engineering models, design patterns, testing, and debugging.
                    </li>
                    <li>
                      <strong>Research Methods:</strong> 
                      Developing research proposals, design thinking, and quantitative/qualitative methodologies 
                      for the final industry-based capstone project.
                    </li>
                    <li>
                      <strong>Quantum Computing:</strong> 
                      Exploration of quantum algorithms, teleportation, superdense coding, 
                      entanglement, and coherence with practical applications.
                    </li>
                    <li>
                      <strong>Data Analytics:</strong> 
                      Data modeling, visualization, and dashboards with machine learning for predictive, 
                      diagnostic, and prescriptive business insights.
                    </li>
                    <li>
                      <strong>Blockchain & Decentralised Identity:</strong> 
                      Blockchain fundamentals, smart contracts, digital currency, cryptographic security, 
                      and decentralised digital identity systems.
                    </li>
                    <li>
                      <strong>Cloud Security:</strong> 
                      Principles and innovative solutions for securing cloud ecosystems across 
                      infrastructure and enterprise environments.
                    </li>
                    <li>
                      <strong>Intelligent Transportation Systems (ITS):</strong> 
                      AI and ML in transportation networks, public transport architecture, 
                      urban planning, and cybersecurity for ITS applications.
                    </li>
                    <li>
                      <strong>Industry-based Capstone Project:</strong> 
                      Integration of all coursework into a final applied research project 
                      — from proposal to delivery — showcasing advanced software engineering and research skills.
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Bachelor's Degree */}
            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpenBachelor(!openBachelor)}
              >
                <h4 className="text-xl font-semibold text-teal-300">
                  Bachelor of Science in Computer Science
                </h4>
                {openBachelor ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <span className="block text-gray-100 text-sm mb-3">
                2004 – 2008 | Filamer Christian University, Philippines
              </span>

              {openBachelor && (
                <p className="text-gray-100">
                  Built a strong foundation in programming, algorithms, and systems development. 
                  Early projects in <strong>C#, VB.Net, and SQL Server</strong> prepared me for a 
                  professional career in enterprise software engineering.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-10 py-16 bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 className="text-3xl font-bold mb-8 text-teal-300">Skills</h3>

          {/* Programming */}
          <div className="mb-8" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h4 className="text-xl font-semibold text-gray-100 mb-3">Programming</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "C#", icon: <SiDotnet /> },
                { name: "VB.Net", icon: <FaCode /> },          // generic
                { name: ".NET Core", icon: <SiDotnet /> },
                { name: ".NET Framework (Legacy)", icon: <FaCode /> }, // generic
                { name: "VB6", icon: <FaCode /> },             // generic
                { name: "VBA", icon: <FaCode /> },             // generic
                { name: "Python", icon: <FaPython /> },
                { name: "PHP", icon: <FaPhp /> },
                { name: "TypeScript", icon: <SiTypescript /> },
                { name: "JavaScript", icon: <FaJs /> },
              ].map(skill => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-lg shadow"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend & Web */}
          <div className="mb-8" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h4 className="text-xl font-semibold text-gray-100 mb-3">Frontend & Web</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "React", icon: <FaReact /> },
                { name: "Angular", icon: <SiAngular /> },
                { name: "AngularJS", icon: <FaGlobe /> },      // generic web
                { name: "ASP.NET", icon: <SiDotnet /> },
                { name: "MVC", icon: <FaGlobe /> },            // generic web
                { name: "HTML5", icon: <FaHtml5 /> },
                { name: "CSS3", icon: <FaCss3Alt /> },
                { name: "Bootstrap", icon: <SiBootstrap /> },
                { name: "Kendo UI", icon: <FaGlobe /> },       // generic web
                { name: "WordPress", icon: <FaGlobe /> },      // generic web
                { name: "Tailwind CSS", icon: <SiTailwindcss /> },
              ].map(skill => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-lg shadow"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & APIs */}
          <div className="mb-8" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h4 className="text-xl font-semibold text-gray-100 mb-3">Backend & APIs</h4>
            <div className="flex flex-wrap gap-3">
              {["Web API","WCF","SOAP","REST","Microservices","SOA","Layered Architecture"].map(skill => (
                <span
                  key={skill}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-lg shadow"
                >
                  <FaServer /> {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Databases & Reporting */}
          <div className="mb-8" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h4 className="text-xl font-semibold text-gray-100 mb-3">Databases & Reporting</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "SQL Server", icon: <FaDatabase /> },
                { name: "MySQL", icon: <SiMysql /> },
                { name: "SQLite", icon: <FaDatabase /> },
                { name: "MS Access", icon: <FaDatabase /> },
                { name: "DB2", icon: <FaDatabase /> },
                { name: "Oracle", icon: <FaDatabase /> },
                { name: "SSIS", icon: <FaDatabase /> },
                { name: "SSRS", icon: <FaDatabase /> },
                { name: "Crystal Reports", icon: <FaDatabase /> },
              ].map(skill => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg shadow"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="mb-8" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h4 className="text-xl font-semibold text-gray-100 mb-3">Cloud & DevOps</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Microsoft Azure", icon: <FaCloud /> },
                { name: "Azure Data", icon: <FaCloud /> },
                { name: "Azure DevOps", icon: <FaCloud /> },
                { name: "Docker", icon: <FaDocker /> },
                { name: "Kubernetes", icon: <SiKubernetes /> },
                { name: "Bamboo", icon: <FaCloud /> },     // generic devops
                { name: "CI/CD", icon: <FaCloud /> },
              ].map(skill => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-800 rounded-lg shadow"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Testing */}
          <div className="mb-8" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h4 className="text-xl font-semibold text-gray-100 mb-3">Testing</h4>
            <div className="flex flex-wrap gap-3">
              {["xUnit","NUnit","MS Unit Test","Moq","Rhino Mocks","SpecFlow","Selenium","Cypress"].map(skill => (
                <span
                  key={skill}
                  className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-lg shadow"
                >
                  <FaVial /> {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Version Control & Practices */}
          <div className="mb-8" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h4 className="text-xl font-semibold text-gray-100 mb-3">Version Control, Methodologies & Practices</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "GitHub", icon: <FaGithub /> },
                { name: "GitBash", icon: <FaProjectDiagram /> },
                { name: "TFS", icon: <FaProjectDiagram /> },
                { name: "SVN", icon: <FaProjectDiagram /> },
                { name: "Tortoise", icon: <FaProjectDiagram /> },
                { name: "Agile (SCRUM)", icon: <FaProjectDiagram /> },
                { name: "Kanban", icon: <FaProjectDiagram /> },
                { name: "Waterfall", icon: <FaProjectDiagram /> },
                { name: "OOP", icon: <FaProjectDiagram /> },
                { name: "SOLID", icon: <FaProjectDiagram /> },
                { name: "Repository Pattern", icon: <FaProjectDiagram /> },
                { name: "Unit of Work", icon: <FaProjectDiagram /> },
                { name: "MVC", icon: <FaProjectDiagram /> },
                { name: "MVVM", icon: <FaProjectDiagram /> },
              ].map(skill => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-800 rounded-lg shadow"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Others */}
          <div className="mb-8" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h4 className="text-xl font-semibold text-gray-100 mb-3">Others</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "PDF Pro", icon: <FaTools /> },
                { name: "Photoshop", icon: <FaTools /> },
              ].map(skill => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-black rounded-lg shadow"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-10 py-20 bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 className="text-3xl font-bold mb-10 text-teal-300">Experience</h3>

          <div className="space-y-6">
            {[
              {
                role: "Application Analyst Developer – Satellite Office (Smartgroup Australia)",
                period: "2023 – 2025 | Manila, PH",
                description: "Smartgroup provides enterprise-grade salary packaging and fleet management solutions across the corporate, healthcare, government, and education sectors.",
                details: [
                  "Optimised and maintained stored procedures, reducing data-processing time from 23 hours to 2–3 hours through indexing, query tuning, and batch refactoring.",
                  "Developed and enhanced SSRS and PDF Pro reports, delivering critical data insights to various business units and improving operational visibility.",
                  "Led feature development and enhancements to existing systems, introducing new business functionalities and improving overall user experience.",
                  "Troubleshot and investigated application and data-related issues, resolving incidents efficiently to minimise downtime and ensure system stability.",
                  "Provided technical support to internal and external clients, addressing tickets, user issues, and change requests effectively.",
                  "Participated in the code review process, implementing and enforcing coding standards and best practices across multiple development teams.",
                  "Created and maintained unit tests, integration tests, and automated test suites for both new and legacy applications, ensuring software reliability and regression safety.",
                  "Collaborated closely with project managers, business analysts, and end users, translating business requirements into high-quality technical solutions.",
                  "Researched new tools, frameworks, and technologies, integrating modern approaches to enhance project efficiency and maintain industry best practices."
                ]
              },
              {
                role: "Senior Software Engineer – Willis Towers Watson",
                period: "2020 – 2023 | Manila, PH",
                description: "Willis Towers Watson (Philippines) | Mar 2020 – Jul 2023 Developed and supported enterprise-scale HR and benefits platforms including BrightChoices, Benefit Access, and FSA Portal, enabling employees worldwide to manage customised insurance and wellness packages.",
                details: [
                  "Led feature development and enhancement work for complex enterprise applications using .NET Core, Angular, and SQL Server, ensuring quality, scalability, and maintainability.",
                  "Participated in the extraction and conversion of monolithic components into microservices, improving system modularity, deployment speed, and performance.",
                  "Designed and implemented new APIs, data modules, and backend services that integrated seamlessly with existing platforms.",
                  "Applied SOLID principles, Repository, Service Layer, Factory, and DTO patterns to build clean, maintainable, and scalable systems.",
                  "Actively participated in code reviews, providing constructive feedback, maintaining coding standards, and promoting consistency across teams.",
                  "Mentored and coached junior developers, strengthening their understanding of clean code, debugging, version control, and Agile delivery.",
                  "Participated in the technical hiring process, assessing candidate skills, conducting interviews, and helping select high-performing developers.",
                  "Delivered well-tested, production-ready solutions with unit, integration, and UI automation tests using NUnit, SpecFlow, Selenium, and Cypress, achieving 98% coverage.",
                  "Championed best practices, including dependency injection, CI/CD pipelines, modular architecture, and continuous improvement methodologies.",
                  "Hosted “Lunch & Learn” sessions to share emerging frameworks, new tools, and architecture insights across global teams.",
                  "Collaborated with cross-functional Agile squads to deliver secure, performant, and user-focused software aligned with enterprise standards."
                ]
              },
              {
                role: "Core Software Developer – AXA Philippines",
                period: "2018 – 2020 | Manila, PH",
                description: "AXA is one of the world’s leading insurers, providing protection and financial solutions to more than 57 million people globally. I worked on ACE-DNN – Solutions Delivery, a generic platform designed to automate backend insurance operations. The goal was to help internal teams move away from long manual processes and create faster, more accurate reporting systems to support client management and decision-making.",
                details: [
                  "Developed and integrated new .NET Core modules, improving overall system performance and user experience.",
                  "Refactored legacy SQL code and optimised database queries, reducing average processing time by around 45%.",
                  "One of my most significant achievements was automating the manual reporting and data- generation process. This task used to take the operations team 2–3 months, but after automation, it was completed in just one day, saving time and improving productivity across departments.",
                  "Participated in Change Advisory Board (CAB) meetings, presenting planned changes, discussing risks and impacts, and coordinating deployment approvals with senior operations and management teams.",
                  "Handled on-premises deployments, ensuring environments were properly configured and that each rollout was successful and issue-free.",
                  "Conducted code reviews and maintenance activities, keeping the application stable, secure, and aligned with best practices.",
                  "Collaborated with QA engineers and business analysts to identify and resolve issues early in the cycle, improving release quality and reducing rework.",
                  "Maintained a complete suite of unit and integration tests with 100% coverage, which helped the team release confidently with all tests consistently passing.",
                  "Reviewed and optimised SQL scripts and stored procedures, enhancing data accuracy and report reliability across different modules."
                ]
              },
              {
                role: "Full Stack Developer - L.R.B. Medical & Maternity Clinic",
                period: "Jan 2018 – Aug 2018 | Manila, PH",
                description: "Developed and maintained a clinic management system supporting patient records, billing, and scheduling. The project was built using .NET Core, Angular, SQL Server, and Entity Framework, improving operational efficiency and reporting accuracy for clinical and administrative staff.",
                details: [
                  "Engineered an integrated clinic management platform using C#, .NET Core, Angular, and SQL Server 2014, automating patient records, billing, and reporting workflows.",
                  "Optimized data flow and PSA birth-record submissions, cutting manual reporting time by over 50% and improving accuracy and auditability.",
                  "Implemented secure patient-data storage and access layers, giving doctors real-time health insights for safer, data-driven decision-making.",
                  "Managed the entire SDLC, from requirements gathering and architecture design to testing, deployment, and staff onboarding.",
                  "Improved system performance and usability, enhancing the clinic’s operational reliability and long- term scalability."
                ]
              },
              {
                role: "C#.Net Developer – Eclaro International",
                period: "2015 – 2017 | Manila, PH",
                description: "OneBeacon Insurance Group is a U.S.-based property and casualty insurance company providing specialized commercial insurance solutions.",
                details: [
                  "Modernized legacy ASP.NET systems by upgrading front-end components from HTML4 to HTML5 and integrating TypeScript and Angular, resulting in a more responsive and maintainable enterprise web platform.",
                  "Developed and integrated RESTful APIs, improving data consistency and communication between front-end and back-end systems.",
                  "Led database migration from Mainframe/DB2 to SQL Server, optimizing stored procedures, SQL scripts, and indexes for improved performance and reliability.",
                  "Implemented automated testing frameworks using xUnit and NUnit, and led Selenium test development, improving overall test coverage, reliability, and regression efficiency.",
                  "Managed CI/CD pipelines using Atlassian Bamboo, automating build, test, and deployment stages for consistent and faster releases.",
                  "Enhanced and maintained 100+ SSRS reports, adding new data insights, improving report accuracy, and creating additional dashboards for executive use.",
                  "Established and enforced .NET coding standards, promoting maintainability, scalability, and team- wide consistency.",
                  "Re-engineered core business modules and reporting pipelines, achieving up to 35% faster system performance and greater operational stability."
                ]
              },
              {
                role: "Lead Software Analyst – Equitable Computer Services (Equicom)",
                period: "2008 – 2015 | Manila, PH",
                description: "Equitable Computer Services is a technology solutions provider supporting major Philippine financial institutions including Equitable Bank, Robinsons Bank, and BDO.",
                details: [
                  "Led a team of three junior developers, mentoring them on coding standards, debugging, and full system development processes from requirements gathering to deployment.",
                  "Designed and developed enterprise-scale banking applications for Equitable Bank, Robinsons Bank, and BDO, managing both front-end and back-end development.",
                  "Developed the Credit Card Management System from the ground up, including database architecture, workflow automation, and reporting modules for credit and debit card operations.",
                  "Owned and maintained backend data processes, generating critical financial and compliance reports to support credit, debit, and reconciliation systems.",
                  "Collaborated directly with senior executives (VP-level) to design and implement client-facing systems such as customer reward and raffle platforms for banks and insurance partners, enhancing customer engagement and loyalty programs.",
                  "Built applications for sister companies including myHealth and Medilink, integrating healthcare management and billing systems with financial platforms to streamline patient and partner transactions.",
                  "Delivered high-volume ASP.NET and Windows applications, ensuring data security, scalability, and compliance with banking and privacy standards."
                ]
              }
            ].map((job, idx) => (
              <div key={idx} className="border rounded-lg shadow bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <button
                  onClick={() =>
                    setOpenJob(openJob === idx ? null : idx) 
                  }
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <div className="px-6 pb-4">
                    <h4 className="text-lg font-semibold text-teal-300">{job.role}</h4>
                    <span className="block text-sm text-gray-100">{job.period}</span>
                  </div>
                  <span className="text-blue-600 text-2xl">
                    {openJob === idx ? "−" : "+"}
                  </span>
                </button>
                
                {openJob === idx && (
                  <div className="px-6 pb-4">
                    <span className="ml-10 mr-6 mb-6 text-gray-100 space-y-2 block">
                      {job.description}
                    </span>
                    <ul className="list-disc ml-10 mr-6 mb-6 text-gray-100 space-y-2">
                      {job.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-10 py-24 bg-[rgba(128,128,128,0.3)] backdrop-blur-md rounded-xl text-center text-gray-100"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h3 className="text-3xl font-bold mb-6 text-teal-300 drop-shadow-lg">
          Get In Touch
        </h3>
        <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Interested in collaborating, hiring, or just want to connect?  
          Feel free to reach out via email, LinkedIn, or GitHub.  
          You can also download my CV below.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:retiangson@gmail.com"
            className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition"
          >
            Email Me
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/retiangson"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-900/80 text-white rounded-lg shadow hover:bg-blue-900 transition"
          >
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/retiangson"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800/70 text-white rounded-lg shadow hover:bg-gray-800 transition"
          >
            GitHub
          </a>

          {/* Download CV */}
          <a
            href={`${import.meta.env.BASE_URL}Resume.pdf`}
            download
            className="px-6 py-3 bg-emerald-600/80 text-white rounded-lg shadow hover:bg-emerald-700 transition"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-6 text-center bg-black/40 backdrop-blur-md border-t border-white/10 text-gray-400 mt-10"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        © {new Date().getFullYear()} Ronald Tiangson. All rights reserved.
      </footer>
    </div>
  );
}
