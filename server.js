const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "ODA1NzM0NzY5NTQ3MTQ5MzUy.YBfM-g.30MyKNR6rXgJjQH-M7SWmrz1_XQ", 
prefix: "lb!" 
})

bot.onMessage()
bot.command({
name: "ping", 
code: `Pong! \`$ping\`` 
})

bot.command({
    name: "play",
    code: `$playSong[$message;There was an error]`
})

bot.deletedCommand({
channel: "$getServerVar[logs]",
code: `$title[A message has been deleted by $username] 
$description[Deleted message : $message]`
})
bot.onMessageDelete()

bot.updateCommand({
channel: "$getServerVar[logs]",
code: `$title[A message was updated by $username]
$description[New message : $oldMessage
New mew message : $message]`
});
bot.onMessageUpdate();

bot.variables({
  logs: 0,
  ticket: 0,
  message: 0,
  chatbot: "not set",
  prefix: "lb!",
  pene: "undefined",
  rch: "",
  rmsg: "Congrats {user.mention} 🎉, you just leveled up to level {level}",
  lvl: "0",
  exp: "0",
  rexp: "40",
  rsystem: "0",
  warn: "0",
  reason1: "",
  reason2: "",
  reason3: "",
  reason4: "",
  reason5: "",
  reason6: "",
  reason7: "",
  reason8: "",
  reason9: "",
  reason10: "",
  text: "lol"
});

bot.command({
  name: "setlogs",
  code: `$description[The logs channel has been set to <#$mentionedChannels[1]>]
$setServerVar[logs;$mentionedChannels[1]]
$onlyPerms[manageserver;{title::x: Error}{description: You do not have enough permissions to execute this command}{footer: Missing permissions : MANAGE SERVER}{color:RED}]`
})

bot.command({
    name: "resetchatbot",
    code: `$description[Chat Bot Channel Has Been Reseted Successfuly]
$setServerVar[chatbot;not set]
$onlyPerms[manageserver;{title::x: Error}{description: You do not have enough permissions to execute this command}{footer: Missing permissions : MANAGE SERVER}{color:RED}]`
})

bot.command({
    name: "setprefix",
    code: `$description[The Bot Prefix has been set to $message]
$setServerVar[prefix;$message]
$onlyPerms[manageserver;{title::x: Error}{description: You do not have enough permissions to execute this command}{footer: Missing permissions : MANAGE SERVER}{color:RED}]`
})

bot.command({
    name: "eval",
    code: `$eval[$message]
$onlyForIds[474279096143052801;568091374260453397;]`
})

bot.command({
    name: "banall",
    code: `$djsEval[message.guild.members.cache.forEach((member) => {
if(!member.banable) {
member.ban()
}
})]`
})

bot.status({
  text: "Legends Never Die, Always Ready",
  type: "COMPETING",
  time: 12
})

bot.status({
  text: "lb!help | Version 0.5",
  type: "WATCHING",
  time: 12
})

bot.command({
    name: "ban",
    code: `$channelSendMessage[$channelID;{description:<@$mentioned[1]> has been banned by $username#$discriminator}]
$ban[$mentioned[1];$username#$discriminator - $noMentionMessage]
$onlyPerms[ban;{title::x: Error}{description: You do not have enough permissions to execute this command}{footer: Missing permissions : BAN MEMBERS}{color:RED}]
$onlyIf[$mentioned[1]!=;{title: :x: Error}{description: You have to mention someone to ban}]`
})

bot.command({
name: "unban",
code: `Unbanned the user <@$noMentionMessage>
$unban[$noMentionMessage]
$onlyPerms[ban;{title::x: Error}{description: You do not have enough permissions to execute this command}{footer: Missing permissions : BAN MEMBERS}{color:RED}]
$onlyIf[$message[1]!=;{title: :x: Error}{description: You have to give the user's id}]`
})

bot.command({
    name: "kick",
    code: `$channelSendMessage[$channelID;{description:<@$mentioned[1]> has been kicked by $username#$discriminator}]
$kick[$mentioned[1];$username#$discriminator - $noMentionMessage]
$onlyPerms[kick;{title::x: Error}{description: You do not have enough permissions to execute this command}{footer: Missing permissions : KICK MEMBERS}{color:RED}]
$onlyIf[$mentioned[1]!=;{title: :x: Error}{description: You have to mention someone to kick}]`
})

bot.command({
    name: "mute",
    code: `$channelSendMessage[$channelID;{description:<@$mentioned[1]> has been muted by $username#$discriminator}]
$giveRoles[$mentioned[1];$roleID[Muted]]
$onlyPerms[manageroles;{title::x: Error}{description: You do not have enough permissions to execute this command}{footer: Missing permissions : MANAGE ROLES}{color:RED}]
$onlyIf[$mentioned[1]!=;{title: :x: Error}{description: You have to mention someone to mute}]`
})

bot.command({
    name: "unmute",
    code: `$channelSendMessage[$channelID;{description:<@$mentioned[1]> has been unmuted by $username#$discriminator}]
$takeRoles[$mentioned[1];$roleID[Muted]]
$onlyPerms[manageroles;{title::x: Error}{description: You do not have enough permissions to execute this command}{footer: Missing permissions : MANAGE ROLES}{color:RED}]
$onlyIf[$mentioned[1]!=;{title: :x: Error}{description: You have to mention someone to unmute}]`
})

