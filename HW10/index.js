// Import the 'http' module
import http from 'http';

// Create the server
const server = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    // Home page
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Home Page!');
  } else if (url === '/about') {
    // About page
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is some information about me.');
  } else {
    // 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found: The requested URL does not exist.');
  }
});

// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
