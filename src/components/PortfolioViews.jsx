import { useState } from "react";
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiBookOpen,
  FiCheck,
  FiChevronDown,
  FiCloud,
  FiCode,
  FiCopy,
  FiCpu,
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiSearch,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiZap,
  FiBriefcase,
} from "react-icons/fi";
import {
  SiDotnet,
  SiPython,
  SiReact,
  SiTypescript,
  SiFastapi,
  SiOpenai,
  SiClaude,
} from "react-icons/si";
import {
  categories,
  experience,
  filterProjects,
  profile,
  projects,
  skillGroups,
} from "../data/portfolio.mjs";
import { Icon, ExternalLink, SectionTitle, Tags } from "./ui";

const base = import.meta.env.BASE_URL;

function ProjectCard({ project, onSelect }) {
  return (
    <article className="project-card">
      <div className="project-meta">
        <span className={`icon-tile ${project.color}`}>
          <Icon name={project.icon} />
        </span>
        <span>{project.kind}</span>
        <span className="project-number">
          {String(projects.indexOf(project) + 1).padStart(2, "0")}
        </span>
      </div>
      <h2>
        <button onClick={() => onSelect(project)}>
          {project.name}
          <FiArrowUpRight aria-hidden="true" />
        </button>
      </h2>
      <p>{project.summary}</p>
      <Tags values={project.tech} limit={4} />
      <div className="project-card-footer">
        <span>{project.category}</span>
        <button
          className="text-link"
          aria-label={`Read ${project.name} case study`}
          onClick={() => onSelect(project)}
        >
          Case study <FiArrowRight />
        </button>
      </div>
    </article>
  );
}

