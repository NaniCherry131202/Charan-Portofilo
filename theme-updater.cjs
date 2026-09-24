const fs = require('fs');

const files = [
  'D:/Charan-Portofilo/src/components/Nav.jsx',
  'D:/Charan-Portofilo/src/components/Experience.jsx',
  'D:/Charan-Portofilo/src/components/Projects.jsx',
  'D:/Charan-Portofilo/src/components/Testimonials.jsx',
  'D:/Charan-Portofilo/src/components/Contact.jsx',
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/sky-400/g, 'emerald-400');
  content = content.replace(/sky-500/g, 'emerald-500');
  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
