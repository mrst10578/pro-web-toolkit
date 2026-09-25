import fs from "node:fs";
import path from "node:path";

const required = [
  "README.md",
  "AGENTS.md",
  "toolkit.project.yml",
  "docs/architecture.md",
  "docs/choosing-a-starter.md",
  "docs/decision-tree.md",
  "docs/feature-pack-contract.md",
  "docs/starter-contract.md",
  "docs/client-intake-checklist.md",
  "docs/maintenance.md",
  "feature-packs/catalog.yml",
  "feature-packs/_template/README.md",
  "feature-packs/_template/pack.yml",
  "feature-packs/_template/env.example",
  "feature-packs/_template/install.md",
  "feature-packs/_template/tests-or-verification.md",
  "starters/catalog.yml"
];

const requiredPackFiles = [
  "README.md",
  "pack.yml",
  "env.example",
  "install.md",
  "tests-or-verification.md"
];

const draftPacks = [
  "auth",
  "database",
  "storage",
  "email",
  "payments",
  "analytics",
  "monitoring",
  "rtl-persian"
];

for (const pack of draftPacks) {
  for (const file of requiredPackFiles) {
    required.push(`feature-packs/${pack}/${file}`);
  }
}

const missing = required.filter((file) => !fs.existsSync(path.resolve(file)));

if (missing.length) {
  console.error("Missing required toolkit files:");
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

const packCatalog = fs.readFileSync("feature-packs/catalog.yml", "utf8");
for (const pack of ["auth", "database", "storage", "email", "payments", "analytics", "monitoring", "search", "ai", "rag", "pdf", "scraping", "rtl_persian"]) {
  if (!packCatalog.includes(`  ${pack}:`)) {
    console.error(`Missing feature pack catalog entry: ${pack}`);
    process.exit(1);
  }
}

for (const pack of draftPacks) {
  const expected = `  ${pack}:\n    status: draft`;
  if (!packCatalog.includes(expected)) {
    console.error(`Expected draft status for implemented pack: ${pack}`);
    process.exit(1);
  }
}

const starterCatalog = fs.readFileSync("starters/catalog.yml", "utf8");
for (const starter of ["starter-web", "starter-content", "starter-saas-dashboard", "starter-ai", "starter-cms", "starter-learning"]) {
  if (!starterCatalog.includes(`  ${starter}:`)) {
    console.error(`Missing starter catalog entry: ${starter}`);
    process.exit(1);
  }
}

console.log("Toolkit structure validation passed.");
