const Discord = require('discord.js');
const bot = new Discord.Client();

//Start
client.on("ready", () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setActivity(`&help`);
  });
	console.log("\n ---- Bot: En ligne!");




client.login('NjQwNTkzMTM2NDQzMTk1NDA0.Xb8FzA.vR_9hwz1Z433WCcktQfxq5xL3-k');

client.on("ready", () => console.log("Je suis prêt !"));
client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.log);
console.log("\n _______________________ ");
console.log("\n ---- ");