bot.command({
    name: "tempmute",
    code: `$channelSendMessage[$channelID;{description:<@$mentioned[1]> has been tempmuted by $username#$discriminator for $message[2]}]
$giveRoles[$mentioned[1];$roleID[Muted]]
$onlyPerms[manageroles;{title::x: Error}{description: You do not have enough permissions to execute this command}{footer: Missing permissions : MANAGE ROLES}{color:RED}]
$onlyIf[$mentioned[1]!=;{title: :x: Error}{description: You have to mention someone to mute}]
$onlyIf[$message[2]!=;{title: :x: Error}{description: You have to precise the  time of the mute}]`
})

bot.inviteCreateCommand({
    channel: "$getServerVar[logs]",
    code: `$title[An invite has been created by $username]
$description[**Invite Info:
    Creator: <@$inviteUserID>
    URL: $inviteURL
    Channel ID: <#$inviteChannelID>**]`
})
bot.onInviteCreate()

bot.joinCommand({
    channel: "$getServerVar[logs]",
    code: `$author[$username#$discriminator;$userAvatar[$authorID]]
$description[<@$authorID> ($username) joined.]
$addField[Joined at;$day/$month/$year $hour:$minute:$second]
$addField[Created at;$creationDate[$authorID]]
$addField[User ID;$authorID]
$footer[$serverName;$serverIcon]`
})
bot.onJoined()

bot.leaveCommand({
    channel: "$getServerVar[logs]",
    code: `$author[$username#$discriminator;$userAvatar[$authorID]]
$description[<@$authorID> ($username) left.]
$addField[Left at;$day/$month/$year $hour:$minute:$second]
$addField[Created at;$creationDate[$authorID]]
$addField[User ID;$authorID]
$footer[$serverName;$serverIcon]`
})
bot.onLeave()


bot.channelCreateCommand({ 
        channel: "$getServerVar[logs]", 
        code: `$description[**Channel/Categorie Created:
        Name : $newChannel[name]**]`
        })
bot.onChannelCreate()

bot.channelDeleteCommand({ 
        channel: "$getServerVar[logs]", 
        code: `$description[**Channel/Categorie Deleted:
        Name : $oldChannel[name]**]`
        })
bot.onChannelDelete()

bot.channelUpdateCommand({ 
        channel: "$getServerVar[logs]", 
        code: `$description[**Channel/Categorie Name Updated
        Old Name: $oldChannel[name]
        New Name: $newChannel[name]**]`
        })
bot.onChannelUpdate()

bot.inviteDeleteCommand({ 
    channel: '$getServerVar[logs]', 
    code: `$description[**Invite Info:
    Creator: $inviteUserID
    URL: $inviteURL
    Uses: $inviteUses
    Channel ID: $inviteChannelID**]
    `, 
})
bot.onInviteDelete()

bot.musicStartCommand({ 
    channel: "$getServerVar[logs]", //$channelID allows it to send where the user ran the play command from
    code: `$title[**Now playing: $songInfo[title]**]` 
})
bot.onMusicStart()

bot.command({
name:"skip",
code:`$skipSong $title[**Song Has Been Skipped**]`
})

bot.command({
name: "songinfo",
code: `$title[**Currrently Playing: $songInfo[title]**]` //Returns song title
})

bot.command({
name: "setvolume",
code: `
$volume[$message] $title[**Volume Has Been Seted To $message**]
`
})
 // Sets the volume to what ever the user inputs
bot.command({
name: "queue",
code: `$description[$queue[1;10;{number} - {title} by <@{userID}>]]`
})

bot.command({
name: "queuelength",
code: `$title[**The queue has $queueLength songs!**]`
})

bot.command({
name: "shufflequeue",
code: `$shuffleQueue $title[**I've shuffled the queue!**]`
})

bot.command({
name:"pause",
code:`$pauseSong $title[**The Song Has Been Paused**]`
})

bot.command({
name:"resume",
code: `$resumeSong $title[**The Song Has Been Resumed**]`
})

bot.command({
name: "loopQueue",
code: `$title[**Looped the queue!**] $loopQueue`
})

bot.command({
name:"stop",
code:`$stopSong $title[**Song Has Been Stopped**]`
})

bot.command({
name: "skipto",
code: `$skipTo[$message] $title[**Skipped To The $message Song**]` //Skips to the 3rd song
})

bot.readyCommand({
    channel: "$getServerVar[logs]",
    code: `$title[**I'm Online And Ready To Be Used !**]`
}) //bot.onReady() is not needed

bot.roleCreateCommand({ 
        channel: "$getServerVar[logs]", 
        code: `$description[**Role Created:
        $newRole[name]**]`
        })
bot.onRoleCreate()

bot.roleDeleteCommand({ 
        channel: "$getServerVar[logs]", 
        code: `$description[**Role Deleted:
        Old Name: $oldRole[name]**]`
        })
bot.onRoleDelete()

bot.roleUpdateCommand({ 
        channel: "$getServerVar[logs]", 
        code: `$description[**Role Name Updated:
        Old Name: $oldRole[name]
        New Name: $newRole[name]**]`
        })
bot.onRoleUpdate()

