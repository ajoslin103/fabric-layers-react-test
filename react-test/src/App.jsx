import { useState, useEffect, useRef } from 'react';
import './App.css';

// Import fabric-pure-browser and set it up as a global for fabric-layers-react
import fabricPureBrowser from 'fabric-pure-browser';
import { EventEmitter2 } from 'eventemitter2';

// Set up globals that fabric-layers-react expects
window.fabric = fabricPureBrowser.fabric;
window.EventEmitter2 = EventEmitter2;

// Import fabric-layers-react components
// We need to import the UMD version directly since the ESM version has compatibility issues
const FabricLayersReact = window.FabricLayersReact || {};
const { CoordinatePlane, Layer } = FabricLayersReact;

function App() {
  const [status, setStatus] = useState('Initializing...');
  const [error, setError] = useState(null);
  const canvasContainerRef = useRef(null);
  const coordinatePlaneRef = useRef(null);

  useEffect(() => {
    // Display version information
    const reactVersion = import.meta.env.VITE_REACT_VERSION || '19.1.0';
    console.log('React version:', reactVersion);
    console.log('fabric-pure-browser version:', fabricPureBrowser.version);
    
    try {
      if (canvasContainerRef.current && !coordinatePlaneRef.current) {
        // Create coordinate plane
        coordinatePlaneRef.current = new CoordinatePlane(canvasContainerRef.current, {
          gridEnabled: true,
          zoomEnabled: true,
          selectEnabled: true
        });
        
        setStatus('CoordinatePlane created successfully!');
        console.log('CoordinatePlane created successfully:', coordinatePlaneRef.current);
        
        // Try to add a layer to test functionality
        try {
          const layer = new Layer({
            name: 'Test Layer',
            coordinatePlane: coordinatePlaneRef.current
          });
          coordinatePlaneRef.current.addLayer(layer);
          setStatus(prev => prev + ' Layer added successfully!');
        } catch (layerError) {
          console.error('Error adding layer:', layerError);
          setError(`Error adding layer: ${layerError.message}`);
        }
      }
    } catch (error) {
      console.error('Error initializing fabric-layers-react:', error);
      setError(`Error initializing fabric-layers-react: ${error.message}`);
    }
    
    return () => {
      // Clean up
      if (coordinatePlaneRef.current) {
        // Handle cleanup if needed
        coordinatePlaneRef.current = null;
      }
    };
  }, []);

  return (
    <div className="app">
      <h1>fabric-layers-react Test with React 19 and fabric-pure-browser 5.1.0</h1>
      
      <div className="version-info">
        <p><strong>React version:</strong> {import.meta.env.VITE_REACT_VERSION || '19.1.0'}</p>
        <p><strong>fabric-pure-browser version:</strong> {fabricPureBrowser.version}</p>
        <p><strong>fabric-layers-react version:</strong> {window.FabricLayersReact?.version || 'Unknown'}</p>
      </div>
      
      <div className="status-container">
        <div className={`status ${error ? 'error' : 'success'}`}>
          {error || status}
        </div>
      </div>
      
      <div 
        ref={canvasContainerRef} 
        className="canvas-container" 
        style={{ width: '800px', height: '600px', border: '1px solid #ccc', margin: '20px auto' }}
      />
    </div>
  );
}

export default App;
