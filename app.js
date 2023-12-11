const express = require("express");
const app = express();
const port = 3005;


const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/spacex-api");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const getLaunches = require("./routes/launchesRoute");
app.use("/flight", getLaunches);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