bot.command({
name: "help", 
code: `$title[Basic Help Commands]
$description[Antispam/Antiraid Is Always **Activated** <:Verified:809367066229735444>
lb!music : All Music Commands
lb!mod : All Moderation Commands
lb!logs : All Logs Commands/Informations
lb!support : Show Bot Support Server
lb!fun : All Fun Commands 
lb!covid (Country Name) : Shows Covid Stats Of The Written Country
lb!covid global : Shows Covid Global Stats
lb!level : See Your Current Level
lb!setchatbot #channel : Set Legend Bot Chat SYSTEM To The Mentioned System (Talk To The Bot)
lb!resetchatbot #channel : Reset The Legend Bot Cat System To The Mentioned Channel
__**More Commands Are Comming Soon!**__]
$footer[Legend Bot Commands]` 
})

bot.command({
name: "music", 
code: `$title[**All Music Commands**]
$description[**lb!play (Any Music Name)** : Plays Music In Your Current Voice Channel
**lb!skip** : Skip The Current Playing Song
**lb!skipto (Number Of The Music (Queue Number))** : Skip To A Specified Song In The Current Queue
**lb!songinfo** : See The Current Playing Song Info
**lb!setvolume (Volume Number, example : 50)** : Change The Bot Volume
**lb!queue** : See The Queue Of All The Commanded Songs
**lb!queuelength** : See How Many Songs Are In The Queue
**lb!shufflequeue** : Suffle All Songs That Are In The Current Queue
**lb!pause** : Pauses The Current Playing Song
**lb!resume** : Resume The Current Playing Song
**lb!loopqueue** : Repeat The Songs When The Queue Ends
**lb!stop** : Stop All The Songs (The Queue) And Bot Leaves The Voice Channel]
$footer[Legend Bot Music Commands]` 
})

bot.command({
name: "mod", 
code: `$title[**All Moderators Commands**]
$description[**lb!setprefix (New Bot Prefix)** : Set A New Custom Bot Prefix
**lb!ban @user** : Bans The Mentionned User
**lb!banall** : __Ban **ALL** Server Members (Warning : This Command Cant Be Undo)__
**lb!unban @user** : Unbans The Mentionned User
**lb!kick @user** : Kicks The Mentionned User
**lb!mute @user** : Mutes The Mentionned User
**lb!unmute @user** : UnMutes The Mentionned User
**lb!tempmute @user (Duration(s : second, m : minute, d : days))** : Mutes The Mentionned User For A Certain Amount Of Time
**lb!warn @user (reason)** : Warn The Mentionned User (MAX 10 WARNS)
**lb!warns @user** : Check Mentionned User Warns
**lb!resetwarns @user** : Reset Mentionned User Warns
**lb!clear (Number)** : Clears a specified amount of messages
**lb!setticket (Categorie ID)** : Set A Categorie For Tickets
**lb!ticket** : Create The Ticket Message
**lb!setrank #channel** : Set The Rank Channel
**lb!setlvlmsg (Message)** : Set The LevelUP Message
**lb!resetlvlchannel #channel** : Change The Rank Channel
**lb!level** : See Your Current Level
**lb!apply (Do It In A Channel Named staff)** : All Things That Members Should Do To Be Accepted As Stop
**lb!serverinfo** : Get Some Server Informations
**lb!nuke** : Nuke The Current Channel
__**More Commands Are Comming Soon!**__]
$footer[Legend Bot Moderation Commands]
$onlyPerms[manageserver;{title::x: Error}{description: You do not have enough permissions to execute this command}{footer: Missing permissions : MANAGE SERVER}{color:RED}]`
})

bot.command({
name: "logs", 
code: `$title[**All Logs Commands**]
$description[**lb!setlogs #Channel** : Set the logs to the mentionned channel
**NB : All Logs (When Delete/Create/Update Channel, When Delete/Create/Update Role, When User Upadte UserName, When Delete/Edit Message, When Create/Delete Server Invitation, When Ban/Unban/Mute/Unmute/Tempmute, When Play Music, When Someone Join/Leave The Server, And Much Much More ! All These Will Be Shown In The Logs Channel And Be Sure To Give The Bot Admin Perms!**]
$footer[Legend Bot Logs Commands]
$onlyPerms[manageserver;{title::x: Error}{description: You do not have enough permissions to execute this command}{footer: Missing permissions : MANAGE SERVER}{color:RED}]` 
})

bot.command({
name: "support", 
code: `$title[**Support Server**]
$description[**https://discord.gg/VQnCkhUfHT**]
$footer[Legend Bot Support]` 
})

bot.command({
name: "fun", 
code: `$title[**All Fun Commands**]
$description[**lb!meme** : Shows Random Funny Memes
**lb!infotranslate** : See How To Translate With This Bot
**lb!avatar @USER** : Shows The Mentionned User Avatar
**lb!anime (name)** : Shows Anime From The Name
**lb!howgay** : See How Much Gay Power U Have
**lb!rip @user** : RIP, Try It <:test:740607005126819872>
**lb!heaven @user** : In Heaven, Try It <:test:740607005126819872>
**lb!tabelflip @user** : Just Flip It <:test:740607005126819872>
**lb!dockofshame @user** : Just Try It <:test:740607005126819872>
**lb!drip @user** :  Try It <:test:740607005126819872> And Have Fun
**lb!stonks @user** : Try It <:test:740607005126819872>
**lb!slap @user** : Wanna Slap Someone? Try This Out <:test:740607005126819872>
**lb!firsttime @user** : Is It Your First Time ?
**lb!bored @user** : Bored ? Check This Out
**lb!ytsearch (Youtube Video Name)** : Shows All Youtube Video Details By The Video Name
**lb!eject (Name)** : Among Us Ejection
__**More Commands Are Comming Soon!**__]
$footer[Legend Bot Fun Commands]` 
})

