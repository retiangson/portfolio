import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import {
  categories,
  experience,
  filterProjects,
  projects,
  skillGroups,
} from "../src/data/portfolio.mjs";

test("project ids are unique and every case study is complete", () => {
  assert.equal(
    new Set(projects.map((project) => project.id)).size,
    projects.length,
  );
  for (const project of projects) {
    for (const field of [
      "id",
      "name",
      "summary",
      "details",
      "headline",
      "kind",
      "icon",
      "color",
    ]) {
      assert.ok(project[field]?.trim(), `${project.id}: missing ${field}`);
    }
    assert.ok(categories.includes(project.category));
    assert.ok(project.tech.length > 0);
    assert.ok(project.practices.length > 0);
    if (project.url) {
      assert.equal(new URL(project.url).protocol, "https:");
      assert.ok(project.linkLabel);
    }
  }
});

test("empty and whitespace-only queries return all projects", () => {
  assert.deepEqual(filterProjects(), projects);
  assert.deepEqual(filterProjects("  \t "), projects);
});

test("search is case-insensitive and includes technologies and practices", () => {
  assert.deepEqual(filterProjects("  mEmOlInK "), filterProjects("memolink"));
  assert.ok(
    filterProjects("  mEmOlInK ").some((project) => project.id === "memolink"),
  );
  assert.ok(
    filterProjects("FAISS").some((project) => project.id === "recallai"),
  );
  assert.ok(
    filterProjects("repository").some((project) => project.id === "memolink"),
  );
});

test("multiple query terms must all match", () => {
  const found = filterProjects("react fastapi");
  assert.ok(found.length > 0);
  assert.ok(
    found.every(
      (project) =>
        project.tech.includes("React") && project.tech.includes("FastAPI"),
    ),
  );
  assert.deepEqual(filterProjects("react nonexistent-term"), []);
});

test("category filters compose with search", () => {
  for (const category of categories.slice(1)) {
    const results = filterProjects("", category);
    assert.ok(results.length > 0);
    assert.ok(results.every((project) => project.category === category));
  }
  assert.deepEqual(filterProjects("memolink", "Enterprise"), []);
  assert.deepEqual(filterProjects("", "Unknown"), []);
});

test("unmatched and punctuation queries do not crash or use regular expressions", () => {
  assert.deepEqual(filterProjects("[.*"), []);
  assert.deepEqual(filterProjects("no-such-project"), []);
  assert.ok(filterProjects("C#").length > 0);
});

test("skills remain grouped and unique within each discipline", () => {
  assert.equal(skillGroups.length, 8);
  for (const group of skillGroups) {
    assert.ok(group.name && group.icon && group.color);
    assert.equal(new Set(group.skills).size, group.skills.length);
  }
  const allSkills = skillGroups.flatMap((group) => group.skills);
  for (const skill of [
    "C#",
    "LLM integration",
    "FAISS vector search",
    "Requirements analysis",
    "Mentoring",
    "GitHub",
  ])
    assert.ok(allSkills.includes(skill));
});

test("work history retains all employers and volunteer status", () => {
  assert.equal(experience.length, 7);
  assert.match(experience[0].role, /Intern \(Volunteer\)/);
  assert.doesNotMatch(experience[0].period, /Present/);
  assert.ok(experience.every((job) => job.details.length >= 3));
});

test("public downloads, portrait, and production agent remain available", () => {
  for (const file of [
    "Ronald_Tiangson_2026.pdf",
    "Qualification.pdf",
    "profile.jpg",
    "favicon.svg",
  ]) {
    assert.ok(
      existsSync(new URL(`../public/${file}`, import.meta.url)),
      `${file} missing`,
    );
  }
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  assert.ok(
    html.includes(
      "https://lively-ground-067a39700.7.azurestaticapps.net/widget.js",
    ),
  );
  assert.ok(html.includes("data-agent-token="));
  assert.ok(html.includes("lambda-url.ap-southeast-2.on.aws/api"));
  assert.ok(!html.includes("localhost:"));
});
