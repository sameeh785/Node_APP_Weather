
const request = require('request')

const forecast = (latitude , longitude  , callback) => {
    const url = 'https://api.darksky.net/forecast/36aacc3385dfd60e7eba2b0bc6a5591f/' + latitude  + ',' + longitude 
    request({ url , json : true } , (error , { body }) => {
    

            if(error){
             callback("unable to connect to internet",undefined)
        
            }
            else if(body.error){
           callback("Unable to find location",undefined)
            }
            else{
        
                callback(undefined,body.daily.data[0].summary + "It is currently " + body.currently.temperature
               )
               
            }
            })
            }


            module.exports = forecast