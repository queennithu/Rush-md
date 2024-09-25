// rush md wa bot don ,t copy


































































































import config from '../../config.cjs';

// rush md wa bot
const anticallCommand = async (m, Matrix) => {
  const botNumber = await Matrix.decodeJid(Matrix.user.id);
  const isCreator = [botNumber, config.OWNER_NUMBER + '@s.whatsapp.net'].includes(m.sender);
  const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim().toLowerCase();
  
  const validCommands = ['autosview'];

 if (validCommands.includes(cmd)){
   if (!isCreator) return m.reply("*THIS IS AN OWNER COMMAND*");
    let responseMessage;

    if (text === 'on') {
      config.AUTO_STATUS_SEEN = true;
      responseMessage = "AUTO STATUS SEEN has been Active.";
    } else if (text === 'off') {
      config.AUTO_STATUS_SEEN = false;
      responseMessage = "AUTO STATUS SEEN has been disabled.";
    } else {
      responseMessage = `Usage:\n- *${prefix + cmd} ON:* Enable AUTO STATUS VIEW\n- *${prefix + cmd} off:* Disable AUTO STATUS SEEN`;
    }

    try {
      await Matrix.sendMessage(m.from, { text: responseMessage }, { quoted: m });
    } catch (error) {
      console.error("Error:", error);
      await Matrix.sendMessage(m.from, { text: 'Error.' }, { quoted: m });
    }
  }
};

export default anticallCommand;
