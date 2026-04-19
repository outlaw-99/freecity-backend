const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/news', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Welcome to Free City Mobile!',
      content: 'Server is now live! Join us!',
      date: '2026-04-18'
    }
  ]);
});

app.get('/api/server', (req, res) => {
  res.json({
    ip: '51.83.49.125',
    port: 12440,
    name: 'Free City Mobile',
    players: 0,
    maxPlayers: 100,
  });
});

app.get('/api/distribution', (req, res) => {
  res.json({
    cdnLauncher: 'https://freecity-backend.onrender.com',
    cdnCache: 'https://www.mediafire.com/file/fwj2u1jgapqzwj9/',
    cacheMode: [],
    rss: 'https://freecity-backend.onrender.com/api/news',
    versionHash: '1.0.0',
    packageName: 'com.freecity.mobile',
    projectName: 'Free City Mobile',
    cache: [],
    servers: [
      {
        id: 1,
        show: true,
        version: '1.0',
        icon: '',
        events: [],
        slot: 100,
        bonus: false,
        name: 'Free City Mobile',
        description: 'Welcome to Free City!',
        address: '51.83.49.125:12440',
        sampVersion: '0.3.7'
      }
    ],
    launcher: {
      appVersion: '0.0.1',
      name: 'Free City Mobile',
      hash: '',
      bytes: 0,
      size: '0'
    },
    filesContinue: []
  });
});

app.get('/api/donate', (req, res) => {
  res.json({ url: 'https://freecity-backend.onrender.com' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));    url: 'https://www.mediafire.com/file/fwj2u1jgapqzwj9/',
    serverIp: '51.83.49.125',
    serverPort: 12440
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
