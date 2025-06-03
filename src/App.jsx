import React, { useEffect, useRef, useState } from 'react';
import { CoordinatePlane, Layer } from 'fabric-layers-react';

function App() {
  const containerRef = useRef(null);
  const [plane, setPlane] = useState(null);
  const [status, setStatus] = useState([]);

  // Initialize coordinate plane when component mounts
  useEffect(() => {
    // Only create the coordinate plane if it doesn't exist yet
    if (containerRef.current && !plane) {
      try {
        // Clear any existing content in the container
        if (containerRef.current.firstChild) {
          containerRef.current.innerHTML = '';
        }
        
        // Create coordinate plane
        const coordinatePlane = new CoordinatePlane(containerRef.current, {
          gridEnabled: true,
          zoomEnabled: true,
          selectEnabled: true,
          width: 800,
          height: 600
        });
        
        setPlane(coordinatePlane);
        addStatus('CoordinatePlane created successfully!');
        
        // Add a layer
        try {
          const layer = new Layer({
            name: 'Test Layer',
            coordinatePlane: coordinatePlane
          });
          coordinatePlane.addLayer(layer);
          addStatus('Layer added successfully!');
        } catch (layerError) {
          console.error('Error adding layer:', layerError);
          addStatus(`Error adding layer: ${layerError.message}`, true);
        }
      } catch (error) {
        console.error('Error initializing fabric-layers-react:', error);
        addStatus(`Error initializing fabric-layers-react: ${error.message}`, true);
      }
    }
    
    // Clean up on unmount
    return () => {
      if (plane) {
        plane.destroy();
      }
    };
  }, []);  // Remove containerRef dependency to prevent re-renders

  // Helper function to add status messages
  const addStatus = (message, isError = false) => {
    setStatus(prev => [...prev, { message, isError, id: Date.now() }]);
  };

  return (
    <div className="container">
      <h1>Fabric Layers React Test</h1>
      <p>This demo shows the grid functionality of fabric-layers-react</p>
      
      <div className="status-container">
        {status.map(item => (
          <div 
            key={item.id} 
            className={`status ${item.isError ? 'error' : 'success'}`}
            style={{
              margin: '10px 0',
              padding: '10px',
              borderRadius: '5px',
              backgroundColor: item.isError ? '#f8d7da' : '#d4edda',
              color: item.isError ? '#721c24' : '#155724'
            }}
          >
            {item.message}
          </div>
        ))}
      </div>
      
      <div className="canvas-container" ref={containerRef}></div>
      
      <div className="controls">
        <h3>Grid Controls</h3>
        <p>Zoom with mouse wheel or pinch gestures</p>
        <p>Pan by dragging the canvas</p>
      </div>
    </div>
  );
}

export default App;
