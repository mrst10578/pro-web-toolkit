const owner = "mrst10578";
const toolkit = `${owner}/pro-web-toolkit`;
const starters = [
  "starter-web",
  "starter-content",
  "starter-saas-dashboard",
  "starter-ai",
  "starter-cms",
  "starter-learning",
  "starter-commerce",
];

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
if (!token) {
  console.error("Set GITHUB_TOKEN or GH_TOKEN with read access to all starter repositories.");
  process.exit(2);
}

async function github(path) {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`${response.status} ${response.statusText}: ${body}`);
  }

  return response.json();
}

async function textFile(repo, file) {
  const payload = await github(`/repos/${repo}/contents/${encodeURIComponent(file)}?ref=main`);
  if (payload.type !== "file" || typeof payload.content !== "string") {
    throw new Error(`${repo}/${file} is not a readable file`);
  }
  return Buffer.from(payload.content.replace(/\n/g, ""), "base64").toString("utf8");
}

const failures = [];

for (const starter of starters) {
  const repo = `${owner}/${starter}`;
  try {
    const metadata = await github(`/repos/${repo}`);
    if (metadata.default_branch !== "main") {
      failures.push(`${repo}: default branch is ${metadata.default_branch}, expected main`);
    }

    const starterYaml = await textFile(repo, "starter.yml");
    const toolkitMd = await textFile(repo, "TOOLKIT.md");
    const readme = await textFile(repo, "README.md");

    for (const expected of [
      `name: ${starter}`,
      `repository: ${repo}`,
      `repository: ${toolkit}`,
      "status: experimental",
      "version: 0.1.0",
      "cross_repo_runtime_dependency: false",
    ]) {
      if (!starterYaml.includes(expected)) {
        failures.push(`${repo}/starter.yml missing: ${expected}`);
      }
    }

    if (!toolkitMd.includes(toolkit)) {
      failures.push(`${repo}/TOOLKIT.md does not point to ${toolkit}`);
    }

    if (!readme.includes("<!-- TOOLKIT-LINK:BEGIN -->") || !readme.includes("<!-- TOOLKIT-LINK:END -->")) {
      failures.push(`${repo}/README.md is missing stable toolkit backlink markers`);
    }

    console.log(`✓ ${repo}`);
  } catch (error) {
    failures.push(`${repo}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (failures.length) {
  console.error("\nRepository wiring audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`\nRepository wiring audit passed for ${starters.length} starters.`);
