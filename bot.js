const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("591189517927710751")
setInterval(function() {
channel.send(`mohamed`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
