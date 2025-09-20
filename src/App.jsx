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
          src="/profile.jpg"
          alt="Profile"
          className="rounded-full w-64 h-64 mt-10 md:mt-0 shadow-lg"
        />
      </section>

      {/* About Section */}
      <section id="about" className="px-10 py-16">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">About Me</h3>
        <p className="text-gray-600 leading-relaxed">
          With 16+ years in software engineering, I specialize in full-stack development, cloud computing, and AI integration.
          Passionate about solving real-world problems with scalable and efficient solutions.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-10 py-16 bg-gray-100">
        <h3 className="text-3xl font-bold mb-10 text-gray-800 text-center">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h4 className="font-bold text-lg">Car Rental System</h4>
            <p className="text-gray-600 mt-2">
              A layered architecture project with full CRUD, reporting, and testing features.
            </p>
            <a href="#" className="text-blue-600 mt-4 inline-block">View on GitHub →</a>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h4 className="font-bold text-lg">Store Management CLI</h4>
            <p className="text-gray-600 mt-2">
              Python + SQLAlchemy app with OOP design, CLI features, and validations.
            </p>
            <a href="#" className="text-blue-600 mt-4 inline-block">View on GitHub →</a>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h4 className="font-bold text-lg">Quantum Circuits (Qiskit)</h4>
            <p className="text-gray-600 mt-2">
              Built custom gates and simulated Grover’s algorithm for research purposes.
            </p>
            <a href="#" className="text-blue-600 mt-4 inline-block">View on GitHub →</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-10 py-16">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">Skills</h3>
        <div className="flex flex-wrap gap-4">
          {["C#", ".NET Core", "Python", "SQL", "Docker", "Kubernetes", "React", "Tailwind"].map(skill => (
            <span key={skill} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg shadow">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-10 py-16 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">Contact</h3>
        <p className="text-gray-600 mb-6">
          Interested in working together? Let’s connect!
        </p>
        <div className="flex justify-center gap-6 text-2xl text-blue-600">
          <a href="mailto:youremail@example.com"><FaEnvelope /></a>
          <a href="https://github.com/yourgithub"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourlinkedin"><FaLinkedin /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-white border-t mt-10 text-gray-500">
        © 2025 Ronald Tiangson. All rights reserved.
      </footer>
    </div>
  );
}
