
const connectToMongo = require('./db');
const express = require('express');
const app = express();
const port = 5000;

connectToMongo(); // Connect to MongoDB
app.use(express.json()); // Middleware to parse JSON

// Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
    console.log(`inotebook backend listening at http://localhost:${port}`);
});
