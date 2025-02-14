const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
const port = 3010;

// Enable CORS (React frontend se API calls allow karne ke liye)
app.use(cors({ origin: "https://sumitmeshram.netlify.app/" }));

// Serve static files
app.use(express.static('static'));

// Home Route - Serve HTML Page
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// API Route - Example JSON Response
app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from Express API!", status: "success" });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
