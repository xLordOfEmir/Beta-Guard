const Discord = require("discord.js");
const config = require("../Settings/Config.json");
const panel = require("../Settings/Panel.json");
const moment = require("moment");
module.exports = async(oldChannel, newChannel) => {

    if (!panel.ChannelProtections) return;
    if (newChannel.guild.id !== config.Bot.server) return;
    const entry = await newChannel.guild.fetchAuditLogs({ type: "CHANNEL_UPDATE" }).then(logs => logs.entries.first());
    const id = entry.executor.id;
    let user = newChannel.guild.members.cache.get(id)
    if(id === config.Bot.owner) return;
    if (entry.executor.id === client.user.id) return;
    if(id === newChannel.guild.owner.id) return;
    let safezone = config.Guard.safezone || [];
    if(safezone.some(a => user.id === a)) return;
    let safebots = config.Guard.safebots || [];
    if(safebots.some(a => user.id === a)) return;

        if(oldChannel.rawPosition !== newChannel.rawPosition){
          await newChannel.setPosition(oldChannel.rawPosition)
    }
    
    if (newChannel.type !== "category" && newChannel.parentID !== oldChannel.parentID) {
       newChannel.setParent(oldChannel.parentID); 
    }
    
    if (newChannel.type === "category") {
    newChannel.edit({ name: oldChannel.name });
    }
    
    if (newChannel.type === "text") {
    newChannel.edit({ name: oldChannel.name, topic: oldChannel.topic, nsfw: oldChannel.nsfw, rateLimitPerUser: oldChannel.rateLimitPerUser });
    }
    
    if (newChannel.type === "voice") {
    newChannel.edit({ name: oldChannel.name, bitrate: oldChannel.bitrate, userLimit: oldChannel.userLimit });
    }
    
        if(oldChannel.parentID !== oldChannel.parentID){
          await newChannel.setParent(oldChannel.parentID)
    }
    
    if(oldChannel.name !== newChannel.name){
      await newChannel.setName(oldChannel.name)
    }

      user.roles.cache.has(config.Guard.booster) ? user.roles.set([config.Guard.booster, config.Guard.jail]) : user.roles.set([config.Guard.jail]).catch();

      let betaSaat = moment(Date.now()).format("HH:mm");
      let betaG??n = moment(Date.now()).format("DD");
      let betaAy = moment(Date.now()).format("MM");
      let betaY??l = moment(Date.now()).format("YYYY");
      let betaWile = `${betaG??n} ${betaAy.replace("01", "Ocak").replace("02", "??ubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "May??s").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "A??ustos").replace("09", "Eyl??l").replace("10", "Ekim").replace("11", "Kas??m").replace("12", "Aral??k")} ${betaY??l}`;

      const beta = new Discord.MessageEmbed().setAuthor(user.user.tag, user.user.avatarURL()).setFooter(oldChannel.guild.name, oldChannel.guild.iconURL()).setColor("BLUE")

  await oldChannel.guild.channels.cache.get(config.Guard.log).send(beta

  .addFields({
    name: `**__Kullan??c?? Bilgisi__:**`,
    value: `**\`???\` Kullan??c??: <@${user.id}> \n \`???\` Kullan??c?? ID: \`${user.id}\`**`,
    inline: true
  }, {
    name: `**__Kanal Bilgisi__:**`,
    value: `**\`???\` Kanal ??smi: \`${oldChannel.name}\` \n \`???\` Kanal ID: \`${oldChannel.id}\`**`,
    inline: true
  }, {
    name: `**__Tarih Bilgisi__:**`,
    value: `**\`???\` Saat: \`${betaSaat}\` \n \`???\` G??n/Ay/Y??l: \`${betaWile}\`**`,
    inline: false
  })
  .setDescription(`${user} __adl?? kullan??c?? taraf??ndan bir kanal g??ncellendi.__ \n\n **__Kanal?? g??ncelleneyen yetkilinin yetkisi al??nd?? ve kanal eski haline getirildi.__**`));

}; 
  module.exports.configuration = {
      name: "channelUpdate"
};