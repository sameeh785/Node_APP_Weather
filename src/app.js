



const geocode1 = require('./utils/geocode')

 const forecast = require('./utils/forecast')

//express is used to create web server for node js application.
//express is basically a single function and we call it to create a express application
const path = require ('path')
const hbs = require('hbs')
const express = require ('express')

const app = express()
 // path is mode module used for  string path manipulation
const pathtopublic = path.join(__dirname,'../public')
const partialpath = path.join(__dirname,'../template/partial')
//app.use is used to cumtomized our server we will learn about it later
app.set('view engine','hbs')
app.set('views', path.join(__dirname, '../template/views'))
hbs.registerPartials(partialpath)
app.use(express.static(pathtopublic))
// req argument  is an object that containing info about incoming request to server
// res argument contain bunch of  methods  allow us to customize what we will send back to requester
// app.get('', (req , res ) => {
//     res.send('<h1>HYYY</h1>')
// })

// app.get('/help', (req , res ) => {
//     res.send([{
//         name : "sara"
//     }, {
//         name: 'sami'
//     }])
// })
// app.get('/about', (req , res ) => {
// res.send('<h1>ABOUT</h1>')  
// })
app.get('' , (req ,res ) => {
    res.render('index', {
        tittle : ' Weather',
        name : 'sami'
    })
    
})



app.get('/about' , (req ,res ) => {
    res.render('about',{
        tittle : ' About Me',
        name : 'sami'
    
    
})
})



app.get('/help' , (req ,res ) => {
    res.render('help',{
        tittle: "help",
        name : 'This is help msg'
    
})
})




app.get("/help/*", (req,res) => {
    res.render('404', {
        tittle:  '404',
        errormsg: "Help article not found",
        name : 'sami'
      
    })
})





app.get('/weather', (req , res ) => {
    
    if(!req.query.address){
        return res.send({
            error : 'you must provide address'
        })

    }





    geocode1(req.query.address, (error,{langitude , longitude , location} = {}) => {


        if(error){
        return  res.send({
              error
          })
        }
      
    
        forecast( langitude, longitude,(error, forecaste1) => {
            if(error){
              return  res.send({
                    error
                })
              }   
        
           res.send({
               forecast : forecaste1,
               location,
               address : req.query.address
           })
        }
      
      
      )
      
    })
    
    











    }  )
    
    





    
 




// In product route we will learn about query string
//Query String is usd to passed information to server through the url
//For example localhost:3000/product?search=games.In this case seach=game is key value pairs
//that we called querystring we acccess it through req.query that is of oject type.
//Query string provide at the end of url
   app.get('/product', (req , res ) => {

        if(!req.query.search){
            return res.send({
                error : 'you must provide product name'
            })

        }

        console.log(req.query)
        res.send(
            {
                product : []
            }
        )
  
   })







// setup 404 page for our express server
app.get("*", (req,res) => {
    res.render('404', {
        tittle:  '404',
        name : 'sami',
        errormsg: "Page not found"
    })
})

app.listen(3000, () => {
    console.log("SERVER IS up")

})