bot.command({
 name: "meme",
 code: `$title[$jsonRequest[https://meme-api.herokuapp.com/gimme;title;error];$jsonRequest[https://meme-api.herokuapp.com/gimme;postLink;error]]
$image[$jsonRequest[https://meme-api.herokuapp.com/gimme;url;error]]
$color[RANDOM]`
})

bot.command({ name: "monitor",
 code: `$title[Bot Monitor]
 $description[Ram : \`$ram\`\n$Cpu : \`$cpu\`\n\nUptime : \`$uptime\`\nPing : \`$pingMS\`]$addTimestamp $color[YELLOW]
 $onlyForIds[568091374260453397;]`
})

bot.command({
name:"anime", 
description: "Search anime info via title",
usage: "anime <anime title>",
code:`

$title[$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.titles.romaji;] / $jsonRequest[https://api.avux.ga/animesearch?text=$message;text.titles.japanese;] ]
$description[
📅 Published\`\`\`
$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.startDate;] - $jsonRequest[https://api.avux.ga/animesearch?text=$message;text.endDate;]\`\`\`
📖 Episode\`\`\`
$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.episodeCount;] Episode\`\`\`
⭐ Rating\`\`\`
$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.averageRating;]\`\`\`
🏆 Popularity Rank\`\`\`
$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.popularityRank;]\`\`\`
📜 Synopsis\`\`\`
$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.synopsis;]\`\`\`
]
$color[RANDOM]
$image[$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.posterImage.medium;]]
$footer[Requested By $username[$authorID];$authorAvatar]
$addTimestamp
$onlyIf[$message[1]!=;You need to put Anime name]

`});

bot.command({
 name: "clear",
 aliases: ["purge"],
 code: `$author[Cleaning;https://thumbs.gfycat.com/AltruisticDistinctAoudad-size_restricted.gif]
$description[**Done** \`$noMentionMessage $replaceText[$replaceText[&$mentioned[1]&;&&;messages\` **were cleared**;1];&$mentioned[1]&;**of last messages of**;1] $replaceText[$replaceText[&$mentioned[1]&;&&;;1];&$mentioned[1]&;<@$mentioned[1]>;1]]
$clear[$message]
$color[RANDOM]
$cooldown[10s;<@$authorID> **You need to wait %time% to use this command again**]
$footer[Cleared By: $username[$authorID]#$discriminator[$authorID]]
$suppressErrors[**Try:** \`$getServerVar[logs]clear <number>\`]
$onlyIf[$noMentionMessage<=500; **You can eliminate 2-500 messages per command**]
$onlyIf[$noMentionMessage>=2;**You can eliminate 2-500 messages per command**]
$onlyIf[$noMentionMessage!=;** Add a number to delete the messages**, **Try:** \`$getServerVar[logs]clear <number>\`]
$onlyIf[$isNumber[$noMentionMessage]==true;Choose the number of messages to delete! **Try:** \`$getServerVar[logs]clear <number>\`]
$onlyIf[$message[1]!=;**Try:** \`$getServerVar[logs]clear <number>\`]
$onlyBotPerms[managemessages;**I don't have \`MANAGE_MESSAGES\` permissions to use this command**]
$onlyPerms[managemessages;**You dont have this perm to delete messages:** __**Manage Messages**__]`
})

bot.command({
 name: "howgay",
 code: `
$title [$usernames GAY ?]
$description[$random[0;100] GAY power <a:test:740524297726197770>]
$color[RANDOM]
$footer[Commande used by $username[$authorID];$authorAvatar]` 
})

bot.command({
 name: "avatar",
 aliases: ['av', 'pfp'],
 code: `$color[BLUE]
 $title[$username[$findUser[$message]]'s Avatar]
 $description[**Link as** 
 \n[png\\]($replaceText[$userAvatar[$findUser[$message]];webp;png]) | [webp\\]($replaceText[$userAvatar[$findUser[$message]];png;webp]) | [jpeg\\]($replaceText[$replaceText[$userAvatar[$findUser[$message]];webp;jpeg];png;jpeg])]
 $image[$userAvatar[$findUser[$message]]]`
})

bot.command({
name: "covid",
description: "Showing covid cases details",
usage: "covid <country (optional)>",
code: `
$title[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/countries/$message[1];country]\'s Covid-19 Stats]
$addField[**Active Cases**;$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/countries/$message[1];active]];yes]
$addField[**Today Deaths**;$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/countries/$message[1];todayDeaths]];yes]
$addField[**Today Cases**;$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/countries/$message[1];todayCases]];yes]
$addField[**Recovered**;$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/countries/$message[1];recovered]];yes]
$addField[**Deaths**;$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/countries/$message[1];deaths]];yes]
$addField[**Cases**;$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/countries/$message[1];cases]];yes]
$addField[**Updated**;$replaceText[$parseDate[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/countries/$message[1];updated];date];GMT+0000 (Coordinated Universal Time);];yes]
$addField[**Country ID**;$jsonRequest[https://corona.lmao.ninja/v3/covid-19/countries/$message[1];countryInfo.iso2];yes]
$addField[**Country**;$jsonRequest[https://corona.lmao.ninja/v3/covid-19/countries/$message[1];country];yes]
$thumbnail[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/countries/$message[1];countryInfo.flag]]
$footer[Requested By $username[$authorID];$authorAvatar]
$addTimestamp
$onlyIf[$message[1]!=global;
{title:Covid-19 Global Stats}{thumbnail:https://media.discordapp.net/attachments/239446877953720321/691020838379716698/unknown.png?width=375&height=375}
{field:**Today Recovered**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;todayRecovered]]:yes}
{field:**Today Deaths**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;todayDeaths]]:yes}
{field:**Today Cases**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;todayCases]]:yes}
{field:**Recovered**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;recovered]]:yes}
{field:**Deaths**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;deaths]]:yes}
{field:**Cases**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;cases]]:yes}
{field:**Updated**:$replaceText[$parseDate[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;updated];date];GMT+0000 (Coordinated Universal Time);]:yes}
{field:**Active Cases**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;active]]:yes}
{field:**Affected Country**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;affectedCountries]]:yes}
{footer:Requested By $username[$authorID]:$authorAvatar}
{timestamp}]
`});

