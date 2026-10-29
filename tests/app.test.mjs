import { after, beforeEach, afterEach, test } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { buildSync } from "esbuild";
import { JSDOM } from "jsdom";
import React, { act } from "react";

const dom = new JSDOM(
  '<!doctype html><html><body><div id="root"></div></body></html>',
  { url: "http://localhost/portfolio/", pretendToBeVisual: true },
);
for (const name of [
  "window",
  "document",
  "HTMLElement",
  "HTMLDialogElement",
  "localStorage",
])
  globalThis[name] = dom.window[name];
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
globalThis.requestAnimationFrame = (callback) => {
  callback();
  return 0;
};
globalThis.matchMedia = () => ({
  matches: false,
  addEventListener() {},
  removeEventListener() {},
});
Object.defineProperty(globalThis, "navigator", {
  value: dom.window.navigator,
  configurable: true,
});
window.scrollTo = () => {};
const { createRoot } = await import("react-dom/client");
// jsdom has no native dialog implementation or layout engine.
HTMLDialogElement.prototype.showModal = function () {
  this.setAttribute("open", "");
};
HTMLDialogElement.prototype.close = function () {
  this.removeAttribute("open");
};
const require = createRequire(import.meta.url);
const outfile = fileURLToPath(
  new URL("../.cache/portfolio-test.cjs", import.meta.url),
);
buildSync({
  entryPoints: [fileURLToPath(new URL("../src/App.jsx", import.meta.url))],
  outfile,
  bundle: true,
  platform: "node",
  format: "cjs",
  jsx: "automatic",
  external: ["react", "react/jsx-runtime"],
  define: { "import.meta.env.BASE_URL": '"/portfolio/"' },
});
const App = require(outfile).default;
let root;
beforeEach(async () => {
  window.history.replaceState({}, "", "/portfolio/");
  localStorage.clear();
  Object.defineProperty(navigator, "clipboard", {
    value: undefined,
    configurable: true,
  });
  root = createRoot(document.getElementById("root"));
  await act(async () => root.render(React.createElement(App)));
});
afterEach(async () => {
  await act(async () => root.unmount());
});
after(() => dom.window.close());

async function route(hash) {
  await act(async () => {
    window.history.replaceState({}, "", `#${hash}`);
    window.dispatchEvent(new window.Event("hashchange"));
  });
}
async function click(element) {
  assert.ok(element, "expected control to exist");
  await act(async () =>
    element.dispatchEvent(new window.MouseEvent("click", { bubbles: true })),
  );
}
async function fill(element, value) {
  assert.ok(element, "expected input to exist");
  await act(async () => {
    Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value",
    ).set.call(element, value);
    element.dispatchEvent(new window.Event("input", { bubbles: true }));
  });
}
function button(text) {
  return [...document.querySelectorAll("button")].find(
    (element) => element.textContent.trim() === text,
  );
}

test("overview renders the identity, featured work, and production-base links", () => {
  assert.match(document.querySelector("h1").textContent, /Ronald Tiangson/);
  assert.match(
    document.querySelector(".featured-panel").textContent,
    /MemoLink/,
  );
  assert.equal(
    document.querySelector(".sidebar-cv").getAttribute("href"),
    "/portfolio/Ronald_Tiangson_2026.pdf",
  );
  assert.equal(
    document.querySelector("nav [aria-current]").getAttribute("href"),
    "#overview",
  );
});

test("everyday toolkit includes C# and the requested agentic AI tools", () => {
  const toolkit = document.querySelector(".tool-strip");
  assert.ok(
    [...toolkit.querySelectorAll(".tool")].some(
      (tool) => tool.textContent === "C#",
    ),
  );
  const agents = toolkit.querySelector('[aria-label="Agentic AI tools"]');
  assert.ok(agents);
  for (const tool of agents.querySelectorAll(".tool")) {
    assert.ok(
      tool.querySelector('svg[aria-hidden="true"]'),
      `${tool.textContent} needs a decorative icon`,
    );
    assert.ok(tool.classList.contains("agentic-tool"));
  }
  assert.deepEqual(
    [...agents.querySelectorAll(".tool")].map((tool) => tool.textContent),
    ["OpenAI Codex", "Claude Code", "Hermes"],
  );
});

test("navigation updates title, active page, and content; education alias works", async () => {
  for (const [hash, heading] of [
    ["projects", "Projects & case studies"],
    ["skills", "Skills & engineering toolkit"],
    ["experience", "Built on real experience."],
    ["contact", "Good work starts with a conversation."],
    ["education", "Engineer by trade. Curious by nature."],
  ]) {
    await route(hash);
    assert.equal(document.querySelector("h1").textContent, heading);
    assert.ok(document.title.includes("Ronald Tiangson"));
    assert.equal(document.activeElement.id, "main-content");
  }
});