export function Overview({ onSelect }) {
  return (
    <>
      <header className="overview-heading">
        <div>
          <img
            className="overview-portrait"
            src={`${base}profile.jpg`}
            alt="Ronald Tiangson"
            width="64"
            height="64"
          />
          <span className="eyebrow">
            <span className="status-dot" /> ENGINEER. BUILDER. MENTOR.
          </span>
          <h1>
            Ronald Tiangson<span>Software, with purpose.</span>
          </h1>
          <p>
            Enterprise experience. Full-stack thinking. A curiosity for AI.
            <br className="desktop-break" /> Building useful systems, from the
            first requirement to production.
          </p>
        </div>
        <a className="button primary" href="#contact">
          Let's connect <FiArrowUpRight />
        </a>
      </header>
      <div className="tool-strip">
        <span>MY EVERYDAY TOOLKIT</span>
        {[
          [FiCode, "C#"],
          [SiDotnet, ".NET"],
          [SiPython, "Python"],
          [SiReact, "React"],
          [SiTypescript, "TypeScript"],
          [SiFastapi, "FastAPI"],
          [FiCloud, "Azure / AWS"],
        ].map(([ToolIcon, name]) => (
          <span className="tool" key={name}>
            <ToolIcon aria-hidden="true" />
            {name}
          </span>
        ))}
        <a
          href="#skills"
          title="Explore all skills"
          aria-label="Explore all skills"
        >
          <FiArrowRight />
        </a>
        <div
          className="agentic-toolkit"
          role="group"
          aria-label="Agentic AI tools"
        >
          <span className="agentic-toolkit-label">
            <FiCpu aria-hidden="true" /> Agentic AI
          </span>
          {[
            [SiOpenai, "OpenAI Codex"],
            [SiClaude, "Claude Code"],
            [FiZap, "Hermes"],
          ].map(([ToolIcon, name]) => (
            <span className="tool agentic-tool" key={name}>
              <ToolIcon aria-hidden="true" />
              {name}
            </span>
          ))}
        </div>
      </div>
      <div className="overview-grid">
        <article className="featured-panel">
          <div className="panel-top">
            <span className="eyebrow">
              <FiCpu /> FEATURED BUILD
            </span>
            <span className="small-label">AI & knowledge</span>
          </div>
          <div className="featured-body">
            <div>
              <h2>
                MemoLink
                <span>
                  Make knowledge
                  <br />
                  work for you.
                </span>
              </h2>
              <p>
                Capture the thought. Find the context.
                <br />
                Turn your notes into useful answers.
              </p>
              <button
                className="button ink"
                onClick={() => onSelect(projects[0])}
              >
                Explore the project <FiArrowUpRight />
              </button>
            </div>
            <div
              className="knowledge-map"
              aria-label="MemoLink connects notes, context, and AI answers"
            >
              <span className="map-label">CONNECTED KNOWLEDGE</span>
              <div className="map-node">
                <FiBookOpen />
                <span>Your notes</span>
                <FiCheck />
              </div>
              <span className="map-line" />
              <div className="map-core">
                <FiCpu />
                <span>MemoLink</span>
              </div>
              <span className="map-line" />
              <div className="map-answer">
                <FiZap />
                <span>Context, connected.</span>
              </div>
              <span className="map-caption">Capture / Organise / Recall</span>
            </div>
          </div>
          <div className="featured-bottom">
            <span>
              <SiReact /> React
            </span>
            <span>
              <SiFastapi /> FastAPI
            </span>
            <span>
              <FiCpu /> LLM integration
            </span>
            <ExternalLink
              href={projects[0].url}
              aria-label="Open MemoLink in a new tab"
              title="Open MemoLink"
            >
              <FiExternalLink />
            </ExternalLink>
          </div>
        </article>
        <article className="about-panel panel">
          <div className="panel-top">
            <span className="eyebrow">BEHIND THE CODE</span>
            <a
              href="#about"
              className="icon-button"
              title="About Ronald"
              aria-label="About Ronald"
            >
              <FiArrowUpRight />
            </a>
          </div>
          <div className="portrait-wrap">
            <img src={`${base}profile.jpg`} alt="Ronald Tiangson" />
            <span className="location-label">
              <FiMapPin /> Auckland, NZ
            </span>
          </div>
          <h2>Hi, I'm Ronald.</h2>
          <p>
            I turn complex business problems into clear, maintainable software.
            And help teams grow along the way.
          </p>
          <a href="#about" className="text-link">
            A little more about me <FiArrowRight />
          </a>
        </article>
        <article className="impact-panel panel">
          <span className="eyebrow">
            <FiTrendingUp /> ENGINEERING IMPACT
          </span>
          <div className="impact-value">
            23h <FiArrowRight />
            <strong>2-3h</strong>
          </div>
          <h2>Less waiting. More doing.</h2>
          <p>
            Data-processing improvement at Smartgroup through SQL tuning and
            batch refactoring.
          </p>
          <a href="#experience" className="text-link">
            The experience behind it <FiArrowRight />
          </a>
        </article>
        <article className="latest-panel panel">
          <div className="panel-top">
            <span className="eyebrow">
              <FiBriefcase /> LATEST EXPERIENCE
            </span>
            <a className="text-link" href="#experience">
              View all <FiArrowUpRight />
            </a>
          </div>
          <span className="period">APR - AUG 2026 / VOLUNTEER</span>
          <h2>
            Tiaki Taonga Trust
            <br />
            Wai 262
          </h2>
          <p>Software Engineering Intern</p>
          <div className="experience-capabilities">
            <span>
              <FiCode /> Full-stack delivery
            </span>
            <span>
              <FiUsers /> Developer mentoring
            </span>
            <span>
              <FiLayers /> Requirements & planning
            </span>
          </div>
        </article>
        <article className="education-panel panel">
          <div className="panel-top">
            <span className="eyebrow">
              <FiBookOpen /> EDUCATION
            </span>
            <a
              href="#about"
              className="icon-button"
              title="View education"
              aria-label="View education"
            >
              <FiArrowUpRight />
            </a>
          </div>
          <div className="degree-mark">
            M<span>SE</span>
          </div>
          <h2>
            Master of
            <br />
            Software Engineering
          </h2>
          <p>Yoobee College of Creative Innovation</p>
          <span className="period">JUL 2025 - JUL 2026 / NEW ZEALAND</span>
        </article>
      </div>
      <section className="selected-section">
        <div className="section-line">
          <h2>
            More from the workbench <span>Selected projects</span>
          </h2>
          <a href="#projects" className="text-link">
            All {projects.length} projects <FiArrowRight />
          </a>
        </div>
        <div className="project-grid compact">
          {[projects[1], projects[3], projects[8]].map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelect}
            />
          ))}
        </div>
      </section>
      <div className="contact-band">
        <div>
          <span className="eyebrow">A GOOD CONVERSATION IS A GOOD START.</span>
          <h2>Have something in mind?</h2>
        </div>
        <a href="#contact" className="button primary">
          Let's talk <FiArrowUpRight />
        </a>
      </div>
    </>
  );
}

