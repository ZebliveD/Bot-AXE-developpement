const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("redy", function() {
    bot.user.setGame("&help");
    console.log("Bot connecté");
});

bot.login("NjQwNTkzMTM2NDQzMTk1NDA0.Xb8FzA.vR_9hwz1Z433WCcktQfxq5xL3-k");
