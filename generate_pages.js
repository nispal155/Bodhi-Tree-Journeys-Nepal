const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'src', 'app');

const pages = [
  { path: 'packages', title: 'Tour Packages', component: 'TourCategories' },
  { path: 'contact', title: 'Contact Us', component: 'ContactForm' },
  { path: 'gallery', title: 'Gallery', component: null },
  { path: 'pilgrimages', title: 'Pilgrimage Tours', component: 'TourCategories' },
  { path: 'treks', title: 'Himalayan Treks', component: 'TourCategories' },
  { path: 'cultural-tours', title: 'Cultural Tours', component: 'TourCategories' },
];

pages.forEach(p => {
  const dir = path.join(basePath, p.path);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  const content = `import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
${p.component ? `import ${p.component} from "@/components/${p.component}";` : ''}
${p.path === 'contact' ? `import FAQAccordion from "@/components/FAQAccordion";` : ''}
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function ${p.path.replace(/-./g, x => x[1].toUpperCase()).replace(/^./, x => x.toUpperCase())}Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans bg-gray-50">
      <Navigation />
      <div className="w-full pt-24 min-h-screen">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">${p.title}</h1>
        </div>
        ${p.component ? `<${p.component} />` : '<div className="text-center py-20 text-gray-500">Content coming soon.</div>'}
        ${p.path === 'contact' ? `<FAQAccordion />` : ''}
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
`;
  
  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
});

console.log("Pages generated successfully.");
