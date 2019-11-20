const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("redy", function() {
    bot.user.setGame("&help");
    console.log("Bot connecté");
});

bot.login("NjQwNTkzMTM2NDQzMTk1NDA0.XdU70g.Hzf-dX5PRy4hZoCLr8-7GUQXMmo");
