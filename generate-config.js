const fs = require('fs');

const config = `window.EMAILJS_CONFIG = {
  SERVICE_ID: '${process.env.EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'}',
  TEMPLATE_ID: '${process.env.EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'}',
  PUBLIC_KEY: '${process.env.EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'}'
};`;

fs.writeFileSync('config.js', config);
console.log('config.js generated from Vercel env vars');

	