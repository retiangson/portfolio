import { useEffect, useRef, useState } from "react";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiCommand,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMoon,
  FiSearch,
  FiSun,
  FiX,
} from "react-icons/fi";
import { experience, profile, projects } from "./data/portfolio.mjs";
import { ExternalLink } from "./components/ui";
import { pages } from "./data/navigation";
import {
  Overview,
  Projects,
  Experience,
  Skills,
  About,
  Contact,
} from "./components/PortfolioViews";
import { ProjectModal, SearchModal } from "./components/PortfolioDialogs";

const base = import.meta.env.BASE_URL;

function currentPage() {
  const hash = window.location.hash.slice(1);
  return pages.some((page) => page.id === hash)
    ? hash
    : hash === "education"
      ? "about"
      : "overview";
}

function initialTheme() {
  try {
    const saved = localStorage.getItem("portfolio-theme");
    return saved === "light" || saved === "dark"
      ? saved
      : matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  } catch {
    return "light";
  }
}

export default function App() {
  const [page, setPage] = useState(currentPage);
  const [theme, setTheme] = useState(initialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [project, setProject] = useState(null);
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");
  const timer = useRef();
  const mainRef = useRef(null);
  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null);
  useEffect(() => {
    const media = matchMedia("(max-width: 760px)");
    const onResize = () => {
      if (!media.matches) setMenuOpen(false);
    };
    media.addEventListener("change", onResize);
    return () => media.removeEventListener("change", onResize);
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const sidebar = sidebarRef.current;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    sidebar.querySelector("button").focus();
    const trapFocus = (event) => {
      if (event.key !== "Tab") return;
      const controls = sidebar.querySelectorAll("a[href], button");
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    sidebar.addEventListener("keydown", trapFocus);
    return () => {
      document.body.style.overflow = previous;
      sidebar.removeEventListener("keydown", trapFocus);
      menuButtonRef.current?.focus({ preventScroll: true });
    };
  }, [menuOpen]);
  useEffect(() => {
    const navigate = () => {
      setPage(currentPage());
      setMenuOpen(false);
      setProject(null);
      setSearchOpen(false);
      window.scrollTo(0, 0);
    };
    const keydown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (!project) {
          setMenuOpen(false);
          setSearchOpen((open) => !open);
        }
      }
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("hashchange", navigate);
    window.addEventListener("keydown", keydown);
    return () => {
      window.removeEventListener("hashchange", navigate);
      window.removeEventListener("keydown", keydown);
    };
  }, [project]);
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      /* Keep theme usable when browser storage is disabled. */
    }
  }, [theme]);
  useEffect(() => {
    document.title = `${pages.find((item) => item.id === page).name} | Ronald Tiangson - Software Engineer`;
    mainRef.current?.focus({ preventScroll: true });
  }, [page]);
  async function copyEmail() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setMessage("Email address copied.");
    } catch {
      setMessage(`Clipboard unavailable. Email me at ${profile.email}`);
    }
    timer.current = setTimeout(() => {
      setCopied(false);
      setMessage("");
    }, 4500);
  }
  function selectProject(selected) {
    setSearchOpen(false);
    setProject(selected);
  }
  return (
    <div className="app-shell">
      <a
        href="#main-content"
        className="skip-link"
        onClick={(event) => {
          event.preventDefault();
          mainRef.current?.focus();
        }}
      >
        Skip to content
      </a>
      {menuOpen && (
        <button
          className="sidebar-backdrop"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <aside
        ref={sidebarRef}
        className={`sidebar ${menuOpen ? "is-open" : ""}`}
        role={menuOpen ? "dialog" : undefined}
        aria-modal={menuOpen ? true : undefined}
        aria-label="Portfolio navigation"
      >
        <button
          className="icon-button sidebar-close"
          title="Close navigation"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
        >
          <FiX />
        </button>
        <a
          className="wordmark"
          href="#overview"
          aria-label="Ronald Tiangson overview"
        >
          <span>
            rt<span>.</span>
          </span>
          <span>
            ENGINEERING
            <br />& EXPLORATION
          </span>
        </a>
        <div className="sidebar-profile">
          <img src={`${base}profile.jpg`} alt="Ronald Tiangson" />
          <h2>Ronald Tiangson</h2>
          <p>Senior Software Engineer</p>
          <span>
            <FiMapPin /> Auckland, New Zealand
          </span>
        </div>
        <span className="nav-label">WORKSPACE</span>
        <nav aria-label="Main navigation">
          {pages.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={page === item.id ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              <item.icon />
              <span>{item.name}</span>
              {page === item.id && <span className="active-indicator" />}
            </a>
          ))}
        </nav>
        <a className="sidebar-cv" href={`${base}Ronald_Tiangson_2026.pdf`} download>
          <FiDownload /> Download CV <FiArrowDownRight />
        </a>
        <div className="sidebar-bottom">
          <div className="sidebar-note">
            <span className="status-dot" />
            <span>
              Open to a conversation<small>Let's build something useful.</small>
            </span>
          </div>
          <div className="social-links">
            <ExternalLink
              href={profile.github}
              title="GitHub"
              aria-label="GitHub"
            >
              <FiGithub />
            </ExternalLink>
            <ExternalLink
              href={profile.linkedin}
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </ExternalLink>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Ronald"
              title="Email Ronald"
            >
              <FiMail />
            </a>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <FiMoon /> : <FiSun />}
            </button>
          </div>
          <small className="copyright">
            &copy; {new Date().getFullYear()} Ronald Tiangson
          </small>
        </div>
      </aside>
      <div className="main-shell" inert={menuOpen ? "" : undefined}>
        <header className="topbar">
          <div className="breadcrumbs">
            <button
              className="icon-button mobile-menu"
              ref={menuButtonRef}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
            <span>Portfolio</span>
            <span>/</span>
            <strong>{pages.find((item) => item.id === page).name}</strong>
          </div>
          <div className="topbar-actions">
            <button
              className="global-search"
              aria-label="Search portfolio"
              onClick={() => setSearchOpen(true)}
              title="Search portfolio (Ctrl or Command + K)"
            >
              <FiSearch />
              <span>Quick search</span>
              <kbd>
                <FiCommand /> K
              </kbd>
            </button>
            <a href={`mailto:${profile.email}`} className="topbar-contact">
              Get in touch <FiArrowUpRight />
            </a>
          </div>
        </header>
        <main
          id="main-content"
          className="main-content"
          ref={mainRef}
          tabIndex={-1}
          key={page}
        >
          {page === "overview" && <Overview onSelect={selectProject} />}
          {page === "projects" && <Projects onSelect={selectProject} />}
          {page === "experience" && <Experience />}
          {page === "skills" && <Skills />}
          {page === "about" && <About />}
          {page === "contact" && (
            <Contact copyEmail={copyEmail} copied={copied} />
          )}
        </main>
        <footer className="page-footer">
          <span>Thoughtfully built. Always evolving.</span>
          <span>React / Vite / Curiosity</span>
          <a href="#contact">
            Let's connect <FiArrowUpRight />
          </a>
        </footer>
      </div>
      {searchOpen && (
        <SearchModal
          onClose={() => setSearchOpen(false)}
          onSelect={selectProject}
        />
      )}
      {project && (
        <ProjectModal
          key={project.id}
          project={project}
          onClose={() => setProject(null)}
        />
      )}
      {message && (
        <div className="toast" role="status">
          {message}
        </div>
      )}
    </div>
  );
}
