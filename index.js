const keepAlive = require("./server")
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const { Client } = require('discord.js-selfbot-v11')
const client = new Client();

client.on('ready', () => {
  client.user.setActivity("Justearn.gg/nitro", { type: "STREAMING", url: "https://www.youtube.com/watch?v=ceqgwo7U28Y" })
  console.log(`Successfully enabled Streaming Mode.`)
})

keepAlive()
client.login(TOKEN);