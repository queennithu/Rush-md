const report = async (m, gss) => {
  const reportedMessages = {};
  const devlopernumber = '94762498519';
const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  const validCommands = ['menu']; 
  
  if (validCommands.includes(cmd)) {
    
  if (!text) return m.reply(`You can deploy our bot 

300LKR MOUNTHLY   

අවශයතාව තිබෙන ඔබ පමනක් contact කරන්න


our youtube support  🔔
https://youtube.com/@suvitech-c3q?si=Sd9VZnZsi40HGYvS



we are support  free bot group 
you can support our youtube 🔔


our channel 
https://whatsapp.com/channel/0029VaicAPo2P59qng5LjY0m

our group 

https://chat.whatsapp.com/DS6iXMBCCgCKlc3Pvaf9rh📁`);

    const messageId = m.key.id;

    if (reportedMessages[messageId]) {
        return m.reply("This report has already been forwarded to the owner. Please wait for a response.");
    }

    reportedMessages[messageId] = true;

    const textt = `*| REQUEST/BUG |*`;
    const teks1 = `\n\n*User*: @${m.sender.split("@")[0]}\n*Request/Bug*: ${text}`;
    const teks2 = `\n\n*Hi ${m.pushName}, your request has been forwarded to my Owners.*\n*Please wait...*`;

    // Send the message to the first owner in the `owner` array
    gss.sendMessage(devlopernumber + "@s.whatsapp.net", {
        text: textt + teks1,
        mentions: [m.sender],
    }, {
        quoted: m,
    });

    // Send a reply to the user
    m.reply("OBAGE ගැටලුව අපට ලැබුනා අප පරික්ශාකරාවි ඇතැම් විට");
   }
};

export default report;
