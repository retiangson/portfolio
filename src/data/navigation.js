import {
  FiFolder,
  FiGrid,
  FiLayers,
  FiMail,
  FiUsers,
  FiBriefcase,
} from "react-icons/fi";
import { experience, projects } from "../data/portfolio.mjs";

export const pages = [
  { id: "overview", name: "Overview", icon: FiGrid },
  { id: "projects", name: "Projects", icon: FiFolder },
  { id: "experience", name: "Experience", icon: FiBriefcase },
  { id: "skills", name: "Skills & toolkit", icon: FiLayers },
  { id: "about", name: "About me", icon: FiUsers },
  { id: "contact", name: "Contact", icon: FiMail },
];
