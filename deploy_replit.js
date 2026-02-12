const https = require('https');
const fs = require('fs');

const EMAIL = 'yashiren.nair@gmail.com';
const PASSWORD = '143Stacey!';

console.log('Deploying to Replit...\n');

// For Replit, we'll create a GitHub repo first, then import to Replit
// This is more reliable than direct API

console.log('To deploy to Replit:');
console.log('\n1. Go to: https://replit.com/signup');
console.log(`2. Sign in with: ${EMAIL}`);
console.log('3. Click "Create Repl"');
console.log('4. Choose "HTML, CSS, JS"');
console.log('5. Name it: "expense-tracker-demo"');
console.log('6. I will prepare the files for you to upload\n');

// Create a zip file with all needed files
const archiver = require('archiver');
const output = fs.createWriteStream('expense-tracker-replit.zip');
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', function() {
  console.log('✅ Created: expense-tracker-replit.zip (' + archive.pointer() + ' bytes)');
  console.log('\nReady to upload to Replit!');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);
archive.file('index.html', { name: 'index.html' });
archive.file('.replit', { name: '.replit' });
archive.file('replit.nix', { name: 'replit.nix' });
archive.finalize();
