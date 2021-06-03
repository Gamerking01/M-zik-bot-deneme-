const dbd = require("dbd.js")
const bot = new dbd.Bot({
token: ayarlar.token, 
prefix: "!" 
})
bot.onMessage()

bot.command({
name: "çal",
aliases: ['p','play'],
code: `$playSong[$message]` 
})
// Komutları kendiniz zenginleştirebilirziniz
bot.command({
name: "durdur",
aliases: ['ps','pause'],
code: `$stopSong` 
})
bot.command({
name: "atla",
aliases: ['s','skip'],
code: `$skipSong` 
})
