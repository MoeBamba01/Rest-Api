require('dotenv').config(); // Loading Environment Variables
const app = require('./src/app');
const connectDatabase = require('./src/config/database');

const port = 3000;

// Connect to database
connectDatabase();

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});