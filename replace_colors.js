const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'src');

const replacements = [
  { match: /#8245ec/g, replace: '#dc2626' },
  { match: /#a855f7/g, replace: '#f87171' },
  { match: /#120d24/g, replace: '#171717' },
  { match: /#050414/g, replace: '#000000' },
  { match: /text-purple-/g, replace: 'text-red-' },
  { match: /bg-purple-/g, replace: 'bg-red-' },
  { match: /rgba\(130,69,236,/g, replace: 'rgba(220,38,38,' },
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.js')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(directory);
files.push(path.join(__dirname, 'tailwind.config.js'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  
  replacements.forEach(r => {
    newContent = newContent.replace(r.match, r.replace);
  });
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated ' + file);
  }
});
