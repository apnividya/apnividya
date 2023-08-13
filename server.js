const express = require("express");
const app = express();

const dbConfig = require("./db");
const roomsRoute = require("./routes/roomsRoute");

app.use('/api/rooms', roomsRoute);
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(port, () => console.log(`Server running on`));