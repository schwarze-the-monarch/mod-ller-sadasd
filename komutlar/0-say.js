const Discord = require("discord.js");
exports.run = async(client, message, args, ayar, emoji) => {
 if (!message.member.roles.cache.has("779717673381527593") && !message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).addField("Yetkin Yok ",`Bu Komutu Kullanmak için <@&779717673381527593> Rolüne Sahip Olman Lazım.`));
  
let tag = "ꁚ";
const aktif = message.guild.members.cache.filter(aktif => aktif.presence.status != "offline").size
const toplam = message.guild.memberCount
const ses = message.guild.channels.cache.filter(channel => channel.type === "voice").map(channel => channel.members.size).reduce((a, b) => a + b)
const tagli = message.guild.members.cache.filter(t => t.user.username.includes(tag)).size
const kadin = message.guild.roles.cache.get("806266138089488384").members.size
const erkek = message.guild.roles.cache.get("806269638010339339").members.size
const boost_sayisi = message.guild.premiumSubscriptionCount

const embed = new Discord.MessageEmbed()

.setColor('#fffa00')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
.setDescription(`
<a:655472468160544798:740220446368071732> **ꁚ SANDER SERVER İNFO** <a:655472468160544798:740220446368071732>
**<a:emoji_66:753663137764606092> Toplam Üye Sayımız = \`${toplam}\`
<a:uppembeates:777605771549868122> Aktif Üye Sayımız = \`${aktif}\` 
<a:737789093181784094:740220506900267069> Erkek Üye Sayımız = \`${erkek}\` 
<a:732273607698415747:740220501976416287> Kadın Üye Sayımız = \`${kadin}\` 
<a:tatlicivciv:777619789295124481> Tagımızı Takan Üye Sayımız = \`${tagli}\`
<a:dp_g1:777619816084144158> Sesteki Üye Sayımız = \`${ses}\`
<a:sander_boost:811320361177710600> Boost Sayımız = \`${boost_sayisi}\`**`)
message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say"
};