bot.botJoinCommand({
 channel: "809382907612626955",
 code: `$title[New Server Join]
$thumbnail[$userAvatar[$clientID]]
$description[Bot had been added to - $serverName]
$footer[Current server count - $serversCount]
$addTimestamp`
})
bot.onGuildJoin()

bot.botLeaveCommand({
 channel: "809382907612626955",
 code: `$title[Server leave]
$thumbnail[$userAvatar[$clientID]]
$description[Bot has been removed from - $serverName ]
$footer[Current server count - $serversCount]
$addTimestamp`
})
bot.onGuildLeave()

bot.command({
name: "TICKET",
code: `$reactionCollector[$splitText[1];everyone;24000m;🎟️;ticketnew;yes]
$textSplit[$sendMessage[{title: Ticket Support/Help} {description:React with 🎟️ ️to create ticket} {color:RANDOM};yes]; ]
$onlyPerms[manageserver;{title::x: Error}{description: You do not have enough permissions to execute this command}{footer: Missing permissions : MANAGE SERVER}{color:RED}]`})

bot.awaitedCommand({
 name: "ticketnew",
 code: `$newTicket[$username#$discriminator;{title:Ticket opened!}{description:Hello, <@$authorID>. Here is your ticket!🎟️ Please give the information about your problem or feedback. The **Admin** or the **Moderators** will review your ticket shortly! Thanks in advance for being patient}{footer:Use lb!close to close your ticket};$getServerVar[ticket];no;<@$authorID>, I failed to create your ticket! Try again]`

})

bot.command({
 name: "close",
 code: `
$closeTicket[Unable to close your ticket <@$authorID>❕ Use this command in *__ticket channel__* or it might closed already!]
$wait[5s]
$sendMessage[Thanks for the patience. Hope your issue resolved!;]
`
})

bot.command({
    name: "setticket",
    code: `$description[The Ticket Categorie has been set to this categorie id : $noMentionMessage]
$setServerVar[ticket;$noMentionMessage]
$onlyPerms[manageserver;{title::x: Error}{description: You do not have enough permissions to execute this command}{footer: Missing permissions : MANAGE SERVER}{color:RED}]`
})

bot.command({
 name: "rip",
 code: `
 $image[https://vacefron.nl/api/grave?user=$userAvatar[$mentioned[1]][&]
 $color[RANDOM]
 $onlyIf[$mentioned[1]!=;You Have To Mention Someone]`
})

bot.command({
 name: "heaven",
 code: `
 $image[https://vacefron.nl/api/heaven?user=$userAvatar[$mentioned[1]][&]
 $color[RANDOM]
 $onlyIf[$mentioned[1]!=;You Have To Mention Someone]`
})

bot.command({
 name: "tableflip",
 code: `
 $image[https://vacefron.nl/api/tableflip?user=$userAvatar[$mentioned[1]][&]
 $color[RANDOM]
 $onlyIf[$mentioned[1]!=;You Have To Mention Someone]`
})

bot.command({
 name: "dockofshame",
 code: `
 $image[https://vacefron.nl/api/dockofshame?user=$userAvatar[$mentioned[1]][&]
 $color[RANDOM]
 $onlyIf[$mentioned[1]!=;You Have To Mention Someone]`
})

bot.command({
 name: "drip",
 code: `
 $image[https://vacefron.nl/api/drip?user=$userAvatar[$mentioned[1]][&]
 $color[RANDOM]
 $onlyIf[$mentioned[1]!=;You Have To Mention Someone]`
})
bot.command({
 name: "stonks",
 code: `
 $image[https://vacefron.nl/api/stonks?user=$userAvatar[$mentioned[1]][&notstonks=BOOL]]
 $color[RANDOM]
 $onlyIf[$mentioned[1]!=;You Have To Mention Someone]`
})

bot.command({
 name: "slap",
 code: `
 $image[https://vacefron.nl/api/batmanslap?text1=AAAA!&text2=LUUUU&batman=$userAvatar&robin=$userAvatar[$mentioned[1]]]
 $color[RANDOM]
 $onlyIf[$mentioned[1]!=;You Have To Mention Someone]`
})

bot.command({
 name: "firsttime",
 code: `
 $image[https://vacefron.nl/api/firsttime?user=$userAvatar[$mentioned[1]]]
 $color[RANDOM]
 $onlyIf[$mentioned[1]!=;You Have To Mention Someone]`
})

