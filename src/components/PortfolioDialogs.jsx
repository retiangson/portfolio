import { useEffect, useRef, useState } from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiExternalLink,
  FiSearch,
  FiShield,
  FiX,
} from "react-icons/fi";
import { filterProjects, projects, skillGroups } from "../data/portfolio.mjs";
import { Icon, ExternalLink, Tags } from "./ui";
import { pages } from "../data/navigation";

function Modal({ titleId, onClose, children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previous;
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className={`modal ${className}`}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === ref.current) {
          const box = ref.current.getBoundingClientRect();
          if (
            event.clientX < box.left ||
            event.clientX > box.right ||
            event.clientY < box.top ||
            event.clientY > box.bottom
          )
            onClose();
        }
      }}
    >
      <button
        className="icon-button modal-close"
        aria-label="Close dialog"
        title="Close (Esc)"
        onClick={onClose}
      >
        <FiX />
      </button>
      {children}
    </dialog>
  );
}

export function ProjectModal({ project, onClose }) {
  return (
    <Modal titleId="project-title" onClose={onClose}>
      <span className={`icon-tile large ${project.color}`}>
        <Icon name={project.icon} />
      </span>
      <span className="eyebrow modal-eyebrow">
        {project.kind} / {project.category}
      </span>
      <h2 id="project-title">{project.name}</h2>
      <p className="modal-headline">{project.headline}</p>
      <p>{project.details}</p>
      <h3>Technology</h3>
      <Tags values={project.tech} />
      <h3>Engineering practices</h3>
      <ul className="practice-list">
        {project.practices.map((practice) => (
          <li key={practice}>
            <FiCheck />
            {practice}
          </li>
        ))}
      </ul>
      {project.url ? (
        <ExternalLink href={project.url} className="button primary">
          {project.linkLabel} <FiExternalLink />
        </ExternalLink>
      ) : (
        <p className="private-note">
          <FiShield /> Professional work. No public demo or private source code
          shared.
        </p>
      )}
    </Modal>
  );
}

export function SearchModal({ onClose, onSelect }) {
  const [query, setQuery] = useState("");
  const matches = query.trim() ? filterProjects(query) : projects.slice(0, 4);
  const pageMatches = pages.filter(
    (page) =>
      !query.trim() ||
      page.name.toLowerCase().includes(query.toLowerCase().trim()),
  );
  const skills = query.trim()
    ? skillGroups.filter((group) =>
        group.skills.some((skill) =>
          skill.toLowerCase().includes(query.toLowerCase().trim()),
        ),
      )
    : [];
  return (
    <Modal titleId="search-title" onClose={onClose} className="search-modal">
      <h2 id="search-title">Find your way around.</h2>
      <label className="search-input">
        <FiSearch />
        <span className="sr-only">Search portfolio</span>
        <input
          autoFocus
          type="search"
          placeholder="Projects, technologies, or pages..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <div className="search-results">
        <span className="sr-only" role="status">
          {pageMatches.length + matches.length + skills.length} results
        </span>
        {pageMatches.length > 0 && <span className="eyebrow">PAGES</span>}
        {pageMatches.map((page) => (
          <a key={page.id} href={`#${page.id}`} onClick={onClose}>
            <page.icon />
            <span>{page.name}</span>
            <FiArrowUpRight />
          </a>
        ))}
        {matches.length > 0 && <span className="eyebrow">PROJECTS</span>}
        {matches.map((project) => (
          <button key={project.id} onClick={() => onSelect(project)}>
            <Icon name={project.icon} />
            <span>
              {project.name}
              <small>{project.category}</small>
            </span>
            <FiArrowRight />
          </button>
        ))}
        {skills.map((group) => (
          <a key={group.name} href="#skills" onClick={onClose}>
            <Icon name={group.icon} />
            <span>
              {group.name}
              <small>
                {group.skills
                  .filter((skill) =>
                    skill.toLowerCase().includes(query.toLowerCase().trim()),
                  )
                  .join(", ")}
              </small>
            </span>
            <FiArrowRight />
          </a>
        ))}
        {!matches.length && !pageMatches.length && !skills.length && (
          <p className="empty-state">
            No results. Try a technology or project name.
          </p>
        )}
      </div>
    </Modal>
  );
}
