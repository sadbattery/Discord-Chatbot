const {Client} = require("discord.js");
const {token} = require("./config.json");

const client = new Client({intents: []});

client.login(token);




   client.once('ready', () => {
       console.log(`Logged in as ${client.user.tag}`);
   });

   client.on('messageCreate', message => {
       if (message.content === '!hello') {
           message.channel.send('Hello!');
       }
   });