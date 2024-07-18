const express = require('express');
const cors = require('cors');  // Add this line
const app = express();
const port = 3000;

// Middleware to enable CORS
app.use(cors());  // Add this line
// Middleware to parse JSON bodies
app.use(express.json());

// Initial fake data
let data = {
    pH: 0,
    temperature: 0,
    turbidity: 0
};

// Endpoint to get the current stats
app.get('/api/stats', (req, res) => {
    res.json(data);
});

// Endpoint to update the temperature
app.post('/api/update-temperature', (req, res) => {
    const { temperature } = req.body;
    if (temperature !== undefined) {
        data.temperature = temperature;
        res.json({ message: 'Temperature updated successfully', temperature: data.temperature });
    } else {
        res.status(400).json({ error: 'Temperature value is required' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
