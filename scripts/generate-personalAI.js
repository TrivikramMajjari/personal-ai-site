const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, '..', 'personalAI.template.html');
const outPath = path.join(__dirname, '..', 'personalAI.html');
const agentId = process.env.ELEVENLABS_AGENT_ID;

if (!agentId) {
  console.error('ELEVENLABS_AGENT_ID not set');
  process.exit(1);
}

const tpl = fs.readFileSync(templatePath, 'utf8');
const out = tpl.replace(/{{ELEVENLABS_AGENT_ID}}/g, agentId);
fs.writeFileSync(outPath, out, 'utf8');
console.log('personalAI.html generated');
