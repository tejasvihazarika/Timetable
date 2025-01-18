const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// Serve static files (e.g., HTML, JS, CSS)
app.use(express.static(path.join(__dirname)));

// Endpoint to fetch timetable JSON
app.get('/new/:sapID.json', (req, res) => {
    const sapID = req.params.sapID;
    const filePath = path.join(__dirname,`new`, `${sapID}.json`);

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send({ error: 'Timetable not found.' });
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
