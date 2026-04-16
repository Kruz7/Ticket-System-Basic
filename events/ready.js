const { ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`${client.user.tag} olarak giriş yapıldı!`);
        client.user.setPresence({
            activities: [{ name: 'Neverours', type: ActivityType.Streaming, url: 'https://discord.gg/invite/neverours' }],
            status: 'online',
        });
    },
};