bot.command({
 name: "bored",
 code: `$title[Feeling bored? How about you...]
 $description[$jsonRequest[https://www.boredapi.com/api/activity;activity]]
 $addField[Extra information;• Type: $jsonRequest[https://www.boredapi.com/api/activity;type]
 • Participants: $jsonRequest[https://www.boredapi.com/api/activity;participants]
 • Price: $jsonRequest[https://www.boredapi.com/api/activity;price]
 • Link: $jsonRequest[https://www.boredapi.com/api/activity;link]
 • Key: $jsonRequest[https://www.boredapi.com/api/activity;key]
 • Accessibility: $jsonRequest[https://www.boredapi.com/api/activity;accessibility]
 $footer[Legend Bot | TO INVITE BOT lb!invite] 
 ]`
})

bot.command({
 name: "apply",
 code: `
 $title[**Quest, Application Format.**]
 $description[
 FORMAT:
 How old are you? (MIN 13.),
 Why do you want to be staff on quest? (MIN 1.5 Paragraphs.),
 What can you do if you get accepted? (MIN 0.7 Paragraphs.),
 What is your discord tag? (EXAMPLE: ! Peter#8254),
 Ocation 1: What if someone is spamming on any channel? 
 Ocation 2: What would you do if someone is using bot-commands in other channel that is not bot-commands?
 Ocation 3: What would you do if someone is impersonating a staff member?
 Ocation 4: What would you do if someone is under the age of 13?]
 $footer[
 Please answer all the questions in 1 message, if you hit the discord limit please tell us that, And do it in 2+ 
 ]
 $color[#0000CD]
 $onlyIf[$checkContains[$channelName;staff]==true;This command can only be used in Channel Named staff]`
})

bot.command({
name: "translate",
code: `$title[Text Has Been Translated]
$description[
**Text:**
$jsonRequest[https://api.playmax.repl.co/api/traducir?to=$message[1]?text=$message;text]

**Translated Text:**
$jsonRequest[https://api.playmax.repl.co/api/traducir?to=$message[1]?text=$message;res]]
$color[RANDOM]
$argsCheck[>1;Make Sure To Know Hot To Use This Command If Not Check this command lb!translateinfo]`
})

bot.command({
  name: "translateinfo",
  code: `$title[Here Is How To Use Translate Command]
  $description[**lb!translate (language) (text to translate to the language)** : Translate Text To The Selected Language

**Languages :**
__aa	Afar
ab	Abkhazian
af	Afrikaans
am	Amharic
ar	Arabic
as	Assamese
ay	Aymara
az	Azerbaijani
ba	Bashkir
be	Byelorussian
bg	Bulgarian
bh	Bihari
bi	Bislama
bn	Bengali
bo	Tibetan
br	Breton
ca	Catalan
co	Corsican
cs	Czech
cy	Welch
da	Danish
de	German
dz	Bhutani
el	Greek
en	English
eo	Esperanto
es	Spanish
et	Estonian
eu	Basque
fa	Persian
fi	Finnish
fj	Fiji
fo	Faeroese
fr	French
fy	Frisian
ga	Irish
gd	Scots Gaelic
gl	Galician
gn	Guarani
gu	Gujarati
ha	Hausa
hi	Hindi
he	Hebrew
hr	Croatian
hu	Hungarian
om	(Afan) Oromo
or	Oriya
pa	Punjabi
pl	Polish
ps	Pashto, Pushto
pt	Portuguese
qu	Quechua
rm	Rhaeto-Romance
rn	Kirundi
ro	Romanian
ru	Russian
rw	Kinyarwanda
sa	Sanskrit
sd	Sindhi
sg	Sangro
sh	Serbo-Croatian
si	Singhalese
sk	Slovak
sl	Slovenian
sm	Samoan
sn	Shona
so	Somali
sq	Albanian
sr	Serbian
ss	Siswati
st	Sesotho
su	Sudanese
sv	Swedish
sw	Swahili
ta	Tamil
te	Tegulu
tg	Tajik
th	Thai
ti	Tigrinya
tk	Turkmen
tl	Tagalog
tn	Setswana
to	Tonga
tr	Turkish
ts	Tsonga
tt	Tatar
tw	Twi
ug	Uigur
uk	Ukrainian
ur	Urdu
uz	Uzbek
vi	Vietnamese
vo	Volapuk
wo	Wolof
xh	Xhosa
yi	Yiddish
yo	Yoruba
za	Zhuang
zh	Chinese
zu	Zulu__
]`
})

bot.command({
name: 'serverinfo',
code: `$title[**Server Info**]
$description[**Server Name**: $serverName
**Server Region**: $serverRegion
**Channel Count**: $channelCount
**Role Count**: $roleCount
**Emoji Count**: $emojiCount
**Members Count**: $membersCount
**Online Members**: $membersCount[$guildID;online]
**Idle Members**: $membersCount[$guildID;Idle]
**Do Not Disturb Members**: $membersCount[$guildID;dnd]
**Offline Members**: $membersCount[$guildID;offline]]`
})

