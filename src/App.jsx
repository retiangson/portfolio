import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars } from "react-icons/fa";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">MyPortfolio</h1>
        <div className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <FaBars size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col items-center gap-4 py-4 bg-white shadow-md md:hidden">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-10 py-20 bg-gradient-to-r from-blue-100 to-blue-50">
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

      {/* About Section */}
      <section id="about" className="px-10 py-20 bg-white">
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
      <section id="projects" className="px-10 py-20 bg-white">
        <h3 className="text-3xl font-bold mb-10 text-gray-800">Projects</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Satellite Office – Salary Packaging */}
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
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
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
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
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
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
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
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
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
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
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
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
          <div className="p-6 bg-white border rounded-xl shadow hover:shadow-lg transition">
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

          <div className="p-6 bg-white border rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-gray-800">Store Management System</h4>
            <p className="text-gray-700 mt-2">
              CLI-based Python app with SQLAlchemy for data persistence, validation, and testing.
            </p>
            <a href="https://github.com/retiangson/MSE800_PSE/tree/main/Week3/Activity6" target="_blank" rel="noopener noreferrer"
              className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              View on GitHub
            </a>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-gray-800">HR System</h4>
            <p className="text-gray-700 mt-2">
              Object-Oriented Python HR system showcasing encapsulation, inheritance, and modular design.
            </p>
            <a href="https://github.com/retiangson/MSE800_PSE/tree/main/Week3/Activity4" target="_blank" rel="noopener noreferrer"
              className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              View on GitHub
            </a>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow hover:shadow-lg transition">
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

          <div className="p-6 bg-white border rounded-xl shadow hover:shadow-lg transition">
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
      <section id="education" className="px-10 py-20 bg-gray-50">
        <h3 className="text-3xl font-bold mb-10 text-gray-800">Education</h3>

        <div className="relative border-l-4 border-indigo-500 pl-6 space-y-12">
          
          {/* Master's Degree */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800">
              Master of Software Engineering (Level 9)
            </h4>
            <span className="block text-gray-600 text-sm mb-3">2024 – 2026 (Ongoing) | Yoobee College, New Zealand</span>
            <p className="text-gray-700">
              Focused on advanced software engineering principles, cloud computing, 
              microservices, and applied research. Enhancing expertise in <strong>AI, 
              DevOps, and scalable systems design</strong>.
            </p>
          </div>

          {/* Bachelor's Degree */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800">
              Bachelor of Science in Computer Science
            </h4>
            <span className="block text-gray-600 text-sm mb-3">2004 – 2008 | AMA Computer University, Philippines</span>
            <p className="text-gray-700">
              Gained a solid foundation in programming, algorithms, and system development. 
              Built early projects in <strong>C#, VB.Net, and SQL Server</strong> which shaped 
              my career in enterprise software engineering.
            </p>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-10 py-16 bg-gray-50">
        <h3 className="text-3xl font-bold mb-8 text-gray-800">Skills</h3>

        {/* Programming */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 mb-3">Programming</h4>
          <div className="flex flex-wrap gap-3">
            {["C#", "VB.Net", ".NET Core", ".NET Framework (Legacy)", "VB6", "VBA", "Python", "PHP", "TypeScript"].map(s => (
              <span key={s} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg shadow">{s}</span>
            ))}
          </div>
        </div>

        {/* Frontend & Web */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 mb-3">Frontend & Web</h4>
          <div className="flex flex-wrap gap-3">
            {["React", "Angular", "AngularJS", "ASP.NET", "MVC", "HTML5", "CSS", "JavaScript", "Bootstrap", "Kendo UI", "WordPress", "Tailwind CSS"].map(s => (
              <span key={s} className="px-4 py-2 bg-green-100 text-green-800 rounded-lg shadow">{s}</span>
            ))}
          </div>
        </div>

        {/* Backend & APIs */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 mb-3">Backend & APIs</h4>
          <div className="flex flex-wrap gap-3">
            {["Web API", "WCF", "SOAP", "REST", "Microservices", "SOA", "Layered Architecture"].map(s => (
              <span key={s} className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg shadow">{s}</span>
            ))}
          </div>
        </div>

        {/* Databases & Reporting */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 mb-3">Databases & Reporting</h4>
          <div className="flex flex-wrap gap-3">
            {["SQL Server", "MySQL", "SQLite", "MS Access", "DB2", "Oracle", "SSIS", "SSRS", "Crystal Reports"].map(s => (
              <span key={s} className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg shadow">{s}</span>
            ))}
          </div>
        </div>

        {/* Cloud & DevOps */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 mb-3">Cloud & DevOps</h4>
          <div className="flex flex-wrap gap-3">
            {["Microsoft Azure", "Azure Data", "Azure DevOps", "Docker", "Kubernetes", "Bamboo", "CI/CD"].map(s => (
              <span key={s} className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-lg shadow">{s}</span>
            ))}
          </div>
        </div>

        {/* Testing */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 mb-3">Testing</h4>
          <div className="flex flex-wrap gap-3">
            {["xUnit", "NUnit", "MS Unit Test", "Moq", "Rhino Mocks", "SpecFlow", "Selenium", "Cypress"].map(s => (
              <span key={s} className="px-4 py-2 bg-rose-100 text-rose-800 rounded-lg shadow">{s}</span>
            ))}
          </div>
        </div>

        {/* Version Control, Methodologies & Practices */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 mb-3">Version Control, Methodologies & Practices</h4>
          <div className="flex flex-wrap gap-3">
            {[
              "GitHub","GitBash","TFS","SVN","Tortoise",
              "Agile (SCRUM)","Kanban","Waterfall",
              "OOP","SOLID","Repository Pattern","Unit of Work","MVC","MVVM"
            ].map(s => (
              <span key={s} className="px-4 py-2 bg-teal-100 text-teal-800 rounded-lg shadow">{s}</span>
            ))}
          </div>
        </div>

        {/* Others */}
        <div>
          <h4 className="text-xl font-semibold text-gray-700 mb-3">Others</h4>
          <div className="flex flex-wrap gap-3">
            {["PDF Pro", "Photoshop"].map(s => (
              <span key={s} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-10 py-20 bg-gray-50">
        <h3 className="text-3xl font-bold mb-10 text-gray-800">Experience</h3>
        
        <div className="relative border-l-4 border-blue-500 pl-6 space-y-12">
          
          {/* Satellite Office */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800">
              Senior Software Engineer – Satellite Office (Smartgroup Australia)
            </h4>
            <span className="block text-gray-600 text-sm mb-3">2023 – 2025 | Auckland, NZ / Manila, PH</span>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Developed, maintained, and supported financial and salary packaging systems using <strong>C#, .NET Core, SQL Server, and Azure DevOps</strong>.</li>
              <li>Improved system performance and maintainability through <strong>microservices</strong> and <strong>CI/CD pipelines</strong>.</li>
              <li>Collaborated with Australian teams to deliver high-impact solutions for enterprise clients.</li>
            </ul>
          </div>

          {/* Willis Towers Watson */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800">
              Senior Software Engineer – Willis Towers Watson
            </h4>
            <span className="block text-gray-600 text-sm mb-3">2020 – 2023 | Manila, PH</span>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Led development of the <strong>ACE Solutions Delivery</strong> and benefits management platforms using <strong>C#, ASP.NET MVC, Angular, SQL Server, and Azure</strong>.</li>
              <li>Integrated <strong>CI/CD (Bamboo, Azure DevOps)</strong> pipelines to improve deployment speed and quality.</li>
              <li>Collaborated across global teams to support enterprise-scale HR and benefits systems.</li>
            </ul>
          </div>

          {/* AXA Philippines */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800">
              Senior Software Engineer – AXA Philippines
            </h4>
            <span className="block text-gray-600 text-sm mb-3">2018 – 2020 | Manila, PH</span>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Developed and maintained insurance and customer portals using <strong>.NET Core, Angular, REST APIs, and SQL Server</strong>.</li>
              <li>Delivered digital transformation initiatives for online claims, policy management, and payment systems.</li>
              <li>Optimized existing codebase, boosting application stability and maintainability.</li>
            </ul>
          </div>

          {/* Eclaro International */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800">
              Systems Analyst / Software Engineer – Eclaro International
            </h4>
            <span className="block text-gray-600 text-sm mb-3">2015 – 2017 | Manila, PH</span>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Designed and developed HR and enterprise systems using <strong>C#, ASP.NET, SQL Server, and MVC architecture</strong>.</li>
              <li>Collaborated with US-based clients for requirements gathering and system enhancements.</li>
              <li>Implemented reporting solutions via <strong>SSRS</strong> and custom dashboards.</li>
            </ul>
          </div>

          {/* Equitable Computer Services (Equicom) */}
          <div>
            <h4 className="text-xl font-semibold text-gray-800">
              Software Engineer – Equitable Computer Services (Equicom)
            </h4>
            <span className="block text-gray-600 text-sm mb-3">2008 – 2015 | Manila, PH</span>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Delivered and maintained enterprise applications for banking and healthcare sectors using <strong>C#, .NET Framework, SQL Server, and Crystal Reports</strong>.</li>
              <li>Led key projects for billing, HRIS, and healthcare management systems.</li>
              <li>Introduced automation and reporting improvements that enhanced productivity and accuracy.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-10 py-20 bg-white text-center">
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
      <footer className="py-6 text-center bg-white border-t mt-10 text-gray-500">
        © 2025 Ronald Tiangson. All rights reserved.
      </footer>
    </div>
  );
}
