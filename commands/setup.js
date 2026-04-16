const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup')
        .setDescription('Ticket panelini kurar')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Ticket Oluştur')
            .setThumbnail('https://cdn.discordapp.com/attachments/1213126915012169748/1404051567526809700/ilkver1.png')
            .setDescription('Ticket oluşturmak için aşağıdaki menüden bir kategori seçin.')
            .setColor('#000000');

        const row = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('ticket_menu')
                    .setPlaceholder('Bir kategori seçin')
                    .addOptions([
                        {
                            label: 'Başvuru',
                            description: 'Başvuru ile ilgili sorularınız için',
                            value: 'Başvuru',
                        },
                        {
                            label: 'Destek',
                            description: 'Teknik destek için',
                            value: 'Destek',
                        },
                        {
                            label: 'Diğer',
                            description: 'Diğer konular için',
                            value: 'Diğer',
                        },
                    ]),
            );

        await interaction.channel.send({ embeds: [embed], components: [row] });
        await interaction.reply({ content: 'Ticket paneli başarıyla kuruldu!', ephemeral: true });
    },
};