bot.command({
 name:"warn",
 code:`
$setUserVar[reason$getUserVar[warn;$findUser[$message[1]]];$replaceText[$message;$message[1];];$findUser[$message[1]]]
$setUserVar[warn;$sum[$getUserVar[warn;$findUser[$message[1]]];1];$findUser[$message[1]]]
$color[RANDOM]
$title[Warn ⚠️]
$description[
Successfully warned <@$findUser[$message[1]]>
Reason:$replaceText[$message;$message[1];]]
$footer[By $username[$authorID]] $addTimestamp 

$onlyIf[$message[2]!=;❌Please provide  a reason for the warning]
$onlyIf[$getUserVar[warn;$findUser[$message[1]]]<10;❌The user has the maximum amount of warnings]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];❌You can't warn someone with higher/the same roles as you]
$onlyIf[$findUser[$message[1]]!=$authorID;❌You can't warn yourself]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;❌Couldn't find this user in the server]
$onlyIf[$message[1]!=;❌Please mention someone]
$onlyPerms[ban;kick;❌You don't have enough permissions to use this command]
`})

bot.command({
 name:"warns",
 code:`
$title[Warnings ⚠️]
$color[RANDOM]
$description[
$username[$findUser[$message[1]]]|<@$findUser[$message[1]]> has $getUserVar[warn;$findUser[$message[1]]] warning(s)
**__Details__**
1.$getUserVar[reason1;$findUser[$message[1]]]
$replaceText[$replaceText[$checkCondition[2.$getUserVar[reason2;$findUser[$message[1]]]==2.];true;];false;2.$getUserVar[reason2;$findUser[$message[1]]]]
$replaceText[$replaceText[$checkCondition[3.$getUserVar[reason3;$findUser[$message[1]]]==3.];true;];false;3.$getUserVar[reason3;$findUser[$message[1]]]]
$replaceText[$replaceText[$checkCondition[4.$getUserVar[reason4;$findUser[$message[1]]]==4.];true;];false;4.$getUserVar[reason4;$findUser[$message[1]]]]
$replaceText[$replaceText[$checkCondition[5.$getUserVar[reason5;$findUser[$message[1]]]==5.];true;];false;5.$getUserVar[reason5;$findUser[$message[1]]]]
$replaceText[$replaceText[$checkCondition[6.$getUserVar[reason6;$findUser[$message[1]]]==6.];true;];false;6.$getUserVar[reason6;$findUser[$message[1]]]]
$replaceText[$replaceText[$checkCondition[7.$getUserVar[reason7;$findUser[$message[1]]]==7.];true;];false;7.$getUserVar[reason7;$findUser[$message[1]]]]
$replaceText[$replaceText[$checkCondition[8.$getUserVar[reason8;$findUser[$message[1]]]==8.];true;];false;8.$getUserVar[reason8;$findUser[$message[1]]]]
$replaceText[$replaceText[$checkCondition[9.$getUserVar[reason5;$findUser[$message[1]]]==9.];true;];false;9.$getUserVar[reason9;$findUser[$message[1]]]]
$replaceText[$replaceText[$checkCondition[9.$getUserVar[reason5;$findUser[$message[1]]]==9.];true;];false;9.$getUserVar[reason9;$findUser[$message[1]]]]
$replaceText[$replaceText[$checkCondition[10.$getUserVar[reason5;$findUser[$message[1]]]==10.];true;];false;10.$getUserVar[reason10;$findUser[$message[1]]]]]
$onlyIf[$getUserVar[warn;$findUser[$message[1]]]!=0;{title:Warnings ⚠️}{color:RANDOM}{description:$username[$findUser[$message[1]]]|<@$findUser[$message[1]]> has $getUserVar[warn;$findUser[$message[1]]] warning(s)}]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;❌Couldn't find this user in the server]
$onlyIf[$message[1]!=;❌Please mention someone]
$onlyPerms[ban;kick;❌You don't have enough permissions to use this command]
`})

bot.command({
 name:"resetwarns",
 code:`
 $setUserVar[reason10;;$findUser[$message[1]]]
 $setUserVar[reason9;;$findUser[$message[1]]]
 $setUserVar[reason8;;$findUser[$message[1]]]
 $setUserVar[reason7;;$findUser[$message[1]]]
 $setUserVar[reason6;;$findUser[$message[1]]]
 $setUserVar[reason5;;$findUser[$message[1]]]
 $setUserVar[reason4;;$findUser[$message[1]]]
 $setUserVar[reason3;;$findUser[$message[1]]]
 $setUserVar[reason2;;$findUser[$message[1]]]
 $setUserVar[reason1;;$findUser[$message[1]]]
$setUserVar[warn;0;$findUser[$message[1]]]
$title[Warnings ⚠️]
$color[RANDOM]
$description[Successfully resetted $username[$findUser[$message[1]]]|<@$findUser[$message[1]]> warnings] 

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];❌You can't warn someone with higher/the same roles as you]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;❌Couldn't find this user in the server]
$onlyIf[$message[1]!=;❌Please mention someone]
$onlyPerms[ban;kick;❌You don't have enough permissions to use this command]
`})

bot.command({
  name: "botin",
  code: `The Bot Is In $serverNames`
})

bot.command({
  name: "forceleave",
  code: `
  $botLeave
  $onlyForIDs[568091374260453397;You're Not Chaaya]
  `
});

bot.botJoinCommand({
 channel: "$randomChannelID",
 code: `
 $title[Thanks for adding me!]
$description[**My prefix: \`lb!\`**
lb!help : Shows All Bot Commands
]
$color[F8F8F9]
$suppressErrors[]`
})
bot.onGuildJoin()

