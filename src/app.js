import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { webhookRouter } from './routes/webhook.routes.js';
import { onboardingRouter } from './routes/onboarding.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/webhook', webhookRouter);
app.use('/api/onboarding', onboardingRouter)
app.use('/', (req, res)=> {
  res.send("Server Running");
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});