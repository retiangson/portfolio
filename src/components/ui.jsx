import {
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiFolder,
  FiHeart,
  FiLayers,
  FiLayout,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiZap,
  FiTarget,
} from "react-icons/fi";

const icons = {
  brain: FiCpu,
  scan: FiTarget,
  folder: FiFolder,
  sparkles: FiZap,
  chart: FiTrendingUp,
  users: FiUsers,
  shield: FiShield,
  heart: FiHeart,
  code: FiCode,
  layout: FiLayout,
  layers: FiLayers,
  database: FiDatabase,
  cloud: FiCloud,
};

export function Icon({ name, ...props }) {
  const Component = icons[name] || FiCode;
  return <Component aria-hidden="true" {...props} />;
}

export function ExternalLink({ href, children, ...props }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

export function SectionTitle({ eyebrow, title, description }) {
  return (
    <header className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </header>
  );
}

export function Tags({ values, limit }) {
  return (
    <div className="tags">
      {values.slice(0, limit).map((value) => (
        <span key={value}>{value}</span>
      ))}
      {limit && values.length > limit && <span>+{values.length - limit}</span>}
    </div>
  );
}
