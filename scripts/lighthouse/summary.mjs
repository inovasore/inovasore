// Uso: node scripts/lighthouse/summary.mjs <raw-dir>  -> prints markdown table (median of runs)
import fs from 'node:fs';
import path from 'node:path';
const dir = process.argv[2];
const groups = {};
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.json'))) {
  const key = f.replace(/-\d\.json$/, '');
  const r = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  if (!r.categories) continue;
  (groups[key] ??= []).push(r);
}
const med = (a) => { const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };
const rows = [];
for (const [key, runs] of Object.entries(groups).sort()) {
  const c = (id) => med(runs.map((r) => Math.round(r.categories[id].score * 100)));
  const a = (id) => med(runs.map((r) => r.audits[id].numericValue));
  rows.push(`| ${key} | ${c('performance')} | ${c('accessibility')} | ${c('best-practices')} | ${c('seo')} | ${(a('first-contentful-paint') / 1000).toFixed(2)} s | ${(a('largest-contentful-paint') / 1000).toFixed(2)} s | ${a('total-blocking-time').toFixed(0)} ms | ${a('cumulative-layout-shift').toFixed(3)} | ${(a('total-byte-weight') / 1024).toFixed(0)} KB | ${runs.length} |`);
}
console.log('| Página-dispositivo | Perf | A11y | BP | SEO | FCP | LCP | TBT | CLS | Peso | Runs |');
console.log('|---|---|---|---|---|---|---|---|---|---|---|');
console.log(rows.join('\n'));
// top failing audits for context
const fails = {};
for (const runs of Object.values(groups)) for (const r of runs)
  for (const [id, au] of Object.entries(r.audits))
    if (au.score !== null && au.score < 0.9 && au.scoreDisplayMode !== 'informative' && au.scoreDisplayMode !== 'notApplicable') fails[id] = au.title;
console.log('\nAuditorías con puntaje < 0.9 en alguna corrida:');
for (const [id, t] of Object.entries(fails)) console.log(`- \`${id}\`: ${t}`);
