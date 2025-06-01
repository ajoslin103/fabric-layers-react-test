// Test script for fabric-layers-react

console.log('NOTICE: fabric-layers-react is designed primarily for browser environments');
console.log('For proper testing, please use the browser-based test (test-v2.html)');
console.log('Simply open test-v2.html in your browser to run the test');
console.log('\nAttempting to check package version information...');

// Import package.json to check version information
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

try {
  // Get version information from package.json files
  const fabricLayersReactPkg = require('fabric-layers-react/package.json');
  const reactPkg = require('react/package.json');
  const fabricPkg = require('fabric-pure-browser/package.json');
  
  console.log('\nPackage versions:');
  console.log('- fabric-layers-react:', fabricLayersReactPkg.version);
  console.log('- react:', reactPkg.version);
  console.log('- fabric-pure-browser:', fabricPkg.version);
  
  console.log('\nIMPORTANT: The library cannot be fully tested in Node.js environment');
  console.log('because it requires browser-specific APIs (window, document, etc.)');
  console.log('Please use the browser-based test for complete testing.');
} catch (error) {
  console.error('Error checking package versions:', error);
}

// No need to run actual library imports in Node.js
// This would fail due to browser dependencies
console.log('\nTo start the browser test, run:');
console.log('npm run test:browser');
console.log('Or simply open test-v2.html in your browser');


// This is a simple Node.js test
// For a full React component test, we would need a React environment setup
// with tools like webpack, babel, etc.

// Example of how the library would be used in a React component:
/*
import React, { useEffect, useRef } from 'react';
import { CoordinatePlane, GridSystem } from 'fabric-layers-react';

function MyCanvas() {
  const containerRef = useRef(null);
  const planeRef = useRef(null);
  
  useEffect(() => {
    if (containerRef.current && !planeRef.current) {
      // Create coordinate plane
      planeRef.current = new CoordinatePlane(containerRef.current, {
        gridEnabled: true,
        zoomEnabled: true,
        selectEnabled: true
      });
    }
    
    return () => {
      // Clean up
      if (planeRef.current) {
        // Handle cleanup if needed
      }
    };
  }, []);
  
  return (
    <div ref={containerRef} style={{ width: '100%', height: '500px' }} />
  );
}
*/