test("project filters, text search, empty state, and reset compose", async () => {
  await route("projects");
  assert.equal(document.querySelectorAll(".project-card").length, 10);
  await click(button("Enterprise"));
  assert.equal(document.querySelectorAll(".project-card").length, 4);
  await fill(document.querySelector("input"), "FAISS");
  assert.ok(document.querySelector(".empty-state"));
  await click(button("Clear filters"));
  assert.equal(document.querySelectorAll(".project-card").length, 10);
  await fill(document.querySelector("input"), "FAISS");
  assert.equal(document.querySelectorAll(".project-card").length, 1);
  assert.match(
    document.querySelector(".project-card h2").textContent,
    /RecallAI/,
  );
});

test("case study has details and secure external link; cancellation restores scrolling", async () => {
  await click(button("Explore the project"));
  const dialog = document.querySelector("dialog");
  assert.ok(dialog.hasAttribute("open"));
  assert.equal(dialog.querySelector("h2").textContent, "MemoLink");
  assert.ok(dialog.querySelectorAll(".practice-list li").length >= 4);
  assert.equal(dialog.querySelector("a").rel, "noopener noreferrer");
  assert.equal(document.body.style.overflow, "hidden");
  await act(async () =>
    dialog.dispatchEvent(new window.Event("cancel", { cancelable: true })),
  );
  assert.equal(document.querySelector("dialog"), null);
  assert.equal(document.body.style.overflow, "");
});

test("keyboard search finds a project and transitions into its case study", async () => {
  await act(async () =>
    window.dispatchEvent(
      new window.KeyboardEvent("keydown", {
        key: "k",
        ctrlKey: true,
        bubbles: true,
      }),
    ),
  );
  assert.ok(document.querySelector(".search-modal"));
  await fill(document.querySelector(".search-modal input"), "RecallAI");
  await click(
    [...document.querySelectorAll(".search-results button")].find((element) =>
      element.textContent.includes("RecallAI"),
    ),
  );
  assert.equal(document.querySelectorAll("dialog").length, 1);
  assert.equal(document.querySelector("dialog h2").textContent, "RecallAI");
  await click(document.querySelector(".modal-close"));
  assert.equal(document.body.style.overflow, "");
});

test("skills search finds AI tools and can reset an empty search", async () => {
  await route("skills");
  await fill(document.querySelector("input"), "FAISS");
  assert.equal(document.querySelectorAll(".skill-group").length, 1);
  assert.match(
    document.querySelector(".skill-group").textContent,
    /FAISS vector search/,
  );
  await fill(document.querySelector("input"), "not-a-skill");
  assert.ok(document.querySelector(".empty-state"));
  await click(button("Clear search"));
  assert.equal(document.querySelectorAll(".skill-group").length, 8);
});

test("theme toggle persists across navigation", async () => {
  await click(document.querySelector('[aria-label="Switch to dark mode"]'));
  assert.equal(document.documentElement.dataset.theme, "dark");
  assert.equal(localStorage.getItem("portfolio-theme"), "dark");
  await route("projects");
  assert.equal(document.documentElement.dataset.theme, "dark");
});

test("mobile drawer makes background inert and closes on Escape", async () => {
  await click(document.querySelector(".mobile-menu"));
  assert.ok(document.querySelector(".sidebar.is-open"));
  assert.equal(
    document.querySelector(".sidebar").getAttribute("aria-modal"),
    "true",
  );
  assert.ok(document.querySelector(".main-shell").hasAttribute("inert"));
  assert.equal(document.body.style.overflow, "hidden");
  const controls = document
    .querySelector(".sidebar")
    .querySelectorAll("a[href], button");
  const first = controls[0];
  const last = controls[controls.length - 1];
  first.focus();
  await act(async () =>
    first.dispatchEvent(
      new window.KeyboardEvent("keydown", {
        key: "Tab",
        shiftKey: true,
        bubbles: true,
        cancelable: true,
      }),
    ),
  );
  assert.equal(document.activeElement, last);
  await act(async () =>
    last.dispatchEvent(
      new window.KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
        cancelable: true,
      }),
    ),
  );
  assert.equal(document.activeElement, first);
  await act(async () =>
    window.dispatchEvent(
      new window.KeyboardEvent("keydown", { key: "Escape" }),
    ),
  );
  assert.ok(!document.querySelector(".main-shell").hasAttribute("inert"));
  assert.equal(document.body.style.overflow, "");
  assert.equal(document.activeElement, document.querySelector(".mobile-menu"));
});

test("copy email reports success without sending any request", async () => {
  let copied;
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: {
      writeText: async (value) => {
        copied = value;
      },
    },
  });
  await route("contact");
  await click(button("Copy email"));
  assert.equal(copied, "retiangson@gmail.com");
  assert.ok(button("Email copied"));
  assert.match(document.querySelector(".toast").textContent, /copied/);
});

test("unavailable clipboard provides an actionable fallback", async () => {
  await route("contact");
  await click(button("Copy email"));
  assert.match(
    document.querySelector(".toast").textContent,
    /Clipboard unavailable.*retiangson@gmail.com/,
  );
});
