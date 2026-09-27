const fs = require("fs");
module.exports.config = {
  name: "SHAAN",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐒𝐇𝐀𝐀𝐍 𝐊𝐇𝐀𝐍", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Imran khan") ||
     react.includes("jiju") || react.includes("khan") || react.includes("Khan") ||
react.includes("khaan") ||
react.includes("KHAN") ||     
react.includes("@Zakhmi Sayar")) {
    var msg = {
        body: `${name} 𝐘𝐀𝐑 𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐊𝐎 𝐌𝐄𝐍𝐓𝐈𝐎𝐍 𝐍𝐀 𝐊𝐀𝐑𝐎 𝐌𝐔𝐉𝐇𝐄 𝐒𝐇𝐀𝐑𝐀𝐌 𝐀𝐀𝐓𝐈 𝐇𝐀𝐈🙈🙈🙈`,attachment: fs.createReadStream(__dirname + `/noprefix/wa_image_2836424469127221083.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }