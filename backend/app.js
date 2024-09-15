const express = require("express");
const app = express();
const workout = require("./routes/workout");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();

//middle ware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(express.json());
app.use(cors())

//routes
app.use("/api/workout", workout);

//connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening to port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use((req, res) => {
  res.status(500).json({ message: "Invalid Route" });
});
