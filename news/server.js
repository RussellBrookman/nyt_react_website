const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

// configuration for body parser. This is to set up AJAX requests
// bodyParser: Returns middleware that only parses json.
// urlencoded: replades unsafe ASC2 characters with "%" followed by 2 hexadecimal digits
// extended false: I am not using nested objects
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// static: creates static access to the client/build file
app.use(express.static("client/build"));
// this is to access my routes
app.use(routes);

// native mongoose promise
mongoose.Promise = global.Promise;
// mongoDB connection
// process.env.MONGODB_URI is a way to set up mongo so that it can be deployed on heroku
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/react_news"
	{
		useMongoClient: true
	}
);

// start server connecting to API
// I do not like the global emoji. I have to ask Abe how to replace that. 
app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})