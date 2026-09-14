const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todoRoutes');
const { use } = require('react');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/todos', todoRoutes);
app.get('/', (req, res) => {
  res.send(' Todo API is running!');
});
app.use("/api/todos" , todoRoutes);

