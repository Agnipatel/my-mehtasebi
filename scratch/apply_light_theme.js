const fs = require('fs');
const path = require('path');

const directories = [
  path.join(__dirname, '../app'),
  path.join(__dirname, '../components')
];

function walkSync(currentDirPath, callback) {
  fs.readdirSync(currentDirPath).forEach(function (name) {
    var filePath = path.join(currentDirPath, name);
    var stat = fs.statSync(filePath);
    if (stat.isFile() && (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js'))) {
      callback(filePath, stat);
    } else if (stat.isDirectory() && !filePath.includes('node_modules') && !filePath.includes('.next')) {
      walkSync(filePath, callback);
    }
  });
}

const replacements = [
  { regex: /bg-navy(?!\/[0-9])/g, replacement: 'bg-white' }, // bg-navy to bg-white
  { regex: /bg-navy\/[0-9]+/g, replacement: 'bg-slate-50' }, // bg-navy/40 to bg-slate-50
  { regex: /bg-slate-900/g, replacement: 'bg-white' }, // bg-slate-900 to bg-white
  { regex: /bg-slate-800\/[0-9]+/g, replacement: 'bg-slate-100' }, // bg-slate-800/20 to bg-slate-100
  { regex: /border-slate-800/g, replacement: 'border-slate-200' },
  { regex: /border-slate-700/g, replacement: 'border-slate-300' },
  { regex: /text-white/g, replacement: 'text-black' },
  { regex: /text-slate-400/g, replacement: 'text-slate-700' },
  { regex: /text-slate-300/g, replacement: 'text-slate-800' },
  { regex: /prose-invert/g, replacement: '' }
];

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    walkSync(dir, function(filePath) {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      replacements.forEach(({ regex, replacement }) => {
        content = content.replace(regex, replacement);
      });

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
      }
    });
  }
});
