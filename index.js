import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the 'infoSite' folder
app.use(express.static(path.join(__dirname, 'infoSite')));

// Route for the homepage or index
app.get(['/', '/index', '/index.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for About page
app.get(['/about', '/about.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

// Route for Contact page
app.get(['/contact', '/contact-me', '/contact.html', '/contact-me.html'], (req, res) => {
  res.sendFile(path.join(__dirname,'contact-me.html'));
});

// Custom 404 handling for undefined routes
app.get('/404', (req, res) => {
  res.sendFile(path.join(__dirname, '404.html'));
});

// Explicitly handle undefined routes and redirect to 404 page
app.use((req, res) => {
  res.redirect('/404');
});

app.listen(8080, () => {
  console.log('Server running at http://localhost:8080');
});
