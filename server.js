const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Server info
const SERVER = {
  ip: '51.83.49.125',
  port: 12440,
  name: 'Free City Mobile',
  version: '1.0.0'
};

// News endpoint
app.get('/api/news', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Welcome to Free City Mobile!',
      content: 'Server is now live! Join us and have fun!',
      date: '2026-04-18'
    }
  ]);
});

// Server info endpoint
app.get('/api/server', (req, res) => {
  res.json(SERVER);
});

// Distribution endpoint
app.get('/api/distribution', (req, res) => {
  res.json({
    version: '1.0',
    url: 'https://www.mediafire.com/file/fwj2u1jgapqzwj9/',
    serverIp: '51.83.49.125',
    serverPort: 12440
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
