// app.js
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const cors = require('cors');
 

 

const app = express();

app.use(cors({
    origin: 'http://localhost:3001'
  }));
  


const PORT = process.env.PORT || 3000;

mongoose
  .connect("mongodb://localhost:27017/shabeer", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));


  app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
  });


app.use(express.json());
app.use("/users", userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
