const express = require("express");
// const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
// app.use(cors());
app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
//======================================================
app.get("/api", (req, res) => {
  console.log('/api hit!'); // test
  res.json({ message: "Successfully hit server!" });
});
//======================================================
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});