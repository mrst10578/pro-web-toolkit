import fs from "node:fs";
import path from "node:path";

const starterNames = [
  "starter-web",
  "starter-content",
  "starter-saas-dashboard",
  "starter-ai",
  "starter-cms",
  "starter-learning",
  "starter-commerce",
];

const packs = [
  { dir: "auth", key: "auth" },
  { dir: "database", key: "database" },
  { dir: "storage", key: "storage" },
  { dir: "email", key: "email" },
  { dir: "payments", key: "payments" },
  { dir: "analytics", key: "analytics" },
  { dir: "monitoring", key: "monitoring" },
  { dir: "search", key: "search" },
  { dir: "ai", key: "ai" },
  { dir: "rag", key: "rag" },
  { dir: "pdf", key: "pdf" },
  { dir: "scraping", key: "scraping" },
  { dir: "rich-text-editor", key: "rich_text_editor" },
  { dir: "background-jobs", key: "background_jobs" },
  { dir: "realtime", key: "realtime" },
  { dir: "rtl-persian", key: "rtl_persian" },
];

const required = [
  "README.md",
  "AGENTS.md",
  "toolkit.project.yml",
  "STATUS.md",
  "docs/architecture.md",
  "docs/choosing-a-starter.md",
  "docs/decision-tree.md",
  "docs/feature-pack-contract.md",
  "docs/feature-pack-compatibility.md",
  "docs/starter-contract.md",
  "docs/client-intake-checklist.md",
  "docs/maintenance.md",
  "feature-packs/catalog.yml",
  "feature-packs/_template/README.md",
  "feature-packs/_template/pack.yml",
  "feature-packs/_template/env.example",
  "feature-packs/_template/install.md",
  "feature-packs/_template/tests-or-verification.md",
  "starters/catalog.yml",
];

const requiredPackFiles = [
  "README.md",
  "pack.yml",
  "env.example",
  "install.md",
  "tests-or-verification.md",
];

for (const pack of packs) {
  for (const file of requiredPackFiles) {
    required.push(`feature-packs/${pack.dir}/${file}`);
  }
}

const missing = required.filter((file) => !fs.existsSync(path.resolve(file)));
if (missing.length) {
  console.error("Missing required toolkit files:");
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

function yamlLines(text) {
  return text.replace(/\r/g, "").split("\n");
}

function topLevelScalar(text, key) {
  const prefix = `${key}:`;
  const line = yamlLines(text).find((entry) => entry.startsWith(prefix));
  if (!line) return null;
  return line.slice(prefix.length).trim();
}

function topLevelList(text, key) {
  const source = yamlLines(text);
  const start = source.findIndex((entry) => entry === `${key}:`);
  if (start === -1) return null;
  const values = [];
  for (let index = start + 1; index < source.length; index += 1) {
    const entry = source[index];
    if (/^  -\s+/.test(entry)) {
      values.push(entry.replace(/^  -\s+/, "").trim());
      continue;
    }
    if (entry.trim() === "") continue;
    break;
  }
  return values;
}

function nestedScalar(text, section, key) {
  const source = yamlLines(text);
  const start = source.findIndex((entry) => entry === `  ${section}:`);
  if (start === -1) return null;
  for (let index = start + 1; index < source.length; index += 1) {
    const entry = source[index];
    if (/^  [^ ]/.test(entry)) break;
    const prefix = `    ${key}:`;
    if (entry.startsWith(prefix)) return entry.slice(prefix.length).trim();
  }
  return null;
}

const starterCatalog = fs.readFileSync("starters/catalog.yml", "utf8");
for (const starter of starterNames) {
  if (!starterCatalog.includes(`  ${starter}:`)) {
    console.error(`Missing starter catalog entry: ${starter}`);
    process.exit(1);
  }
  const status = nestedScalar(starterCatalog, starter, "status");
  if (status !== "experimental") {
    console.error(`Starter ${starter} must be experimental, found: ${status ?? "missing"}`);
    process.exit(1);
  }
}

const packCatalog = fs.readFileSync("feature-packs/catalog.yml", "utf8");
for (const pack of packs) {
  if (!packCatalog.includes(`  ${pack.key}:`)) {
    console.error(`Missing feature pack catalog entry: ${pack.key}`);
    process.exit(1);
  }

  const catalogStatus = nestedScalar(packCatalog, pack.key, "status");
  if (catalogStatus !== "experimental") {
    console.error(`Pack catalog status for ${pack.key} must be experimental, found: ${catalogStatus ?? "missing"}`);
    process.exit(1);
  }

  const catalogPrimary = nestedScalar(packCatalog, pack.key, "primary");
  if (catalogPrimary === "undecided") {
    console.error(`Pack ${pack.key} still has an undecided primary`);
    process.exit(1);
  }

  const manifestPath = `feature-packs/${pack.dir}/pack.yml`;
  const manifest = fs.readFileSync(manifestPath, "utf8");

  for (const key of ["name", "version", "status", "category", "supported_starters", "dependencies", "env", "data_changes", "verification"]) {
    if (!manifest.includes(`${key}:`)) {
      console.error(`Missing manifest field ${key} in ${manifestPath}`);
      process.exit(1);
    }
  }

  const name = topLevelScalar(manifest, "name");
  if (name !== pack.dir) {
    console.error(`Manifest name mismatch in ${manifestPath}: expected ${pack.dir}, found ${name ?? "missing"}`);
    process.exit(1);
  }

  const status = topLevelScalar(manifest, "status");
  if (status !== "experimental") {
    console.error(`Manifest status for ${pack.dir} must be experimental, found: ${status ?? "missing"}`);
    process.exit(1);
  }

  const supported = topLevelList(manifest, "supported_starters");
  if (!supported || supported.length === 0) {
    console.error(`Pack ${pack.dir} must declare at least one supported starter`);
    process.exit(1);
  }

  const unknown = supported.filter((starter) => !starterNames.includes(starter));
  if (unknown.length) {
    console.error(`Pack ${pack.dir} declares unknown starters: ${unknown.join(", ")}`);
    process.exit(1);
  }

  if (manifest.includes("primary: undecided")) {
    console.error(`Pack manifest ${pack.dir} still contains primary: undecided`);
    process.exit(1);
  }

  for (const file of ["README.md", "install.md", "tests-or-verification.md"]) {
    const content = fs.readFileSync(`feature-packs/${pack.dir}/${file}`, "utf8").trim();
    if (content.length < 100) {
      console.error(`Feature pack ${pack.dir}/${file} is too small to be a usable integration artifact`);
      process.exit(1);
    }
  }
}

console.log(`Toolkit validation passed: ${starterNames.length} experimental starters and ${packs.length} experimental feature packs are structurally consistent.`);
