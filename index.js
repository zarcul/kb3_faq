const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");



// Set the prefix
let prefix = "!";
bot.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "website") {
    message.reply("Here is the official website https://b3coin.io/");
  } else
  if (command === "block") {
    message.reply("The current block number can be found at the top of this page https://chainz.cryptoid.info/b3/");
  } else
  if (command === "wallet") {
    message.reply("The latest wallet is 3.1.1.2 and can be downloaded at https://github.com/B3-Coin/B3-CoinV2/releases/tag/v3.1.1.2");
  } else
  if (command === "kb3") {
    message.reply("kB3 is a virtual representation of B3, 1000b3 = 1kb3. Meaning that B3 and kB3 is actually the same coin.");
  } else
  if (command === "exchange") {
    message.reply("Here are the current exchanges you can trade B3 on https://www.coinexchange.io/market/KB3/BTC ");
  } else

// help message 
if (command === "help") {
    message.reply("Here are the current commands !website !block !wallet !kb3 !exchange ");
  }
  //end messages
});

bot.login(config.token);