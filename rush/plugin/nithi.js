const report = async (m, gss) => {
  const reportedMessages = {};
  const devlopernumber = '911111111';
const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  const validCommands = ['menu']; 
  
  if (validCommands.includes(cmd)) {
    
  if (!text) return m.reply(`HELOO මෙම rush md ai හී seller bot ය 


ඔබට ඔබගේ bot deploy කර ගැනීමට මාසයක් පුරාවට 300LKR ක් වැනී


`සාදරන ගාස්තුවකට පුලුවන් user ව සම්බන්ද වීමා business days වල සිදු කරගන්න`

ඔබ මිලදි ගැනීම සිදු කරන්නෙනම් පමණක් සම්බන්ධ වන්න📁

ALL LOG𝙾
 PRICE 150LKR 
📁payment ez cash


`please contact business days`


> OUR CHANNEL 


https://whatsapp.com/channel/0029VaicAPo2P59qng5LjY0m


> OUR BOT GROUP 

https://chat.whatsapp.com/DS6iXMBCCgCKlc3Pvaf9rh📁

> OUR YOUTUBE 🔔
https://youtube.com/@suvitech-c3q?si=Sd9VZnZsi40HGYvS 📁


PLEASE DOT,T COPY BUTOONS 

WE ARE  GET ACTION FASTLY ❐`);

    const messageId = m.key.id;

    if (reportedMessages[messageId]) {
        return m.reply("This song has already been forwarded to the owner. Please wait for a response.");
    }

    reportedMessages[messageId] = true;

    const textt = `*| alive |*`;
    const teks1 = `\n\n*User*: @${m.sender.split("@")[0]}\n*alive*: ${text}`;
    const teks2 = `\n\n*Hi ${m.pushName}, your song has been forwarded to my Owners.*\n*Please wait...*`;

    // Send the message to the first owner in the `owner` array
    gss.sendMessage(devlopernumber + "@s.whatsapp.net", {
        text: textt + teks1,
        mentions: [m.sender],
    }, {
        quoted: m,
    });

    // don,t edite this message
    m.reply("plece type menu.");
   }
};

export default report;

