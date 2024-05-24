const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.login(token);

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    const content = message.content.toLowerCase();

    if (content === '!hello') {
        message.channel.send('Hello!');
    } else if (content === 'how are you') {
        message.channel.send('I\'m just a bot, but I\'m doing great! How about you?');
    } else if (content.includes('good') || content.includes('great') || content.includes('fine')) {
        message.channel.send('That\'s great to hear!');
    } else if (content === 'hi') {
        message.channel.send('Hello! How can I assist you today?');
    } else if (content === 'good morning') {
        message.channel.send('Good morning! What can I do for you today?');
    } else if (content === 'can you help me?') {
        message.channel.send('Of course! What do you need help with?');
    } else if (content === 'i need assistance') {
        message.channel.send('I\'m here to help! Please tell me more about what you need.');
    } else if (content === 'tell me something interesting'|| 'interesting fact') {
        message.channel.send('Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!');
    } else if (content === 'thanks for the help') {
        message.channel.send('You\'re welcome! If you have any other questions, feel free to ask. Have a great day!');
    } else if (content === 'bye') {
        message.channel.send('Goodbye! Have a wonderful day ahead!');
    } else if (content === 'i\'m bored') {
        message.channel.send('How about I suggest a fun activity? You could try reading a new book, watching a movie, or even going for a walk. What do you feel like doing?');
    } else if (content === 'what can you do?') {
        message.channel.send('I can answer your questions, provide information, help you with tasks, and more. Just let me know what you need!');
    }
});
