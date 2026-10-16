const fs = require('fs');
const css = fs.readFileSync('css/style.css', 'utf8');

const lines = css.split('\n');
console.log('Total lines:', lines.length);

for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  if (l.includes('/*') || l.includes('*/')) continue;
  
  const sq = (l.match(/'/g) || []).length;
  const dq = (l.match(/"/g) || []).length;
  if (sq % 2 !== 0) {
    console.log(`Unmatched single quote at line ${i + 1}: ${l}`);
  }
  if (dq % 2 !== 0) {
    console.log(`Unmatched double quote at line ${i + 1}: ${l}`);
  }
}
