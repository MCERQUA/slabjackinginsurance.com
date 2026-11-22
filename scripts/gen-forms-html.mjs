// Print the Netlify form-detection <form> block for public/__forms.html from the spec (repo file only; NOT a Netlify write).
//   node scripts/gen-forms-html.mjs <formName> [yn=audit|all|none] [--no-fein] [--no-county] [--info a,b,c] [--no-attribution]
import { fieldsFor } from '../src/lib/quote/quoteSpec.ts'
const [formName, ...rest] = process.argv.slice(2)
if (!formName) { console.error('usage: gen-forms-html.mjs <formName> ...'); process.exit(1) }
const opt = {}
if (rest.includes('yn=audit')) opt.yn = 'audit'; if (rest.includes('yn=none')) opt.yn = false
if (rest.includes('--no-fein')) opt.fein = false; if (rest.includes('--no-county')) opt.physicalCounty = false
const i = rest.indexOf('--info'); const info = i >= 0 ? rest[i + 1].split(',').map(n => `_info_${n}`) : []
const attribution = !rest.includes('--no-attribution') ? ['traffic_source', 'landing_url'] : []
const names = [...fieldsFor(opt), ...info, ...attribution]
const area = new Set(['businessDescription', 'notes', 'locationDescription', 'lossDescription'])
console.log(`    <form name="${formName}" data-netlify="true" netlify-honeypot="bot-field" hidden>`)
console.log(`      <input type="hidden" name="form-name" value="${formName}" />\n      <input name="bot-field" />`)
for (const n of names) console.log(area.has(n) || n.startsWith('ynExplain_') ? `      <textarea name="${n}"></textarea>` : `      <input name="${n}" type="text" />`)
console.log('    </form>')
