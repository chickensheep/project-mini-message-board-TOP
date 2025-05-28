const express = require("express");
const app = express();
const path = require("path");

const messageRouter = require("./routes/messageRouter");
const messages = require("./db");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//

const port = process.env.port || 3000;

//use

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use("/", messageRouter);

//app.get().listen()

app.get("/", (req, res) => {
	res.render("index", { messages: messages });
});

app.listen(port, () => {
	console.log(`Server running at ${port}`);
});

//post

app.post("/new", (req, res) => {
	const messageUser = req.body.messageUser;
	const messageText = req.body.messageText;

	messages.push({
		id: messages.length + 1,
		text: messageText,
		user: messageUser,
		added: new Date(),
	});

	res.redirect("/");
});
