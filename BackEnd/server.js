const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const cors = require('cors');
const bodyParser = require("body-parser");

require("dotenv").config();
const app = express();

mongoose.connect("mongodb://localhost:27017/SalesManager", {
    useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("db connected ...");
});

// app middlewares
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get("/", (req, res) => {
	res.json({
		msg: "hi from home",
	});
});

// routes
app.use('/api',authRoutes);

const port = process.env.PORT || 8000;
app.listen(port, (error) => console.log(`server running at port ${port}`));
