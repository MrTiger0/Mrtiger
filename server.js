const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ''

     
client.on("ready", () => {
client.user.setActivity("هەتا کەی؟ لەگەڵ هەمووان پێ ئەکەنیت و بەتەنیاش ئەگری..؟!🙂💔", {type: 'PLAYING'});
client.user.setStatus("idle");
});

client.on("ready", () => {
  var x = client.channels.get("");
  if (x) x.join();  
});

client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "profile") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 200).then(
      message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}`
          }
        ]
      })
    );
  }
});
client.on("ready", async ready => {
  var i = 0;
  var list = [
    "!",
    "TiGER",
    "TiGER๏",
    "TiGER๏x",
    "TiGER๏xS",
    "TiGER๏xST",
    "TiGER๏xSTA",
    "TiGER๏xSTAF",
    "TiGER๏xSTAFF",
 ]; 
 setInterval(() => {
   var guild = client.guilds.get("")
   var reva = guild.members.get("")
   reva.setNickname(list[i]
   );                 
   if(i + 1 === 9) {
     i = 0;
   } else { 
     i++;
    
   } 
 }, 2500); 
});  

client.on("message", message => {
  
var command = message.content
if(message.author.bot) return;

switch (command) {
  

case "a":
message.channel.send(`وێنەی ئەکاونتەکەت ئەوەیە☟: ${message.author.avatarURL}`)
break;
}
});
    
client.on("message", msg => {
if (msg.content === "<@712407561676259418>") {  
msg.reply("`💔😂تاگم مەکە کاتم نیە بۆ کەسی کاتی`");
 
}
})
  

client.login("");
      
            
    
