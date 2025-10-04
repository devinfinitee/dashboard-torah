/**
 * Auto-install script that runs before dev
 * Checks for node_modules and package-lock.json
 * Runs npm install if needed
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.resolve(__dirname, '..');
const nodeModulesPath = path.join(projectRoot, 'node_modules');
const packageLockPath = path.join(projectRoot, 'package-lock.json');

console.log('🔍 Checking if dependencies need to be installed...\n');

// Check if node_modules exists and has content
const nodeModulesExists = fs.existsSync(nodeModulesPath);
const hasNodeModules = nodeModulesExists && fs.readdirSync(nodeModulesPath).length > 0;

// Check if package-lock.json exists
const hasPackageLock = fs.existsSync(packageLockPath);

if (!hasNodeModules || !hasPackageLock) {
  console.log('📦 Dependencies not found. Running npm install...\n');
  
  try {
    // Run npm install with proper error handling
    execSync('npm install', { 
      cwd: projectRoot,
      stdio: 'inherit',
      shell: true
    });
    
    console.log('\n✅ Dependencies installed successfully!\n');
  } catch (error) {
    console.error('\n❌ npm install failed. Please run npm install manually.\n');
    process.exit(1);
  }
} else {
  console.log('✅ Dependencies already installed. Skipping npm install.\n');
}
