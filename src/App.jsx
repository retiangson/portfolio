import { useState } from "react";

// FontAwesome icons
import { 
  FaBars, FaChevronDown, FaChevronUp,
  FaCode, FaPython, FaPhp, FaJs, FaReact, FaHtml5, FaCss3Alt, 
  FaDatabase, FaCloud, FaVial, FaProjectDiagram, FaGlobe, FaServer, FaBrain,
  FaShieldAlt, FaClipboardList, FaUserTie, FaBug, FaCogs, FaNetworkWired,
  FaLock, FaTasks, FaUsers, FaSitemap, FaFileAlt
} from "react-icons/fa";

// SimpleIcons (only the ones that exist)
import {
  SiTypescript, SiAngular, SiBootstrap, SiTailwindcss,
  SiKubernetes, SiMysql, SiDotnet, SiFastapi, SiGithubactions,
  SiSqlite, SiOracle, SiSelenium, SiCypress, SiPytest, SiPostman,
  SiSwagger, SiOpenai, SiDocker, SiAmazonwebservices, SiAmazonapigateway,
  SiAmazonrds
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
    <div className="font-sans min-h-screen bg-slate-950 bg-cover bg-center bg-no-repeat bg-fixed text-gray-100" style={{ backgroundImage: `linear-gradient(rgba(2,6,23,0.88), rgba(2,6,23,0.94)), url('${import.meta.env.BASE_URL}back.webp')` }}>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-4 shadow-xl bg-slate-950/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-tight text-teal-300">Ronald Tiangson</h1>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-200">
          <a href="#about" className="hover:text-teal-300 transition">About</a>
          <a href="#projects" className="hover:text-teal-300 transition">Projects</a>
          <a href="#experience" className="hover:text-teal-300 transition">Experience</a>
          <a href="#skills" className="hover:text-teal-300 transition">Skills</a>
          <a href="#contact" className="hover:text-teal-300 transition">Contact</a>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-center gap-4 py-4 bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-md md:hidden">
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left bg-cover bg-center bg-no-repeat"
      data-aos="fade-up" data-aos-anchor-placement="top-bottom" style={{ backgroundImage: `linear-gradient(rgba(15,23,42,0.72), rgba(15,23,42,0.86)), url('${import.meta.env.BASE_URL}banner.webp')` }}>
        <div className="max-w-3xl bg-transparent">
          <span className="inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-200">
            Senior Software Engineer | Full-Stack | Cloud | AI
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white">Building reliable software for real business problems.</h2>
          <p className="mt-5 text-lg md:text-xl text-gray-200 leading-relaxed">
            I design and deliver scalable web platforms, API-first systems, and AI-assisted products with clean architecture,
            secure engineering practices, and strong delivery leadership.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-6 py-3 bg-teal-500 text-slate-950 font-semibold rounded-lg shadow hover:bg-teal-300 transition">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition">
              Contact Me
            </a>
          </div>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="Profile"
          className="rounded-full w-64 h-64 md:w-72 md:h-72 object-cover shadow-2xl ring-4 ring-teal-300/30 grayscale-[15%]"
        />
      </section>
      
      {/* Content Section */}
      <div className="space-y-12 max-w-6xl mx-auto px-4 md:px-6 py-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        {/* About Section */}
        <section id="about" className="px-6 md:px-10 py-16 bg-slate-900/75 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 className="text-3xl font-bold mb-6 text-teal-300">About Me</h3>
          <p className="text-lg text-gray-100 leading-relaxed max-w-4xl">
            Results-driven Senior Software Engineer specialising in architecting and delivering scalable enterprise and cloud-native systems across finance, insurance, healthcare, and SaaS environments. Currently completing a Master of Software Engineering (2025–2026) in New Zealand, with a strong focus on software architecture, AI systems, data analytics, and DevOps.
          </p>

          <p className="text-lg text-gray-100 leading-relaxed max-w-4xl mt-4">
            Experienced in designing clean, layered architectures, building API-first platforms, and developing AI-powered applications using Python, FastAPI, and cloud services, supported by modern CI/CD and DevOps practices. Passionate about transforming real-world problems into maintainable, production-ready products, mentoring teams, and building ethical, high-impact technology.
          </p>

          <p className="text-lg text-gray-100 leading-relaxed max-w-4xl mt-4">
            Actively seeking Software Engineer or Senior Software Engineer opportunities in New Zealand where strong engineering fundamentals, cloud capability, and innovation are valued.
          </p>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="px-6 md:px-10 py-16 bg-slate-900/75 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl"
          data-aos="fade-up"
        >
          <div className="mb-10">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">Selected Work</span>
            <h3 className="mt-2 text-3xl md:text-4xl font-bold text-white">Projects</h3>
            <p className="mt-4 max-w-3xl text-gray-300 leading-relaxed">
              Practical software projects focused on maintainable architecture, secure delivery, useful automation,
              and measurable operational value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* KaiHelper */}
            <div className="p-6 bg-slate-950/70 border border-white/10 rounded-xl shadow-xl hover:border-teal-300/50 hover:-translate-y-1 transition">
              <h4 className="text-xl font-semibold text-teal-300">
                KaiHelper – AI Grocery Budgeting App
              </h4>
              <p className="text-gray-100 mt-2">
                AI-powered budgeting platform developed as part of the Master of Software Engineering.
                Automatically parses grocery receipts, categorises expenses, tracks budgets, and generates insights
                using a clean, scalable backend architecture.
              </p>
              <p className="text-sm text-gray-100 mt-2">
                <strong>Tech:</strong> Python, FastAPI, Clean Architecture, DTO/Mapper/Repository,
                OCR (GPT-4o), SQLAlchemy, AWS Lambda, API Gateway, RDS
              </p>
              <a
                href="https://github.com/retiangson/KaiHelper"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-teal-500 text-slate-950 font-semibold rounded-lg shadow hover:bg-teal-300 transition"
              >
                View on GitHub
              </a>
            </div>

            {/* MemoLink */}
            <div className="p-6 bg-slate-950/70 border border-white/10 rounded-xl shadow-xl hover:border-teal-300/50 hover:-translate-y-1 transition">
              <h4 className="text-xl font-semibold text-teal-300">
                MemoLink - AI-Powered Memory & Knowledge Platform
              </h4>
              <p className="text-gray-100 mt-2">
                Full-stack knowledge system for capturing, organising, and recalling personal or team knowledge.
                Built with an AI-assisted workflow that helps users search, summarise, and manage stored information
                through a clean web interface and API-driven backend.
              </p>
              <p className="text-sm text-gray-200 mt-2">
                <strong>Best practices:</strong> layered backend design, DTO-based API contracts, repository pattern,
                input validation, modular React components, environment-based configuration, and deployment-ready cloud hosting.
              </p>
              <p className="text-sm text-gray-100 mt-2">
                <strong>Tech:</strong> React, TypeScript, Python, FastAPI, SQLAlchemy, REST APIs,
                AI/LLM Integration, Microsoft Azure Static Web Apps
              </p>
              <a
                href="https://lively-ground-067a39700.7.azurestaticapps.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-teal-500 text-slate-950 font-semibold rounded-lg shadow hover:bg-teal-300 transition"
              >
                View Project
              </a>
            </div>

            {/* Wai 262 Portfolio System */}
            <div className="p-6 bg-slate-950/70 border border-white/10 rounded-xl shadow-xl hover:border-teal-300/50 hover:-translate-y-1 transition">
              <h4 className="text-xl font-semibold text-teal-300">
                Wai 262 Portfolio Management System
              </h4>
              <p className="text-gray-100 mt-2">
                Professional portfolio platform developed for Tiaki Taonga Trust Wai 262 to manage structured digital
                records, project artefacts, stakeholder information, and secure knowledge workflows.
              </p>
              <p className="text-sm text-gray-200 mt-2">
                <strong>Best practices:</strong> requirements analysis, sprint planning, clean architecture, reusable UI
                components, role-aware access design, secure data handling, code reviews, mentoring, and maintainable documentation.
              </p>
              <p className="text-sm text-gray-100 mt-2">
                <strong>Tech:</strong> React, TypeScript, Python, FastAPI, REST APIs, SQLAlchemy, Azure,
                GitHub, CI/CD, Agile Delivery
              </p>
            </div>

            {/* RecallAI */}
            <div className="p-6 bg-slate-950/70 border border-white/10 rounded-xl shadow-xl hover:border-teal-300/50 hover:-translate-y-1 transition">
              <h4 className="text-xl font-semibold text-teal-300">
                RecallAI – Personal Knowledge LLM Assistant
              </h4>
              <p className="text-gray-100 mt-2">
                Self-hosted AI assistant for document ingestion, semantic search, and conversational knowledge recall.
                Designed to run fully offline using local LLMs and vector search for cost-efficient inference.
              </p>
              <p className="text-sm text-gray-100 mt-2">
                <strong>Tech:</strong> Python, FastAPI, FAISS Vector Search, Local LLMs (DeepSeek, Qwen),
                Oracle Cloud Free Tier, REST APIs
              </p>
              <a
                href="https://polite-water-0fa5ebd00.1.azurestaticapps.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-teal-500 text-slate-950 font-semibold rounded-lg shadow hover:bg-teal-300 transition"
              >
                View Project
              </a>
            </div>

            {/* Satellite Office – Salary Packaging */}
            <div className="p-6 bg-slate-950/70 border border-white/10 rounded-xl shadow-xl hover:border-teal-300/50 hover:-translate-y-1 transition">
              <h4 className="text-xl font-semibold text-teal-300">
                Salary Packaging & Financial Systems
              </h4>
              <p className="text-gray-100 mt-2">
                Built and maintained enterprise-grade salary packaging and financial platforms at Smartgroup
                (via Satellite Office), supporting large-scale Australian corporate, healthcare, and government clients.
              </p>
              <p className="text-sm text-gray-100 mt-2">
                <strong>Tech:</strong> .NET Core, SQL Server, Microservices, Docker, Kubernetes, Azure DevOps
              </p>
            </div>

            {/* Willis Towers Watson */}
            <div className="p-6 bg-slate-950/70 border border-white/10 rounded-xl shadow-xl hover:border-teal-300/50 hover:-translate-y-1 transition">
              <h4 className="text-xl font-semibold text-teal-300">
                Employee Benefits Platforms (WTW)
              </h4>
              <p className="text-gray-100 mt-2">
                Delivered features and performance improvements across BrightChoices, Benefit Access,
                and FSA Portal — enabling employees worldwide to manage benefits, enrolments, and reimbursements.
              </p>
              <p className="text-sm text-gray-100 mt-2">
                <strong>Tech:</strong> C#, ASP.NET MVC, Angular, SQL Server, REST APIs, Azure DevOps
              </p>
            </div>

            {/* AXA */}
            <div className="p-6 bg-slate-950/70 border border-white/10 rounded-xl shadow-xl hover:border-teal-300/50 hover:-translate-y-1 transition">
              <h4 className="text-xl font-semibold text-teal-300">
                Insurance Automation & Customer Portals
              </h4>
              <p className="text-gray-100 mt-2">
                Developed backend automation and customer-facing portals at AXA Philippines,
                significantly reducing manual insurance reporting cycles and improving operational efficiency.
              </p>
              <p className="text-sm text-gray-100 mt-2">
                <strong>Tech:</strong> .NET Core, Angular, SQL Server, REST APIs
              </p>
            </div>

            {/* HR & Healthcare */}
            <div className="p-6 bg-slate-950/70 border border-white/10 rounded-xl shadow-xl hover:border-teal-300/50 hover:-translate-y-1 transition">
              <h4 className="text-xl font-semibold text-teal-300">
                HR & Healthcare Management Systems
              </h4>
              <p className="text-gray-100 mt-2">
                Designed and delivered HRIS, billing, and healthcare management systems
                supporting enterprise reporting, compliance, and operational workflows.
              </p>
              <p className="text-sm text-gray-100 mt-2">
                <strong>Tech:</strong> C#, .NET Framework, MVC, SQL Server, SSRS, Crystal Reports
              </p>
            </div>

            {/* Academic & GitHub */}
            <div className="p-6 bg-slate-950/70 border border-white/10 rounded-xl shadow-xl hover:border-teal-300/50 hover:-translate-y-1 transition">
              <h4 className="text-xl font-semibold text-teal-300">
                Academic & GitHub Projects
              </h4>
              <p className="text-gray-100 mt-2">
                Collection of academic and independent projects including a Car Rental System,
                Python OOP systems, data analytics exercises, and quantum computing experiments.
              </p>
              <p className="text-sm text-gray-100 mt-2">
                <strong>Tech:</strong> Python, SQLAlchemy, UML, Qiskit, Unit Testing, Clean Architecture
              </p>
              <a
                href="https://github.com/retiangson"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-teal-500 text-slate-950 font-semibold rounded-lg shadow hover:bg-teal-300 transition"
              >
                View on GitHub
              </a>
            </div>

          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="px-6 md:px-10 py-16 bg-slate-900/75 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h3 className="text-3xl font-bold mb-10 text-teal-300">Education</h3>

          <div className="relative border-l-4 border-teal-400/70 pl-6 space-y-12">

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
        <section
          id="skills"
          className="px-6 md:px-10 py-16 bg-slate-900/75 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl"
          data-aos="fade-up"
        >
          <div className="mb-10">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">Technical Capability</span>
            <h3 className="mt-2 text-3xl md:text-4xl font-bold text-white">Skills</h3>
            <p className="mt-4 max-w-3xl text-gray-300 leading-relaxed">
              A practical engineering toolkit covering full-stack delivery, cloud deployment, AI integration,
              testing, architecture, and technical leadership.
            </p>
          </div>

          {/* Programming Languages */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-100 mb-3">Programming Languages</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "C#", icon: <SiDotnet /> },
                { name: ".NET Core", icon: <SiDotnet /> },
                { name: "Python", icon: <FaPython /> },
                { name: "TypeScript", icon: <SiTypescript /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "VB.Net", icon: <FaCode /> },
                { name: "PHP", icon: <FaPhp /> },
              ].map(skill => (
                <span key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-slate-950/70 border border-blue-300/30 text-blue-100 rounded-lg shadow">
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend & UI */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-100 mb-3">Frontend & UI</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "React", icon: <FaReact /> },
                { name: "Angular", icon: <SiAngular /> },
                { name: "HTML5", icon: <FaHtml5 /> },
                { name: "CSS3", icon: <FaCss3Alt /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> },
                { name: "Bootstrap", icon: <SiBootstrap /> },
                { name: "Kendo UI", icon: <FaGlobe /> },
              ].map(skill => (
                <span key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-slate-950/70 border border-green-300/30 text-green-100 rounded-lg shadow">
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Backend, APIs & Architecture */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-100 mb-3">Backend, APIs & Architecture</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "FastAPI", icon: <SiFastapi /> },
                { name: "ASP.NET Web API", icon: <SiDotnet /> },
                { name: "REST APIs", icon: <FaNetworkWired /> },
                { name: "API Documentation", icon: <SiSwagger /> },
                { name: "Postman", icon: <SiPostman /> },
                { name: "Microservices", icon: <FaSitemap /> },
                { name: "Clean Architecture", icon: <FaProjectDiagram /> },
                { name: "Layered Architecture", icon: <FaServer /> },
                { name: "SOA", icon: <FaNetworkWired /> },
                { name: "DTO / Mapper / Repository", icon: <FaCogs /> },
              ].map(skill => (
                <span key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-slate-950/70 border border-purple-300/30 text-purple-100 rounded-lg shadow">
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* AI & Data Engineering */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-100 mb-3">AI & Data Engineering</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "LLM Integration", icon: <SiOpenai /> },
                { name: "Vector Search (FAISS)", icon: <FaBrain /> },
                { name: "OCR / Receipt Parsing", icon: <FaFileAlt /> },
                { name: "Data Analysis", icon: <FaDatabase /> },
                { name: "Exploratory Analysis", icon: <FaBrain /> },
                { name: "Embeddings", icon: <FaBrain /> },
                { name: "Prompt Engineering", icon: <FaBrain /> },
              ].map(skill => (
                <span key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-slate-950/70 border border-pink-300/30 text-pink-100 rounded-lg shadow">
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Databases & Reporting */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-100 mb-3">Databases & Reporting</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "SQL Server", icon: <FaDatabase /> },
                { name: "MySQL", icon: <SiMysql /> },
                { name: "SQLite", icon: <SiSqlite /> },
                { name: "Oracle", icon: <SiOracle /> },
                { name: "DB2", icon: <FaDatabase /> },
                { name: "SQL Query Tuning", icon: <FaCogs /> },
                { name: "Stored Procedures", icon: <FaDatabase /> },
                { name: "SSIS", icon: <FaDatabase /> },
                { name: "SSRS", icon: <FaFileAlt /> },
                { name: "Crystal Reports", icon: <FaFileAlt /> },
              ].map(skill => (
                <span key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-slate-950/70 border border-yellow-300/30 text-yellow-100 rounded-lg shadow">
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-100 mb-3">Cloud & DevOps</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "AWS Lambda", icon: <SiAmazonwebservices /> },
                { name: "API Gateway", icon: <SiAmazonapigateway /> },
                { name: "RDS", icon: <SiAmazonrds /> },
                { name: "Oracle Cloud Free Tier", icon: <SiOracle /> },
                { name: "Microsoft Azure", icon: <FaCloud /> },
                { name: "Azure Static Web Apps", icon: <FaCloud /> },
                { name: "Docker", icon: <SiDocker /> },
                { name: "Kubernetes", icon: <SiKubernetes /> },
                { name: "CI/CD", icon: <FaCogs /> },
                { name: "GitHub Actions", icon: <SiGithubactions /> },
                { name: "Azure DevOps", icon: <FaCloud /> },
                { name: "Bamboo", icon: <FaCogs /> },
                { name: "Environment Configuration", icon: <FaLock /> },
              ].map(skill => (
                <span key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-slate-950/70 border border-indigo-300/30 text-indigo-100 rounded-lg shadow">
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Testing & Quality */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-100 mb-3">Testing & Quality</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "xUnit", icon: <FaVial /> },
                { name: "NUnit", icon: <FaVial /> },
                { name: "SpecFlow", icon: <FaTasks /> },
                { name: "Selenium", icon: <SiSelenium /> },
                { name: "Cypress", icon: <SiCypress /> },
                { name: "PyTest", icon: <SiPytest /> },
                { name: "Moq", icon: <FaVial /> },
                { name: "Unit Testing", icon: <FaVial /> },
                { name: "Integration Testing", icon: <FaCogs /> },
                { name: "Regression Testing", icon: <FaBug /> },
                { name: "Code Review", icon: <FaShieldAlt /> },
              ].map(skill => (
                <span key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-slate-950/70 border border-red-300/30 text-red-100 rounded-lg shadow">
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Practices & Methodologies */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-100 mb-3">Practices & Methodologies</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Git", icon: <FaCode /> },
                { name: "GitHub", icon: <SiGithubactions /> },
                { name: "Agile / Scrum", icon: <FaTasks /> },
                { name: "Kanban", icon: <FaClipboardList /> },
                { name: "SOLID", icon: <FaShieldAlt /> },
                { name: "OOP", icon: <FaCode /> },
                { name: "MVC", icon: <FaSitemap /> },
                { name: "MVVM", icon: <FaSitemap /> },
                { name: "Requirements Analysis", icon: <FaClipboardList /> },
                { name: "Technical Planning", icon: <FaTasks /> },
                { name: "Mentoring", icon: <FaUsers /> },
                { name: "Junior Developer Leadership", icon: <FaUserTie /> },
                { name: "Stakeholder Collaboration", icon: <FaUsers /> },
                { name: "Technical Documentation", icon: <FaFileAlt /> },
                { name: "Secure Development", icon: <FaLock /> },
                { name: "Source Control Workflow", icon: <FaProjectDiagram /> },
              ].map(skill => (
                <span key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-slate-950/70 border border-teal-300/30 text-teal-100 rounded-lg shadow">
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="px-6 md:px-10 py-16 bg-slate-900/75 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <div className="mb-10">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">Professional Delivery</span>
            <h3 className="mt-2 text-3xl md:text-4xl font-bold text-white">Experience</h3>
            <p className="mt-4 max-w-3xl text-gray-300 leading-relaxed">
              Senior engineering experience across product delivery, architecture, technical leadership,
              stakeholder collaboration, and production support.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                role: "Senior Software Engineer - Tiaki Taonga Trust Wai 262",
                period: "07 Apr 2026 - Present | New Zealand",
                description: "Tiaki Taonga Trust Wai 262 is focused on protecting, managing, and strengthening taonga, matauranga, and cultural knowledge systems. I lead development of a professional portfolio system that supports structured digital records, secure access, stakeholder workflows, and long-term information management.",
                details: [
                  "Leading junior developers by assigning tasks, reviewing code, explaining design decisions, and helping them improve clean-code, debugging, testing, and delivery practices.",
                  "Planning development work across requirements analysis, feature breakdown, sprint priorities, technical tasks, risk identification, and delivery sequencing.",
                  "Creating and refining functional requirements, user stories, acceptance criteria, workflow definitions, and implementation notes from stakeholder discussions.",
                  "Designing and developing the portfolio management system with a clean, maintainable architecture suitable for future extension and operational use.",
                  "Building full-stack features across the web interface, backend APIs, data models, validation rules, and integration points to support reliable portfolio workflows.",
                  "Applying secure-by-design practices for authentication, authorization, input validation, data privacy, error handling, and controlled access to sensitive portfolio information.",
                  "Establishing development standards for reusable components, naming, API contracts, documentation, source control workflow, and review-ready pull requests.",
                  "Collaborating with stakeholders to translate real operational needs into practical software features, clear priorities, and production-ready deliverables.",
                  "Maintaining engineering quality through testing practices, technical documentation, refactoring, deployment readiness, and continuous improvement."
                ]
              },
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
              <div key={idx} className="border border-white/10 rounded-xl shadow-xl bg-slate-950/70 backdrop-blur-xl hover:border-teal-300/40 transition"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <button
                  onClick={() =>
                    setOpenJob(openJob === idx ? null : idx) 
                  }
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <div className="px-2 md:px-6 pb-4">
                    <h4 className="text-lg font-semibold text-teal-300">{job.role}</h4>
                    <span className="block text-sm text-gray-300">{job.period}</span>
                  </div>
                  <span className="text-teal-300 text-2xl">
                    {openJob === idx ? "−" : "+"}
                  </span>
                </button>
                
                {openJob === idx && (
                  <div className="px-6 pb-4">
                    <span className="ml-4 md:ml-10 mr-6 mb-6 text-gray-200 leading-relaxed block">
                      {job.description}
                    </span>
                    <ul className="list-disc ml-8 md:ml-10 mr-6 mb-6 text-gray-100 space-y-2 leading-relaxed">
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
        className="mx-auto max-w-6xl px-6 md:px-10 py-20 bg-slate-900/75 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl text-center text-gray-100"
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
            className="px-6 py-3 bg-teal-500/80 text-white rounded-lg shadow hover:bg-teal-600 transition"
          >
            Email Me
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/retiangson"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-700/80 text-white rounded-lg shadow hover:bg-blue-700 transition"
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

          {/* Qualification */}
          <a
            href={`${import.meta.env.BASE_URL}Qualification.pdf`}
            download
            className="px-6 py-3 bg-red-800/70 text-white rounded-lg shadow hover:bg-red-900 transition"
          >
            Qualification
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
