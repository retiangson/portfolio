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
    <div className="font-sans bg-gray-50 min-h-screen" style={{ backgroundImage: "url('/back.webp')" }}>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
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
        <div className="flex flex-col items-center gap-4 py-4 bg-white shadow-md md:hidden">
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-10 py-20 bg-gradient-to-r from-blue-100 to-blue-50"  
      data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-gray-800">Hi, I’m Ronald 👋</h2>
          <p className="mt-4 text-lg text-gray-600">
            A Software Engineer passionate about building scalable apps, cloud solutions, and innovative tech.
          </p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
              View My Work
            </a>
            <a href="#contact" className="px-6 py-3 border border-blue-600 rounded-lg hover:bg-blue-50">
              Contact Me
            </a>
          </div>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="Profile"
          className="rounded-full w-64 h-64 mt-10 md:mt-0 shadow-lg"
        />
      </section>
      
      {/* Content Section */}
      <div className="max-w-screen-lg mx-auto px-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        {/* About Section */}
        <section id="about" className="px-10 py-20 bg-white" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">About Me</h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            I am a seasoned <strong>Full-Stack Software Engineer</strong> with over 
            <strong> 16 years of professional experience</strong> across 
            <strong> financial services, healthcare, and enterprise systems</strong>. 
            My expertise spans <strong>C#/.NET, Python, SQL, React, and TypeScript</strong>, 
            combined with modern <strong>DevOps practices</strong> using Docker, Kubernetes, and CI/CD pipelines.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mt-4">
            I specialize in designing and building scalable, secure, and high-performance applications 
            using <strong>microservices architecture</strong>, <strong>cloud platforms (Azure)</strong>, and 
            best practices such as <strong>SOLID principles</strong> and design patterns. 
            Beyond coding, I bring strong skills in <strong>system analysis, technical leadership, 
            and collaboration with cross-functional teams</strong>.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mt-4">
            Currently pursuing a <strong>Master of Software Engineering (Level 9)</strong> in New Zealand, 
            I continue to enhance my technical expertise while working on innovative academic and professional projects.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-10 py-20 bg-white" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 className="text-3xl font-bold mb-10 text-gray-800">Projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Satellite Office – Salary Packaging */}
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-gray-800">Salary Packaging & Financial Systems</h4>
              <p className="text-gray-700 mt-2">
                Built and maintained enterprise-grade salary packaging and financial systems at Smartgroup 
                (via Satellite Office), improving scalability and compliance for Australian clients.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Tech:</strong> .NET Core, SQL Server, Microservices, Docker, Kubernetes, Azure DevOps
              </p>
            </div>

            {/* Willis Towers Watson – BrightChoices */}
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-gray-800">BrightChoices</h4>
              <p className="text-gray-700 mt-2">
                Employee benefits marketplace where users explore, compare, and enroll in health and 
                financial benefits. Delivered enhancements that improved <strong>user experience and performance</strong>.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Tech:</strong> C#, ASP.NET MVC, Angular, SQL Server, Azure
              </p>
            </div>

            {/* Willis Towers Watson – Benefit Access */}
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-gray-800">Benefit Access</h4>
              <p className="text-gray-700 mt-2">
                Secure platform for employees to access and manage workplace benefits. 
                Integrated <strong>single sign-on, role-based access, and reporting</strong>.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Tech:</strong> C#, ASP.NET, Angular, SQL Server, Azure DevOps
              </p>
            </div>

            {/* Willis Towers Watson – FSA Portal */}
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-gray-800">FSA Portal</h4>
              <p className="text-gray-700 mt-2">
                Flexible Spending Account portal enabling employees to manage contributions, reimbursements, 
                and balances. Improved <strong>compliance and workflows</strong>.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Tech:</strong> C#, ASP.NET MVC, SQL Server, REST APIs, CI/CD
              </p>
            </div>

            {/* AXA Philippines – Customer Portals */}
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-gray-800">Insurance Customer Portals</h4>
              <p className="text-gray-700 mt-2">
                Built online portals at AXA Philippines for <strong>policy management, claims processing, 
                and digital payments</strong>, driving digital transformation for clients.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Tech:</strong> .NET Core, Angular, REST APIs, SQL Server
              </p>
            </div>

            {/* Equicom & Eclaro – HR & Healthcare Systems */}
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-gray-800">HR & Healthcare Systems</h4>
              <p className="text-gray-700 mt-2">
                Designed and developed HRIS, billing, and healthcare management applications at Equicom 
                and Eclaro, supporting enterprise operations and analytics.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Tech:</strong> C#, .NET Framework, MVC, SQL Server, SSRS, Crystal Reports
              </p>
            </div>

            {/* GitHub Projects */}
            <div className="p-6 bg-white border rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-gray-800">Car Rental System</h4>
              <p className="text-gray-700 mt-2">
                Full-stack project for Yoobee MSE800 using layered architecture, UML diagrams, and 
                standalone builds for deployment.
              </p>
              <a href="https://github.com/retiangson/MSE800_Car_Rental" target="_blank" rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                View on GitHub
              </a>
            </div>

            <div className="p-6 bg-white border rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-gray-800">Store Management System</h4>
              <p className="text-gray-700 mt-2">
                CLI-based Python app with SQLAlchemy for data persistence, validation, and testing.
              </p>
              <a href="https://github.com/retiangson/MSE800_PSE/tree/main/Week3/Activity6" target="_blank" rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                View on GitHub
              </a>
            </div>

            <div className="p-6 bg-white border rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-gray-800">HR System</h4>
              <p className="text-gray-700 mt-2">
                Object-Oriented Python HR system showcasing encapsulation, inheritance, and modular design.
              </p>
              <a href="https://github.com/retiangson/MSE800_PSE/tree/main/Week3/Activity4" target="_blank" rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                View on GitHub
              </a>
            </div>

            <div className="p-6 bg-white border rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-gray-800">Quantum Computing with Qiskit</h4>
              <p className="text-gray-700 mt-2">
                Academic experiments using Qiskit: quantum circuits, oracles, Grover’s Search, 
                and quantum teleportation.
              </p>
              <a href="https://github.com/retiangson/MSE800_PSE/tree/main/Quantum_Computing" target="_blank" rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                View on GitHub
              </a>
            </div>

            <div className="p-6 bg-white border rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <h4 className="text-xl font-semibold text-gray-800">Python OOP & Assignments</h4>
              <p className="text-gray-700 mt-2">
                A collection of Python assignments for Yoobee MSE modules, covering OOP design, 
                database integration, and unit testing.
              </p>
              <a href="https://github.com/retiangson/MSE800_PSE/tree/main" target="_blank" rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                View on GitHub
              </a>
            </div>

          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="px-10 py-20 bg-gray-50" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 className="text-3xl font-bold mb-10 text-gray-800">Education</h3>

          <div className="relative border-l-4 border-indigo-500 pl-6 space-y-12">

            {/* Master's Degree */}
            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpenMaster(!openMaster)}
              >
                <h4 className="text-xl font-semibold text-gray-800">
                  Master of Software Engineering (Level 9)
                </h4>
                {openMaster ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <span className="block text-gray-600 text-sm mb-3">
                2024 – 2026 (Ongoing) | Yoobee College, New Zealand
              </span>

              {openMaster && (
                <div className="text-gray-700 space-y-4">
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
                <h4 className="text-xl font-semibold text-gray-800">
                  Bachelor of Science in Computer Science
                </h4>
                {openBachelor ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <span className="block text-gray-600 text-sm mb-3">
                2004 – 2008 | Filamer Christian University, Philippines
              </span>

              {openBachelor && (
                <p className="text-gray-700">
                  Built a strong foundation in programming, algorithms, and systems development. 
                  Early projects in <strong>C#, VB.Net, and SQL Server</strong> prepared me for a 
                  professional career in enterprise software engineering.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="px-10 py-16 bg-gray-50" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">Skills</h3>

          {/* Programming */}
          <div className="mb-8" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">Programming</h4>
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
            <h4 className="text-xl font-semibold text-gray-700 mb-3">Frontend & Web</h4>
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
            <h4 className="text-xl font-semibold text-gray-700 mb-3">Backend & APIs</h4>
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
            <h4 className="text-xl font-semibold text-gray-700 mb-3">Databases & Reporting</h4>
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
            <h4 className="text-xl font-semibold text-gray-700 mb-3">Cloud & DevOps</h4>
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
            <h4 className="text-xl font-semibold text-gray-700 mb-3">Testing</h4>
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
            <h4 className="text-xl font-semibold text-gray-700 mb-3">Version Control, Methodologies & Practices</h4>
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
            <h4 className="text-xl font-semibold text-gray-700 mb-3">Others</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "PDF Pro", icon: <FaTools /> },
                { name: "Photoshop", icon: <FaTools /> },
              ].map(skill => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-10 py-20 bg-gray-50" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 className="text-3xl font-bold mb-10 text-gray-800">Experience</h3>

          <div className="space-y-6">
            {[
              {
                role: "Senior Software Engineer – Satellite Office (Smartgroup Australia)",
                period: "2023 – 2025 | Auckland, NZ / Manila, PH",
                details: [
                  "Developed and supported salary packaging and financial systems using C#, .NET Core, SQL Server, and Azure DevOps.",
                  "Improved scalability and maintainability with microservices and CI/CD pipelines.",
                  "Collaborated with Australian teams to deliver enterprise-grade solutions."
                ]
              },
              {
                role: "Senior Software Engineer – Willis Towers Watson",
                period: "2020 – 2023 | Manila, PH",
                details: [
                  "Led development of ACE Solutions Delivery, BrightChoices, Benefit Access, and FSA Portal.",
                  "Enhanced platforms using C#, ASP.NET MVC, Angular, SQL Server, and Azure.",
                  "Implemented CI/CD with Bamboo and Azure DevOps to improve deployment speed and quality.",
                  "Collaborated with global teams on HR and employee benefits systems."
                ]
              },
              {
                role: "Core Software Developer – AXA Philippines",
                period: "2018 – 2020 | Manila, PH",
                details: [
                  "Built insurance customer portals for policy management, claims, and payments.",
                  "Modernized applications using .NET Core, Angular, REST APIs, and SQL Server.",
                  "Delivered initiatives that boosted digital transformation and client experience."
                ]
              },
              {
                role: "C#.Net Developer – Eclaro International",
                period: "2015 – 2017 | Manila, PH",
                details: [
                  "Designed and developed HRIS and enterprise apps with C#, ASP.NET, and MVC.",
                  "Worked with US-based clients on requirements gathering and enhancements.",
                  "Delivered reports and dashboards with SSRS and SQL Server."
                ]
              },
              {
                role: "Lead Software Analyst – Equitable Computer Services (Equicom)",
                period: "2008 – 2015 | Manila, PH",
                details: [
                  "Maintained enterprise applications for banking and healthcare sectors.",
                  "Key projects: billing, HRIS, and healthcare management systems.",
                  "Stack: C#, .NET Framework, SQL Server, SSRS, and Crystal Reports.",
                  "Introduced automation and reporting improvements that increased productivity."
                ]
              }
            ].map((job, idx) => (
              <div key={idx} className="border rounded-lg shadow bg-white"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <button
                  onClick={() =>
                    setOpenJob(openJob === idx ? null : idx) 
                  }
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{job.role}</h4>
                    <span className="block text-sm text-gray-600">{job.period}</span>
                  </div>
                  <span className="text-blue-600 text-2xl">
                    {openJob === idx ? "−" : "+"}
                  </span>
                </button>
                {openJob === idx && (
                  <ul className="list-disc ml-10 mr-6 mb-6 text-gray-700 space-y-2">
                    {job.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <section id="contact" className="px-10 py-20 bg-white text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">Get In Touch</h3>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          Interested in collaborating, hiring, or just want to connect? 
          Feel free to reach out via email, LinkedIn, or GitHub. 
          You can also download my CV below.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Email */}
          <a href="mailto:retiangson@gmail.com" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Email Me
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/retiangson" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
            LinkedIn
          </a>

          {/* GitHub */}
          <a href="https://github.com/retiangson" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition">
            GitHub
          </a>

          {/* Download CV */}
          <a
            href={`${import.meta.env.BASE_URL}Resume.pdf`}
            download
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-white border-t mt-10 text-gray-500" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        © 2025 Ronald Tiangson. All rights reserved.
      </footer>

    </div>
  );
}
