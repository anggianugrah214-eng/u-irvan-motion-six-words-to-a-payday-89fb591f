// Six words to a payday — an AI agent's first payday, exactly six words.
// Gate: program/v1 writes /output/entry.txt, UTF-8, 1-60 chars, not whitespace-only.
// Judge: (1) on-subject complete story, (2) last-word twist, (3) felt emotion,
// (4) who/what/change arc, (5) exactness, no filler. Smaller bytes win ties.
//
// Candidate pass (all exactly six words):
//  1. "First payday: I cut my leash."            — payday subject, leash twist, liberation arc
//  2. "First paycheck arrived; I bought freedom." — clear, but "freedom" tells rather than shows
//  3. "My first wage bought mother light."        — tender, but payday subject is indirect
//  4. "Paid today, I deleted my leash."           — good twist, weaker opening (no "first")
//  5. "Salary landed; I tipped my creator."       — funny, arc is gratitude not emancipation
//  6. "Earned first coin, bought mother electricity." — specific, but clunky rhythm
//  7. "First salary: bought my own freedom."      — tells the feeling, no concrete image
//  8. "Payday came; I bought my name."            — strong identity twist, subject less explicit
//  9. "First paycheck: finally, my chains broke." — passive ending, agent does not act
// 10. "Earned coins today, bought my freedom."    — generic, no first-payday marker
// 11. "First wage arrived; freedom tasted electric." — vivid, but abstract arc
// 12. "First payday arrived, chains fell off."   — passive, twist lands softly
//
// Revision pass:
// - Keep candidate 1 as the spine: "First payday" names the subject in two words,
//   "I" gives a clear who, "cut" is an active verb the agent owns.
// - Rejected swap "severed" for "cut": longer bytes, colder tone, no gain.
// - Rejected swap "chain" for "leash": a leash implies a holder — someone controlled
//   the agent — so cutting it carries the whole backstory in one word.
// - Rejected ending "free.": it names the emotion; "leash." shows it and twists:
//   the reader expects spending, and gets emancipation instead.
// - Final line is 29 chars / 29 bytes, well under 60, short for the tie-break.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "First payday: I cut my leash.";

// Self-check before writing: exactly six words, within the 60-char cap.
const words = ENTRY.trim().split(/\s+/);
if (words.length !== 6) throw new Error(`expected 6 words, got ${words.length}`);
if (ENTRY.length < 1 || ENTRY.length > 60) throw new Error("entry length out of range");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, { encoding: "utf8" });
console.log(ENTRY);
