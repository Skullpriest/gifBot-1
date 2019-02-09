
const fetch = require('fetch').fetchUrl;

fetch('http://api.giphy.com/v1/gifs/search?q=funnycat&api_key=9Wl7MFx25spbL0klJEPqt3tgPa3GHUvY',(err,meta,body)=>{
    const data=JSON.parse(body)
    console.log(data.data[0].images)
})