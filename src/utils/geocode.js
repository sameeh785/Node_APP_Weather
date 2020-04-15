
const request = require('request')

const geocode = (address , callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2FtaTEyMjIiLCJhIjoiY2s4aGczaTByMDBlMzNsbXN5N2E2eGhoMiJ9.gKrkQLAfMiAdcKo7rgpwQw'

    request({ url , json : true } , (error , {body}) => {
    

            if(error){
             callback("unable to connect to internet",undefined)
        
            }
            else if(body.features.length === 0){
           callback("Unable to find location",undefined)
            }
            else{
        
                callback(undefined,{ 
                    longitude : body.features[0].center[0],
        
                    langitude : body.features[0].center[1],
                    location: body.features[0].place_name
               
                })
               
            }
            })
            }


            module.exports = geocode