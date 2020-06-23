const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');


client.once('ready', () => {
	console.log('Ready!');
	
	client.user.setActivity("!quote", {
		type: "STREAMING",
		//url: "https://github.com/AndyTheNerd/HaloDiscordQuotesBot/"
	});
});

client.on('message', async message => {
	if (message.content === `${config.prefix}quote`) {
		//-----------------//
		var quoteList = ["Quote 1, Quote 2, etc..."];
		var quote = Math.floor(Math.random() * quoteList.length);
		message.channel.send(quoteList[quote]);
		//----------------//
	 } else if (message.content === `${config.prefix}about`) {
	 	message.channel.send("I'm a discord bot! I was made to post quotes of dialogue from the entire Halo series. I can also be used to post quotes of really anything. To contribute to this project, check out my repo at https://github.com/AndyTheNerd/HaloDiscordQuotesBot");
	} 
});

client.login(config.token);
