const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = '-';

client.once('ready', () => {
    console.log('We have infiltrated the server!');
    client.user.setActivity({ type: "WATCHING", name: `You in your sleep` });
});


client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if(command === 'ping'){
        message.channel.send('Pong!');
    } else if (command == 'hello'){
        message.channel.send('HEY!');
    }
});

client.login('ODY1OTU0NjM2MTU3NjgxNjg1.YPLhGQ.AEa1vrat5Q87cvJ-9YryDkWWWCk')