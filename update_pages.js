const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'src', 'app');

const updates = [
  { path: 'gallery', component: 'ImageGallery' },
  { path: 'pilgrimages', prop: 'filterCategory="Pilgrimage"' },
  { path: 'treks', prop: 'filterCategory="Trek"' },
  { path: 'cultural-tours', prop: 'filterCategory="Cultural"' },
];

updates.forEach(u => {
  const file = path.join(basePath, u.path, 'page.tsx');
  let content = fs.readFileSync(file, 'utf-8');
  
  if (u.component) {
    content = content.replace(/import null.*/, `import ${u.component} from "@/components/${u.component}";`);
    content = content.replace(/<div className="text-center.*/, `<${u.component} />`);
    fs.writeFileSync(file, content);
  } else if (u.prop) {
    content = content.replace(/<TourCategories \/>/, `<TourCategories ${u.prop} />`);
    fs.writeFileSync(file, content);
  }
});

console.log("Pages updated.");
