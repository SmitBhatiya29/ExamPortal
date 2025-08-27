require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/errorHandler');
const quizResultRoutes = require('./routes/quizResultRoutes');
const teacherResponseRoutes = require('./routes/teacherResponseRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');
const quizRoutes = require('./routes/quizRoutes');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// MongoDB URI fallback (IPv4 enforced)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/quiz-app';

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// CORS setup
app.use(cors({
  origin: 'https://examportal-3-tf7a.onrender.com',
  credentials: true
}));

// API Routes
app.use('/api/teachers', teacherRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/quiz-results', quizResultRoutes);
app.use('/api/teacher-responses', teacherResponseRoutes);

// Error handling middleware
app.use(errorHandler);

// Serve frontend (Vite build)
app.use(express.static(path.join(__dirname, '..', 'Frontend', 'dist')));

// Catch-all for SPA routing (any non-API route -> index.html)
// Use a regex to avoid path-to-regexp string parsing issues
app.get(/^(?!\/api\/).*/, (_, res) => {
  res.sendFile(path.join(__dirname, '..', 'Frontend', 'dist', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
