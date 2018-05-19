const discord = require("discord.js")
const client = new discord.Client()
const config = require("./config")

const ccs = require("./ccs")

client.on("ready", () => {
  console.log("Beep Boop CC Bot is online")
})

client.on("message", msg => {
  if (msg.author.id == client.user.id) {
    return // ignore own messages
  } else {
    if (msg.content.startsWith(config.prefix)) {
      // main code - doing it in the same file to save time
      let full_text = msg.content
      let text = full_text.substring(config.prefix.length) // remove prefix
      let split = text.split(" ") // split into words
      let cmd_name = split[0] // first word
      let args = split.slice(1) // rest of the words
      if (typeof ccs.commands[cmd_name] == "function") {
        ccs.commands[cmd_name](msg, client, args)
      } else {
        msg.reply("invalid command!")
      }
    }
  }
})

client.login(config.token)