export function Projects({ onSelect }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const filtered = filterProjects(query, category);
  return (
    <>
      <SectionTitle
        eyebrow="THE WORKBENCH"
        title="Projects & case studies"
        description="Applied AI, full-stack platforms, and enterprise systems. The thinking behind the build, not just the technology."
      />
      <div className="project-controls">
        <div className="filter-tabs" aria-label="Filter projects">
          {categories.map((item) => (
            <button
              key={item}
              aria-pressed={category === item}
              className={category === item ? "selected" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="search-input">
          <FiSearch />
          <span className="sr-only">Search projects or technology</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects or tech..."
            type="search"
          />
        </label>
      </div>
      <p className="result-count" role="status">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
      </p>
      <div className="project-grid">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={onSelect} />
        ))}
      </div>
      {!filtered.length && (
        <div className="empty-state">
          <FiSearch />
          <h2>No matching projects</h2>
          <p>Try a different keyword or category.</p>
          <button
            className="button secondary"
            onClick={() => {
              setQuery("");
              setCategory(categories[0]);
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}

export function Experience() {
  return (
    <>
      <SectionTitle
        eyebrow="THE JOURNEY"
        title="Built on real experience."
        description="Engineering across finance, insurance, healthcare, and knowledge systems, with ownership from requirements to production."
      />
      <div className="career-summary">
        <div>
          <strong>16+</strong>
          <span>years in software engineering</span>
        </div>
        <div>
          <strong>Full cycle</strong>
          <span>planning through production</span>
        </div>
        <div>
          <strong>People first</strong>
          <span>mentoring & technical leadership</span>
        </div>
      </div>
      <div className="timeline">
        {experience.map((job, index) => (
          <details
            className="job"
            key={job.company}
            open={index === 0 ? true : undefined}
          >
            <summary>
              <span className={`company-avatar ${job.color}`}>
                {job.initials}
              </span>
              <span className="job-heading">
                <span className="job-company">{job.company}</span>
                <span className="job-role">{job.role}</span>
                <span className="job-summary">{job.summary}</span>
              </span>
              <span className="job-period">
                {job.period}
                <span>{job.location}</span>
              </span>
              <FiChevronDown className="details-chevron" />
            </summary>
            <div className="job-details">
              <ul>
                {job.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

export function Skills() {
  const [query, setQuery] = useState("");
  const matching = skillGroups
    .map((group) => ({
      ...group,
      skills: group.skills.filter((skill) =>
        `${group.name} ${skill}`
          .toLowerCase()
          .includes(query.trim().toLowerCase()),
      ),
    }))
    .filter((group) => group.skills.length);
  return (
    <>
      <SectionTitle
        eyebrow="TOOLS WITH A PURPOSE"
        title="Skills & engineering toolkit"
        description="A practical stack shaped by enterprise delivery, independent builds, and continuous learning."
      />
      <label className="search-input skill-search">
        <FiSearch />
        <span className="sr-only">Find a skill</span>
        <input
          type="search"
          placeholder="Find a skill, framework, or practice..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <p className="result-count" role="status">
        {matching.reduce((total, group) => total + group.skills.length, 0)}{" "}
        skills across {matching.length} disciplines
      </p>
      <div className="skills-grid">
        {matching.map((group) => (
          <section key={group.name} className="skill-group">
            <div>
              <span className={`icon-tile ${group.color}`}>
                <Icon name={group.icon} />
              </span>
              <h2>{group.name}</h2>
              <span className="skill-count">{group.skills.length}</span>
            </div>
            <Tags values={group.skills} />
          </section>
        ))}
      </div>
      {!matching.length && (
        <div className="empty-state">
          <FiSearch />
          <h2>No matching skills</h2>
          <button className="button secondary" onClick={() => setQuery("")}>
            Clear search
          </button>
        </div>
      )}
    </>
  );
}

export function About() {
  return (
    <>
      <SectionTitle
        eyebrow="BEYOND THE TOOLKIT"
        title="Engineer by trade. Curious by nature."
      />
      <div className="about-layout">
        <img
          className="about-portrait"
          src={`${base}profile.jpg`}
          alt="Ronald Tiangson"
        />
        <div className="about-copy">
          <span className="eyebrow">
            <FiMapPin /> AUCKLAND, NEW ZEALAND
          </span>
          <h2>I'm Ronald Tiangson.</h2>
          <p>
            A senior software engineer with 16+ years of experience building and
            modernising systems across finance, insurance, healthcare, and SaaS.
          </p>
          <p>
            My work connects .NET and SQL expertise with modern full-stack
            development, cloud delivery, and applied AI. I enjoy making
            complicated workflows simpler, designing maintainable systems, and
            helping other developers find their footing.
          </p>
          <p>
            My AI projects explore receipt parsing with OCR and LLMs, semantic
            search with FAISS, local-model knowledge assistants, and AI-assisted
            note recall. I care about turning those ideas into useful,
            understandable tools.
          </p>
          <a
            href={`${base}Ronald_Tiangson_2026.pdf`}
            download
            className="button primary"
          >
            <FiDownload /> Download CV
          </a>
        </div>
      </div>
      <section className="education-section">
        <div className="section-line">
          <h2>Education & applied learning</h2>
          <FiBookOpen />
        </div>
        <div className="education-row">
          <span className="period">JUL 2025 - JUL 2026</span>
          <div>
            <h3>Master of Software Engineering, Level 9</h3>
            <p>Yoobee College of Creative Innovation, New Zealand</p>
            <Tags
              values={[
                "Software architecture",
                "AI systems",
                "Data analytics",
                "Cloud security",
                "Industry capstone",
              ]}
            />
          </div>
        </div>
        <div className="education-row">
          <span className="period">2004 - 2008</span>
          <div>
            <h3>Bachelor of Science in Computer Science</h3>
            <p>Filamer Christian University, Philippines</p>
            <Tags
              values={["Programming", "Algorithms", "Systems development"]}
            />
          </div>
        </div>
      </section>
      <section className="principles-section">
        <div className="section-line">
          <h2>How I approach the work</h2>
        </div>
        <div className="principles-grid">
          {[
            [
              FiLayers,
              "Clarity before complexity",
              "Understand the requirements. Keep boundaries clear. Choose patterns that make the system easier to change.",
            ],
            [
              FiShield,
              "Quality is part of delivery",
              "Code review, testing, secure data handling, and useful documentation belong in the work, not after it.",
            ],
            [
              FiUsers,
              "Build the team, too",
              "Share the reasoning, mentor patiently, and make technical decisions understandable to the people using them.",
            ],
          ].map(([ItemIcon, title, text]) => (
            <div key={title}>
              <ItemIcon />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function Contact({ copyEmail, copied }) {
  return (
    <>
      <SectionTitle
        eyebrow="LET'S CONNECT"
        title="Good work starts with a conversation."
        description="For software engineering opportunities, project collaboration, or a conversation about building something useful."
      />
      <div className="contact-layout">
        <div className="email-panel">
          <span className="icon-tile green">
            <FiMail />
          </span>
          <h2>Say hello.</h2>
          <a className="email-address" href={`mailto:${profile.email}`}>
            {profile.email}
            <FiArrowUpRight />
          </a>
          <p>Based in Auckland, New Zealand.</p>
          <div className="contact-actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
              Write an email <FiArrowUpRight />
            </a>
            <button className="button secondary" onClick={copyEmail}>
              {copied ? <FiCheck /> : <FiCopy />}
              {copied ? "Email copied" : "Copy email"}
            </button>
          </div>
        </div>
        <div className="contact-links">
          <ExternalLink href={profile.linkedin}>
            <FiLinkedin />
            <span>
              LinkedIn<small>Experience & professional connections</small>
            </span>
            <FiArrowUpRight />
          </ExternalLink>
          <ExternalLink href={profile.github}>
            <FiGithub />
            <span>
              GitHub<small>Projects, source code & experiments</small>
            </span>
            <FiArrowUpRight />
          </ExternalLink>
          <a href={`${base}Ronald_Tiangson_2026.pdf`} download>
            <FiDownload />
            <span>
              Download CV<small>PDF document</small>
            </span>
            <FiArrowDown />
          </a>
          <a href={`${base}Qualification.pdf`} download>
            <FiBookOpen />
            <span>
              Qualifications<small>PDF document</small>
            </span>
            <FiArrowDown />
          </a>
        </div>
      </div>
      <div className="contact-note">
        <FiCpu />
        <p>
          Curious about my projects or experience? The MemoLink assistant in the
          bottom-right corner can help you explore my shared notes.
        </p>
      </div>
    </>
  );
}
