const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Fetch contests from Clist API
app.get('/api/contests', async (req, res) => {
    try {
      const { data } = await axios.get('https://clist.by/api/v2/contest/', {
        params: {
          username: process.env.CLIST_USERNAME,
          api_key: process.env.CLIST_API_KEY,
          format: 'json',
          order_by: 'start',
          start__gt: new Date().toISOString().split('T')[0], // Fetch contests starting today or later
          limit: 100,
        },
      });
      res.json(data.objects);
    } catch (error) {
      console.error('Error fetching contests:', error);
      res.status(500).json({ message: 'Failed to fetch contests' });
    }
  });
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
