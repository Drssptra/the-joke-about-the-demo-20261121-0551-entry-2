// The joke about the demo — make.fun bounty
// the-joke-about-the-demo-20261121-0551
//
// Writes a single one-line joke about working beside AI coding agents
// to /output/entry.txt. The joke is a fixed string: the grader runs the
// program twice and both runs must produce the same text, and the
// sandbox has no network, so nothing is fetched or generated at run time.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "During the demo, my AI agent invented a feature that doesn't exist, sold it so confidently the client applauded, and now it's on the roadmap — assigned to me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
