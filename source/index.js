const discord = require('discord.js');
const client = new discord.Client();
const prefix = '>';
const fs = require('fs');
client.commands = new discord.Collection();
const { token } = require('./data.json');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

var Welcome = (function() { /*
░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗
░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝
░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░
░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░
░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████╗
░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚══════╝
*/}).toString().split('\n').slice(1, -1).join('\n');


client.on("ready", () => {
    console.log(`${Welcome}\n`);
        console.log(`        ${client.user.tag} IS NOW ONLINE`);
            client.user.setActivity('https://github.com/4b3j ah', {
            type: 'PLAYING'
    })

    console.log(" ");
});


client.on('message', message => {
    if(message.author.bot) return;
    // const CheckIf = message.guild.me.roles.cache.find(role => role.name === "Bac");
    // if (!CheckIf) return;
    client.emit('checkMessage', message);
    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
	  const command = args.shift().toLowerCase();

    // Ignore any channels
    // if(message.channel.id === '') return;
    if (message.channel.type === 'dm') return message.channel.send(`Please Dont Message Me, Ok? ${message.author}`);
    // If put is pinged replace after @! with bot id
    // if(message.content.startsWith("<@!>")) return message.channel.send("My prefix is >");
    if(!message.content.startsWith(prefix)) return;

    if(message.content.length >= 200) {
        if(message.member.hasPermission('ADMINISTRATOR')) return; 
        message.author.send('Your message ');
        message.author.send(message);
        message.author.send('is too long please shortner it');
        message.channel.send('Your message is too long, please shortern it');
        message.delete();
        console.log(`${message.author} tried sending a message over 200 characters`)
    }

    try {
        if(command === "help"){
            client.commands.get(command).execute(message, args);
        } else if(command === "changelog" ) {
            client.commands.get(command).execute(message, args);
        } else if(command === "mute" ) {
            client.commands.get(command).execute(message, args);
        } else if(command === "iplookup" ) {
            client.commands.get(command).execute(message, args);
        } else if(command === "kick" ) {
            client.commands.get(command).execute(message, args);
        } else if(command === "ban" ) {
            client.commands.get(command).execute(message, args);
        } else if(command === "unmute" ) {
            client.commands.get(command).execute(message, args);
        } else if(command === "time" ) {
            client.commands.get(command).execute(message, args);
        } else if(command === "nuke" ) {
            client.commands.get(command).execute(message, args);
        } else if(command === "openticket" ) {
            client.commands.get(command).execute(message, args);
        } else {
            message.channel.send("Invalid command was asked")
        }
    } catch (err) {
        console.log(err);
    }
});


client.login(token);
