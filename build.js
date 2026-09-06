// Build script: generates HTML files from partials + project data
const fs = require('fs');
const path = require('path');

const partialsDir = path.join(__dirname, 'partials');
const outputDir = path.join(__dirname);

// Read partials
const headerPartial = fs.readFileSync(path.join(partialsDir, 'header.html'), 'utf-8');
const footerPartial = fs.readFileSync(path.join(partialsDir, 'footer.html'), 'utf-8');
const scriptsPartial = fs.readFileSync(path.join(partialsDir, 'scripts.html'), 'utf-8');

// Project data indexed by numeric ID
const projects = [
  {
    id: 1,
    title: 'Responsive Landing Page',
    intro: 'A clean, mobile-first business landing page designed in Figma and converted to pixel-perfect, production-ready code with Tailwind CSS and React.',
    image: './assets/project-1-screenshot.png',
  },
  {
    id: 2,
    title: 'Full-Stack CRUD App',
    intro: 'A task manager with user registration, JWT authentication, and full CRUD operations built on MongoDB and Express.',
    image: './assets/project-2-screenshot.png',
  },
  {
    id: 3,
    title: 'Firebase Realtime App',
    intro: 'A real-time task list using Firebase Authentication and Firestore with no backend server required.',
    image: './assets/project-3-screenshot.png',
  },
];

// Generate index.html
const generateIndexHTML = () => {
  const htmlPath = path.join(outputDir, 'index.html');
  let html = fs.readFileSync(htmlPath, 'utf-8');

  // Inject partials at placeholder positions
  html = html.replace('<!-- INCLUDE_HEADER -->', headerPartial);
  html = html.replace('<!-- INCLUDE_FOOTER -->', footerPartial);
  html = html.replace('<!-- INCLUDE_SCRIPTS -->', scriptsPartial);

  // Ensure EmailJS config reference exists
  if (!html.includes('EMAILJS_CONFIG') && !html.includes('window.EMAILJS_CONFIG')) {
    const emailjsScript = '<script>window.EMAILJS_CONFIG = { SERVICE_ID: "test_service", TEMPLATE_ID: "test_template", PUBLIC_KEY: "test_key" }</script>';
    html = html.replace('<script src="./config.js"></script>', `
      <script src="./config.js"></script>
      ${emailjsScript}
    `);
  }

  fs.writeFileSync(htmlPath, html, 'utf-8');
};

// Generate project HTML files
const generateProjectHTML = (project) => {
  const htmlPath = path.join(outputDir, `project-${project.id}.html`);
  if (!fs.existsSync(htmlPath)) {
    console.error(`❌ File not found: ${htmlPath}`);
    return;
  }
  let html = fs.readFileSync(htmlPath, 'utf-8');

  // Inject partials at placeholder positions
  html = html.replace('<!-- INCLUDE_HEADER -->', headerPartial);
  html = html.replace('<!-- INCLUDE_FOOTER -->', footerPartial);
  html = html.replace('<!-- INCLUDE_SCRIPTS -->', scriptsPartial);

  // Update project title in <title> and og:title
  html = html.replace(/<title>[^<]+<\/title>/, `<title>Case Study of ${project.title}</title>`);
  html = html.replace(
    /<meta property="og:title" content="[^"]+"\/>/,
    `<meta property="og:title" content="Case Study of ${project.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]+"\/>/,
    `<meta property="og:description" content="Case study of the ${project.title.toLowerCase()} by Mubasher Ahmed." />`
  );

  fs.writeFileSync(htmlPath, html, 'utf-8');
};

// Generate all files
try {
  generateIndexHTML();
  projects.forEach(generateProjectHTML);
  console.log('✅ Build completed successfully');
  console.log('📄 Generated: index.html, project-1.html, project-2.html, project-3.html');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}