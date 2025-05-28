const { Router } = require("express");

const messages = require("../db");

const messageRouter = Router();

messageRouter.get("/new", (req, res) => {
	res.render("form");
});

messageRouter.get("/:messageid", (req, res) => {
	const messageid = req.params.messageid;
	res.render("messageid", { messages: messages, messageid: messageid });
});

module.exports = messageRouter;
