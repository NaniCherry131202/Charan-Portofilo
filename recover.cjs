const fs = require('fs');
const path = require('path');

const transcript = fs.readFileSync('C:/Users/HP/.gemini/antigravity/brain/aa786f4c-1c29-4a37-b5c1-a5e91065f3e2/.system_generated/logs/transcript_full.jsonl', 'utf8');
const lines = transcript.split('\n').filter(Boolean);

let files = {};

for (const line of lines) {
  const obj = JSON.parse(line);
  if (obj.type === 'PLANNER_RESPONSE' && obj.tool_calls) {
    for (const call of obj.tool_calls) {
      if (call.name === 'write_to_file') {
        const target = call.args.TargetFile;
        // Check for .jsx in components folder, handling both slashes
        if (target && target.includes('src') && target.includes('components') && target.endsWith('.jsx')) {
          const basename = path.basename(target);
          files[basename] = call.args.CodeContent;
        }
      } else if (call.name === 'replace_file_content') {
        const target = call.args.TargetFile;
        if (target && target.includes('src') && target.includes('components') && target.endsWith('.jsx')) {
          const basename = path.basename(target);
          if (files[basename]) {
            files[basename] = files[basename].replace(call.args.TargetContent, call.args.ReplacementContent);
          }
        }
      }
    }
  }
}

for (const [basename, content] of Object.entries(files)) {
  const targetPath = path.join('D:/Charan-Portofilo/src/components', basename);
  console.log(`Writing ${targetPath}...`);
  fs.writeFileSync(targetPath, content);
}

console.log('Recovery complete!');
