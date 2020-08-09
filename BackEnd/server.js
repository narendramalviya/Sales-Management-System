const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(7000, (err) => {
	if (err) console.log(err);
	console.log("server runnning at port 7000 ...");
});
