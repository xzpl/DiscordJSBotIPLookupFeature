const snekfetch = require('snekfetch');

module.exports = {
    name: 'report',
    description: 'can report the status of what you would like',
    execute(message, args) {
      snekfetch.get('https://pastebin.com/raw/yourpastebinlol').then(e => {
          let dfgiij = new discord.MessageEmbed()
          .setTimestamp()
          .setTitle(`M1r3 Cybersec`)
          .setDescription(`
          ${e.body}
          `);
      message.channel.send(dfgiij); 
      });
    }
}
