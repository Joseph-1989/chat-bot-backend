const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5001;

app.use(
  cors({
    origin: "https://rocketai-chat-bot.vercel.app", // Your Vercel frontend URL
    methods: "GET,POST",
  })
);
app.use(express.json());

let chatMessages = [];

app.post("/message", (req, res) => {
  const { message } = req.body;

  chatMessages.push({ sender: "user", text: message });

  const responseMessage = message + " + Hello world!";
  chatMessages.push({ sender: "bot", text: responseMessage });

  res.json({ reply: responseMessage, messages: chatMessages });
});

app.get("/", (req, res) => {
  res.send("Welcome to the chat bot server");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
