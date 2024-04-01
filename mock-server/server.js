// Import necessary modules
const express = require('express'); // Import Express.js module
const cors = require('cors'); // Import CORS module for handling cross-origin requests
const bodyParser = require('body-parser'); // Import body-parser module for parsing incoming request bodies

// Create an Express application
const app = express();

// Define the port on which the server will listen
const port = 8080;

// Configure CORS to allow requests from any origin with credentials
app.use(cors({
    origin: true,
    credentials: true
}));

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// Handle POST requests to '/getBid' endpoint
app.post('/getBid', (req, res) => {

    // Respond with a JSON object representing a bid
    res.json({
        bidId: "1",
        cpm: 0.5, // Example cost per mille (CPM)
        width: 300,
        height: 250,
        creativeId: "1",
        ad: `
            <div style="width: 300px; height: 250px; background: #eee; border: 1px solid #333; display: flex; align-items: center; justify-content: center;">
                <div>
                    <h4>Ad Demo</h4>
                    <p>This is a demo advertisement block</p>
                </div>
            </div>
        ` // Example ad content (HTML)
    });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Mock server listening on http://localhost:${port}`);
});