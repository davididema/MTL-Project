/**
 * convert-tokens.js
 *
 * Reads colour tokens from  color-token.json  and typography tokens from
 * design-tokens.json, then writes every token as a CSS custom property into
 * a single  design-system.css  file.
 *
 * Colour handling
 * ───────────────
 * •  Only the COLOUR ROLES (color.light / color.dark) are converted.
 *    Primitive colour values that live elsewhere in the file are intentionally
 *    skipped — the UI should reference roles, not primitives.
 * •  Light-mode roles go into  :root { … }
 * •  Dark-mode roles go into  [data-theme="dark"] { … }
 *
 * Typography handling
 * ───────────────────
 * •  All keys under the "typography" object in design-tokens.json are
 *    converted to CSS custom properties inside  :root { … }.
 *
 * Usage:   node convert-tokens.js
 * Output:  design-system.css  (in the same directory)
 */

const fs = require('fs');
const path = require('path');

// ── Resolve file paths relative to this script ──────────────────────────────
const ROOT_DIR = __dirname;
const COLOR_FILE = path.join(ROOT_DIR, 'color-token.json');
const TYPOGRAPHY_FILE = path.join(ROOT_DIR, 'design-token.json');
const OUTPUT_FILE = path.join(ROOT_DIR, 'design-system.css');

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Turn a token key like "primary-color" into a CSS variable name
 * like "--primary-color".  An optional prefix is prepended when supplied.
 */
function toCSSVarName(key, prefix = '') {
  const slug = key.replace(/\s+/g, '-').toLowerCase();
  return prefix ? `--${prefix}-${slug}` : `--${slug}`;
}

/**
 * Convert a flat { key: value } map into indented CSS variable declarations.
 */
function mapToDeclarations(map, prefix = '', indent = '  ') {
  return Object.entries(map)
    .map(([key, value]) => `${indent}${toCSSVarName(key, prefix)}: ${value};`)
    .join('\n');
}

// ── Read & parse source files ────────────────────────────────────────────────

let colorTokens, typographyTokens;

try {
  colorTokens = JSON.parse(fs.readFileSync(COLOR_FILE, 'utf-8'));
} catch (err) {
  console.error(`❌  Failed to read ${COLOR_FILE}:\n`, err.message);
  process.exit(1);
}

try {
  typographyTokens = JSON.parse(fs.readFileSync(TYPOGRAPHY_FILE, 'utf-8'));
} catch (err) {
  console.error(`❌  Failed to read ${TYPOGRAPHY_FILE}:\n`, err.message);
  process.exit(1);
}

// ── Extract colour roles (light & dark) ──────────────────────────────────────
// Only the "color.light" and "color.dark" objects are treated as colour roles.
// Everything else in color-token.json is considered a primitive and is skipped.

const lightColors = (colorTokens.color && colorTokens.color.light) || {};
const darkColors = (colorTokens.color && colorTokens.color.dark) || {};

// ── Extract typography tokens ────────────────────────────────────────────────

const typography = typographyTokens.typography || {};

// ── Build CSS output ─────────────────────────────────────────────────────────

const banner = `/*  ═══════════════════════════════════════════════════════════════════════
 *  design-system.css  —  Auto-generated from design tokens
 *  Generated: ${new Date().toISOString()}
 *
 *  DO NOT EDIT MANUALLY — re-run  node convert-tokens.js  to regenerate.
 *  ═══════════════════════════════════════════════════════════════════════ */\n`;

const sections = [];

// ── 1.  :root  (light colour roles + typography) ─────────────────────────────
const rootDeclarations = [
  '\n  /* ── Colour Roles (Light) ───────────────────────────────── */',
  mapToDeclarations(lightColors),
  '',
  '  /* ── Typography ────────────────────────────────────────── */',
  mapToDeclarations(typography),
].join('\n');

sections.push(`:root {\n${rootDeclarations}\n}`);

// ── 2.  [data-theme="dark"]  (dark colour roles) ─────────────────────────────
const darkDeclarations = [
  '\n  /* ── Colour Roles (Dark) ────────────────────────────────── */',
  mapToDeclarations(darkColors),
].join('\n');

sections.push(`[data-theme="dark"] {\n${darkDeclarations}\n}`);

// ── Write to disk ────────────────────────────────────────────────────────────

const css = banner + '\n' + sections.join('\n\n') + '\n';

fs.writeFileSync(OUTPUT_FILE, css, 'utf-8');

console.log(`✅  design-system.css written successfully (${css.length} bytes)`);
console.log(`    → ${OUTPUT_FILE}`);
