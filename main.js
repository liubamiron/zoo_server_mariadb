import express from 'express';   // Correct import for express
import dotenv from 'dotenv';     // Import dotenv to load env variables
import sequelize from "./db.js"; // Sequelize for DB connection
import cors from "cors";         // CORS middleware
import fileUpload from "express-fileupload"; // Correct fileUpload module
import router from "./routes/index.js";
import path from "path";         // Correct import for path
import { fileURLToPath } from 'url'; // To define __dirname in ES modules

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 5000;

// Define __dirname in an ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware to parse JSON requests
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));  // File upload middleware
app.use('/api', router);

const start = async () => {
    try {
        await sequelize.authenticate();  // Test the database connection
        console.log('Database connected successfully.');
        await sequelize.sync();  // Sync models with the database
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log('Failed to start server:', e);
    }
};

start();
