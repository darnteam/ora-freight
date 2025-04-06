const fs = require('fs');
const path = require('path');

// Create public/assets directory if it doesn't exist
const publicAssetsDir = path.join(__dirname, '../public/assets');
if (!fs.existsSync(publicAssetsDir)) {
  fs.mkdirSync(publicAssetsDir, { recursive: true });
}

// Copy logo from src/assets to public/assets
const srcLogoPath = path.join(__dirname, 'assets/logo.png');
const destLogoPath = path.join(publicAssetsDir, 'logo.png');

try {
  fs.copyFileSync(srcLogoPath, destLogoPath);
  console.log('Logo copied successfully to public/assets directory.');
} catch (err) {
  console.error('Error copying logo:', err);
}
