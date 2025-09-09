const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const dataDir = path.join(projectRoot, 'src', 'data');
const translationsFile = path.join(dataDir, 'translations.json');

function readTranslations() {
  if (!fs.existsSync(translationsFile)) return {};
  try {
    return JSON.parse(fs.readFileSync(translationsFile, 'utf8'));
  } catch (e) {
    console.error('Error parsing translations.json:', e);
    return {};
  }
}

function writeTranslations(obj) {
  fs.writeFileSync(translationsFile, JSON.stringify(obj, null, 2), 'utf8');
}

function extractStringsFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const regex = /['"`]{1}([^'"`\\]+)['"`]{1}/g;
  const matches = new Set();
  let m;
  while ((m = regex.exec(content)) !== null) {
    const s = m[1].trim();
    if (s && s.length > 1) matches.add(s);
  }
  return Array.from(matches);
}

function main() {
  if (!fs.existsSync(dataDir)) {
    console.error('data directory not found:', dataDir);
    process.exit(1);
  }

  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('Units.ts') || f === 'armies.ts');
  if (!files.length) {
    console.log('No Units.ts or armies.ts files found in src/data');
    process.exit(0);
  }

  const translations = readTranslations();
  const keys = new Set(Object.keys(translations || {}));

  files.forEach(file => {
    const full = path.join(dataDir, file);
    const strs = extractStringsFromFile(full);
    strs.forEach(s => keys.add(s));
  });

  // build output with existing values preserved, new keys with empty string
  const out = {};
  Array.from(keys).sort().forEach(k => {
    out[k] = translations[k] || "";
  });

  writeTranslations(out);
  console.log('Wrote translations.json with', Object.keys(out).length, 'entries');
}

main();
