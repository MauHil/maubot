const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NzQwNTkyNzk0MTQ1NTIxNzA0.XyrQyQ.dJG9333UfytZdeejuV_ol9P1eHI).BO;
