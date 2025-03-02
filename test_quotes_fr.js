const fs = require('fs');
const path = require('path');
const quotes = require('./quotes/quotes_fr.json');
const readmePath = path.join('.', 'README_fr.md');

if (!fs.existsSync(readmePath)) {
  console.error('README_fr.md not found at:', readmePath);
  process.exit(1);
}

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log('Selected quote:', randomQuote);

const readme = fs.readFileSync(readmePath, 'utf8');
console.log('README before update:', readme);

// Remplace uniquement le contenu entre les balises de commentaire
const quoteSection = `> "${randomQuote}"`;
const newReadme = readme.replace(/<!--START_SECTION:inspirational-quote-->.*?<!--END_SECTION:inspirational-quote-->/s, `<!--START_SECTION:inspirational-quote-->\n${quoteSection}\n<!--END_SECTION:inspirational-quote-->`);
console.log('README after update:', newReadme);

fs.writeFileSync(readmePath, newReadme);
