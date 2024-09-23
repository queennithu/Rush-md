const report = async (m, gss) => {
  const reportedMessages = {};
  const devlopernumber = '911111111';
const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  const validCommands = ['song']; 
  
  if (validCommands.includes(cmd)) {
    
  if (!text) return m.reply(`✨ 𝗱𝗿𝗮𝗴𝗲𝗻 𝗺𝗱✨

HEY THEY THANK FOR SUVI TECH YOUTUBE 〽️👉

https://youtube.com/@suvitech-c3q?si=Sd9VZnZsi40HGYvS
SUBCRIBE AND SHARE NOW🔔

> THE Whatsapp BOT APP
https://www.mediafire.com/file/uc0yizt82oc68hj/nithustore.apk/file   ✨✨✨✨✨✨✨`);

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
    m.reply("ඔබගේ ගීතය upload වෙමින් ඔන තවමත් suvi tech yt subcribe කර නොමැතිනම් දැන්ම කරන්න🔔💓.");
   }
};

export default report;
