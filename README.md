# test-fabric-layers-react

This project is designed to test the compatibility of the `fabric-layers-react` library with React 19.1.0 and fabric-pure-browser 5.1.0.

## Setup

```bash
# Use the correct Node.js version
nvm use

# Install dependencies
npm install
```

## Testing

This project provides two ways to test the library:

### 1. Node.js Test

Run the Node.js test script to verify the library can be imported and its exports are available:

```bash
npm test
```

This will run `test.js` which dynamically imports the library after setting up the necessary global objects.

### 2. Browser Test

To test the library in a browser environment with CORS proxy support:

1. Simply open the test-v2.html file in your browser:

```bash
npm run test:browser
```

Or manually open the file in your browser.

The test page will display:
- Version information for fabric-pure-browser and fabric-layers-react
- Status messages indicating whether the libraries loaded successfully
- Results of attempting to create a CoordinatePlane and Layer

## Project Structure

- `test.js` - Node.js test script for importing and verifying the library
- `test-v2.html` - Browser test for verifying the library works in a browser environment
- `package.json` - Project configuration with dependencies

## Dependencies

- React 19.1.0
- fabric-pure-browser 5.1.0
- fabric-layers-react 2.0.0
- eventemitter2 6.4.9
