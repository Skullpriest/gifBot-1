
const Discord = require('discord.js')
const fetch = require('fetch').fetchUrl;

const token = 'NTQzNjEyNDUwNDM2NTQ2NTYw.Dz_GRQ.VBwaMqoWl1LyhFrQvfVq-sMlUQw'

const client = new Discord.Client()

client.on('ready',()=>{
    console.log(`Connected as ${client.user.tag}`)
})
client.on('message',msg=>{
    if(msg.content.startsWith("!")){
        processCommand(msg)
    }
})

function processCommand(msg){
    const fullCommand = msg.content.substr(1)
    const splitCommand = fullCommand.split(' ')
    const args = splitCommand.splice(1)
    
    if(splitCommand[0]=='gif'){
        gifCommand(args,msg)
    }
}

function gifCommand(args,msg){
    if(args.length==0) return msg.channel.send('Try !gif [option]')
    else{
        let str=''
        args.forEach(val=>{
            str = str + val +'+'
        })
        fetch('http://api.giphy.com/v1/gifs/search?q='+str+'&api_key=9Wl7MFx25spbL0klJEPqt3tgPa3GHUvY',(err,meta,body)=>{
            const gifData=JSON.parse(body)
            const gifUrl = gifData.data[0].images.original_still.url
            const attachment = new Discord.Attachment(gifUrl)
            msg.channel.send(gifUrl)
        })
        
    }
}

client.login(token)