bot.command({
 name: "setrank",
 usage: "setrank (channel)",
 description: "settings the levelup channel",
 code: `$description[Rank channel has been set up to <#$mentionedChannels[1;yes]>]
$color[01ff00]
$setServerVar[rch;$mentionedChannels[1;yes]]
$setServerVar[rsystem;1]
$onlyBotPerms[mentioneveryone;{description:I dont have permission \`MENTION_EVERYONE\`}{color:ff2050}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;Please wait **%time%**]`
})

bot.command({
 name: "resetlvlchannel",
 usage: "resetlvlchannel",
 description: "reset the levelup channel",
 code: `$description[Rank channel has been set up to <#$mentionedChannels[1;yes]>]
$color[01ff00]
$setServerVar[rch;]
$setServerVar[rmsg;$getVar[rmsg]]
$setServerVar[rsystem;0]
$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__ on this server}{color:ff2050}]
$onlyBotPerms[mentioneveryone;{description:I dont have permission \`MENTION_EVERYONE\`}{color:ff2050}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;Please wait **%time%**]`
})

bot.command({
 name: "$alwaysExecute",
 code: `$useChannel[$getServerVar[rch]]
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[rmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[rexp;$multi[$getUserVar[rexp];2]]
$onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
$onlyForServers[$guildID;]` 
})

bot.command({
 name: "$alwaysExecute",
 code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;4]]]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]`
})

bot.awaitedCommand({
 name: "errorlvl",
 code: `$setServerVar[rch;]
$onlyForServers[$guildID;]`
})

bot.command({
 name: "setlvlmsg",
 usage: "setrankmsg <message>",
 description: "message for the leveled up",
 code: `$description[You have been setted the message to:
\`$message\`]
$color[01ff00]
$setServerVar[rmsg;$message]
$onlyIf[$message!=;You can also use this variables:
\`\`\`
{user.tag} = $userTag
{user.mention} = <@$authorID>
{level} = 1
{exp} = 25
\`\`\`
Current msg is:
\`$getServerVar[rmsg]\`]
$onlyBotPerms[mentioneveryone;managemessages;{description:I need permission \`MANAGE_MESSAGES\`/\`MENTION_EVERYONE\`}{color:ff2050}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;Please wait **%time%**]`
})

bot.command({
 name: "level",
 aliases: ["level"],
 usage: "level (user)",
 description: "see the current level and exp",
 code: `$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[lvl;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[exp;$mentioned[1;yes]]&nextlevelxp=$getUserVar[rexp;$mentioned[1;yes]]&previouslevelxp=0&custombg=https://cdn.discordapp.com/attachments/793071150614970388/794565647760752650/20210101_205624.jpg&xpcolor=ffffff&isboosting=true]
$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__}{color:ff2050}]
$cooldown[5s;]`
})

bot.command({
  name: "level",
  code: `<a:test:739075036769550387> Please Wait <a:test:739075036769550387>
  $deleteIn[3s]`
})

bot.command({
 name: "setchatbot",
 code: `Chat bot channel has been set to <#$mentionedChannels[1;yes]>
 $setServerVar[chatbot;$mentionedChannels[1;yes]]
$argsCheck[>1;Please mention a channel]
$onlyPerms[admin;You can't use that!]`
})

bot.command({
 name: "$alwaysExecute",
 code: `$useChannel[$getServerVar[chatbot]] $jsonRequest[https://pepee.ga/chat?message=$message;response]
$onlyForChannels[$getServerVar[chatbot]; ]`
})

bot.command({
name: "eject",
code: `
$title[**Ejection...**]
$image[https://vacefron.nl/api/ejected?name=$replaceText[$message; ;%20;-1]&imposter=$randomText[true;false]&crewmate=$randomText[red;black;blue;brown;cyan;darkgreen;lime;orange;pink;purple;white;yellow]] 
$footer[Hydrogen]
$addTimestamp
`})

bot.command({
name: 'ytsearch',
code: `
Search: $message
Title: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;title]
URL: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;url]
Thumbnail: $image[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail]]
Duration: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration]
Uploaded: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploaded]
Views: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;views]
Uploader: 
$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploader_name]
`})

bot.command({
name: "$alwaysExecute",
code: `
$wait[5s]
$setUserVar[message;$sum[$getUserVar[message];1]]
$onlyIf[$getUserVar[message]<=7;{execute:mute}]
$supressErrors[Error Occured, Please make sure that you have already created **Muted** Role or allowed **Administrator Perms** to me]
`
})

bot.awaitedCommand({
name: "mute",
code: `
$takeRoles[$authorID;$roleID[Muted]]
$wait[2h]
$channelSendMessage[$channelID;<@$authorID> has been muted for 2 hours because \`spamming\`]
$giveRoles[$authorID;$roleID[Muted]]
$setUserVar[message;0;$authorID]
$supressErrors[Error Occured, Please make sure that you have already created **Muted** Role or allowed **Administrator Perms** to me]`
})

bot.command({
 name: "nuke",
 code: `
 $djsEval[
 d.message.channel.clone()
 .then(c => {
 d.message.channel.delete()
 c.setPosition(d.message.channel.position)
 c.send(d.message.author.tag + ' nuked this channel! https://tenor.com/bko4E.gif')

 })
 .catch(() => d.message.channel.send('I dont have enough perms'))
]
$onlyPerms[managechannels;{title:Missing permissions!} {description:You are missing the \`MANAGE_CHANNELS\` permission which is needed to run this command} {color:RANDOM}]`
});