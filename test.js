// Test script for fabric-layers-react

// Import dependencies first
import fabricPureBrowser from 'fabric-pure-browser';
import eventEmitter2Pkg from 'eventemitter2';
const { EventEmitter2 } = eventEmitter2Pkg;

// Set up globals for libraries that expect them
global.fabric = fabricPureBrowser.fabric;
global.EventEmitter2 = EventEmitter2;

// Make fabric available in the global scope for the library
if (typeof window === 'undefined') {
  // Node.js environment
  global.fabric = fabricPureBrowser.fabric;
} else {
  // Browser environment
  window.fabric = fabricPureBrowser.fabric;
}

// Import the library
import * as FabricLayersReact from 'fabric-layers-react';

// Log the version to verify the package is loaded correctly
console.log('fabric-layers-react version:', FabricLayersReact.version);

// Log available exports to verify the package structure
console.log('Available exports:', Object.keys(FabricLayersReact));

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