const TelegramBot = require("node-telegram-bot-api");
const { sayHi } = require("./regex");

const token = "7083581831:AAFMzhHcbyetF4aTcm6x95zES89xlH5vZ24";
const antoniDevBot = new TelegramBot(token, {
  polling: true,
});

// antoniDevBot.on("message", (message, metadata) => {
//   const fromId = message.from.id;
//   antoniDevBot.sendMessage(fromId, "hahaha");
// });

antoniDevBot.onText(sayHi, (cb) => {
  const fromId = cb.from.id;
  antoniDevBot.sendMessage(fromId, "hahaha");
});