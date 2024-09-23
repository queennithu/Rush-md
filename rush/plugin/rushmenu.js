const report = async (m, gss) => {
  const reportedMessages = {};
  const devlopernumber = '94762498519';
const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  const validCommands = ['rushmenu']; 
  
  if (validCommands.includes(cmd)) {
    
  if (!text) return m.reply(`RUSH MD WA BOT
❐❐❐❐❐❐❐❐❐❐❐
𝚂𝚄𝚅𝙸 𝚃𝙴𝙲𝙷 𝚈𝙾𝚄𝚃𝚄𝙱𝙴🔔


    SUBCRIBE NOW🔔

🔮OWNER ❐RUSH

 🔮YOUTUBE ❐SUVI
  TECH YOUTUBE CHANNEL🔔

 🔮WA BOT MENU

😀 𝚘𝚠𝚗𝚎𝚛 𝚖𝚎𝚗𝚞


🔮𝚋𝚘𝚝 𝚖𝚘𝚍𝚎




🔮𝚊𝚞𝚝𝚘𝚜𝚝𝚊𝚝𝚞𝚜



🔮𝚊𝚞𝚝𝚘𝚛𝚎𝚊𝚌𝚘𝚛𝚍



🔮𝚊𝚞𝚝𝚘𝚝𝚢𝚙𝚎`);

    const messageId = m.key.id;

    if (reportedMessages[messageId]) {
        return m.reply("This alive has already been forwarded to the owner. Please wait for a response.");
    }

    reportedMessages[messageId] = true;

    const textt = `*| alive |*`;
    const teks1 = `\n\n*User*: @${m.sender.split("@")[0]}\n*alive*: ${text}`;
    const teks2 = `\n\n*Hi ${m.pushName}, your alive has been forwarded to my Owners.*\n*Please wait...*`;

    // Send the message to the first owner in the `owner` array
    gss.sendMessage(devlopernumber + "@s.whatsapp.net", {
        text: textt + teks1,
        mentions: [m.sender],
    }, {
        quoted: m,
    });

    // Send a reply to the user
    m.reply("dragen md acive.");
   }
};

export default report;
