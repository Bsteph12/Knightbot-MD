const settings = require("../settings");
async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `*H̵̡̨̳̀͆̏͆̈́͂͗̍͑À̸̛͖̲̰͚̻̻̱͈͓̋̓̃̀̽̓͑̿W̶̧͚̟̜̝̹͉̱̃͐Ḱ̶̡̧̤͕̹̥̪̝̺̂̒̋͑̎͌̊Ş̵̖̖͕̯̠̈ Is\n\n :*
                          ❤️❥❥═══ ₳ⱠłVɆ ══>\n\n
                          >type +menu to see commands
                            `;

        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363419336864081@newsletter',
                    newsletterName: 'SEN STUDIO',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;
