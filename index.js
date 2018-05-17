const discord = require("discord.js")
const client = new discord.Client()
const config = require("./config")

client.on("ready", () => {
  console.log("Beep Boop CC Bot is online")
})

client.on("message", msg => {
  if (msg.author.id == client.user.id) {
    return // ignore own messages
  } else {
    if (msg.content.startsWith(config.prefix)) {
      // main code - doing it in the same file to save time

    }
  }
})
