const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB Atlas connected successfully.");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Test Route
// app.get('/', (req, res) => {
//   res.send('API is working');
// });
app.get('/api/test', (req, res) => {
    res.json({ message: "Backend working!" });
  });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
