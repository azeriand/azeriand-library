
const fs = require('fs');
const path = require('path');

// Copy globals.css
const globalsSrc = path.resolve(__dirname, 'src/styles/globals.css');
const globalsDestDir = path.resolve(__dirname, 'dist/styles');
const globalsDest = path.join(globalsDestDir, 'globals.css');
if (!fs.existsSync(globalsDestDir)) {
  fs.mkdirSync(globalsDestDir, { recursive: true });
}
fs.copyFileSync(globalsSrc, globalsDest);
console.log('Copied globals.css to dist/styles/');

// Copy card.css
const cardSrc = path.resolve(__dirname, 'src/components/card/card.css');
const cardDestDir = path.resolve(__dirname, 'dist/components/card');
const cardDest = path.join(cardDestDir, 'card.css');
if (!fs.existsSync(cardDestDir)) {
  fs.mkdirSync(cardDestDir, { recursive: true });
}
fs.copyFileSync(cardSrc, cardDest);
console.log('Copied card.css to dist/components/card/');


// Copy button.css
const buttonSrc = path.resolve(__dirname, 'src/components/button/button.css');
const buttonDestDir = path.resolve(__dirname, 'dist/components/button');
const buttonDest = path.join(buttonDestDir, 'button.css');
if (!fs.existsSync(buttonDestDir)) {
  fs.mkdirSync(buttonDestDir, { recursive: true });
}
fs.copyFileSync(buttonSrc, buttonDest);
console.log('Copied button.css to dist/components/button/');
