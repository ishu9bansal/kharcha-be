// Basic Setup for Backend with Express and Mongoose
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
require('./config/connection');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const expenseRouter = require('./routes/expense');

const app = express();

// Middleware
app.use(morgan('combined'));
app.use(express.json());
app.use(cors({
    origin: true,
}));

// Routes
app.use('/api/expenses', expenseRouter);

// Start the Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
