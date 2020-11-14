// const request = require('postman-request');

// const url = 'http://api.weatherstack.com/current?access_key=34ca63369a674ae70c70557c97976cae&query=cracow';

// const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/cracow.json?access_token=pk.eyJ1IjoibWFja29kYWdhbWEiLCJhIjoiY2p5MWp3OHk2MGRpczNjczd6YWZpdDhwcyJ9.A1YZn4n_RWezZtPoab0GRA&limit=1'

// request({ url, json: true }, (err,res)=>{
//     if(err){
//         console.log(`Unable to connect weatger api`)
//     }
//     else if (res.body.error){
//         console.log(response.body.error.info)

//     }else{
//         console.log(`Obiecnie w ${res.body.location.name} jest ${res.body.current.temperature} stopni celcjusza`)
//     }
// })

// request({ url: geoUrl, json: true }, (err,res)=>{
//     if(err){
//         console.log(`Unable to connect to mapbox api`)
//     }
//     else if (res.body.features.length===0){
//         console.log('Unable to connect')
//     }
//     else{
//         const latitude = res.body.features[0].center[1]
//         const longitude = res.body.features[0].center[0]
//         console.log(`latitude: ${latitude}, longitude: ${longitude}`)
//     }
   
// })


const myFunc = (callback) => {
    setTimeout(() => {
        const test = 'test 123'
        callback(test)
    }, 1000);
}

const myFunc2 = (param) => {
    console.log('param', param)
}
myFunc(myFunc2)
