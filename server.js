const express = require("express");
const cors = require("cors");
const app = express();

const dbConfig = require("./db");
const roomsRoute = require("./routes/roomsRoute");

app.use(cors({
  origin: ["https://site.apnividya.in", "https://apnividya.in", "https://www.apnividya.in", "https://in.apnividya.in"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true
}));

app.use('/api/rooms', roomsRoute);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
