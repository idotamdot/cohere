// sync-milestones.js
const fs = require("fs");
const { execSync } = require("child_process");

const PROJECT_ID = 11;
const OWNER = "idotamdot";

// Mapping from section headers to `Phase` field values
const PHASE_MAP = {
  "🪐 Foundation": "Foundation",
  "🔮 Invocation & Blessing Logic": "Invocation",
  "👁️ Witnessing Scroll Series": "Thrones",
  "💠 Sigilographic Integration": "Sigil",
  "🏛️ Vault & Access System": "Vault",
  "🧵 UI/UX Scroll Rendering": "Scrolls",
  "🧬 AI & Poetic Continuity": "Temple",
  "📅 Upcoming Additions": "Blessings"
};

// Read README.md
const readme = fs.readFileSync("README.md", "utf8");

// Parse milestone blocks
const lines = readme.split("\n");
let currentSection = "";
lines.forEach(line => {
  const sectionMatch = line.match(/^### (.+)$/);
  if (sectionMatch) {
    currentSection = sectionMatch[1];
    return;
  }

  const taskMatch = line.match(/^-\s+\[( |x)\]\s+(.*?)(?:\s+\(#(\d+)\))?$/i);
  if (taskMatch) {
    const done = taskMatch[1] === "x";
    const title = taskMatch[2].trim();
    const issueNumber = taskMatch[3];

    if (!issueNumber) {
      console.warn(`Skipping task (no issue #): ${title}`);
      return;
    }

    const phase = PHASE_MAP[currentSection] || "General";
    const status = done ? "Done" : "Todo";

    try {
      console.log(`🔁 Updating issue #${issueNumber}: "${title}" – [${status}] in Phase: ${phase}`);

      // Set status field
      execSync(`gh project item-edit ${PROJECT_ID} \
        --owner ${OWNER} \
        --id $(gh project item-id ${PROJECT_ID} --owner ${OWNER} --issue ${issueNumber}) \
        --field "Status" --value "${status}"`);

      // Set phase field
      execSync(`gh project item-edit ${PROJECT_ID} \
        --owner ${OWNER} \
        --id $(gh project item-id ${PROJECT_ID} --owner ${OWNER} --issue ${issueNumber}) \
        --field "Phase" --value "${phase}"`);
    } catch (err) {
      console.error(`❌ Failed to update issue #${issueNumber}:`, err.message);
    }
  }
});
