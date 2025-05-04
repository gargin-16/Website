const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static('public'));
app.use(express.json());

// Example API route
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(name, email, message); // Save to DB later
    res.send('Message received');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
