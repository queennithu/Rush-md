//  don,t copy













































































































































































































































































































































































































































































import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';

const { generateWAMessageFromContent, proto } = pkg;

import axios from 'axios'; // Don , t copy whatsapp bot

const handleRepoCommand = async (m, Matrix) => {

  const repoUrl = 'https://api.github.com/repos/Rush-techmd/Rush-md';

  try {

    const response = await axios.get(repoUrl);

    const repoData = response.data;

    const { full_name, name, forks_count, stargazers_count, created_at, updated_at, owner } = repoData;

    const messageText = `👋RUSH MD WA BOT:

    \n✨ *Forks:* ${forks_count}`;

    const repoMessage = generateWAMessageFromContent(m.from, {

      viewOnceMessage: {

        message: {

          messageContextInfo: {

            deviceListMetadata: {},

            deviceListMetadataVersion: 2

          },

          interactiveMessage: proto.Message.InteractiveMessage.create({

            body: proto.Message.InteractiveMessage.Body.create({

              text: messageText

            }),

            footer: proto.Message.InteractiveMessage.Footer.create({

              text: "© Powered By Rush-MD"

            }),

            header: proto.Message.InteractiveMessage.Header.create({

             ...(await prepareWAMessageMedia({ image: { url: `https://files.catbox.moe/hby798.jpg` } }, { upload: Matrix.waUploadToServer })),

              title: "",

              gifPlayback: true,

              subtitle: "",

              hasMediaAttachment: false 

            }),

            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({

              buttons: [

                {

                  name: "quick_reply",

                  buttonParamsJson: JSON.stringify({

                    display_text: "MOUNTHLY PLAN ✨",

                    id: ".rush"

                  })

                },

                {

                  name: "cta_url",

                  buttonParamsJson: JSON.stringify({

                    display_text: "Click Here To Fork💓",

                    url: `https://github.com/Rush-techmd/Rush-md/fork`

                  })

                },

                {

                  name: "cta_url",

                  buttonParamsJson: JSON.stringify({

                    display_text: "Join Our Community💓",

                    url: `https://whatsapp.com/channel/0029VaicAPo2P59qng5LjY0m`

                  })

                }

              ],

            }),

            contextInfo: {

              mentionedJid: [m.sender],

              forwardingScore: 9999,

              isForwarded: true,

            }

          }),

        },

      },

    }, {});

    await Matrix.relayMessage(repoMessage.key.remoteJid, repoMessage.message, {

      messageId: repoMessage.key.id

    });

    await m.React("👋");

  } catch (error) {

    console.error("Error:", error);

    m.reply('Error.');

    await m.React("❌");

  }

};

const searchRepo = async (m, Matrix) => {

  const prefixMatch = m.body.match(/^[\\/!#.]/);

  const prefix = prefixMatch ? prefixMatch[0] : '/';

  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

  const validCommands = ['alive'];

  if (validCommands.includes(cmd)) {

    await handleRepoCommand(m, Matrix);

  }

};

export default searchRepo;
