

console.log('java script clientside file is loaded')

// example 1
// javascript client side  wun on browser and to get data inside
// client side javascript we  make http rrquest from client side javascript
// we use fetch api it is not part of javascript it is browser base api which
// mean we can use it in all modern browser but it is not accessible in note js

// fetch('http://puzzle.mead.io/puzzle').then((response) => {

// response.json().then((data) => {
//     console.log(data)

// })

// })
// example 2
// fetch('http://localhost:3000/weather?address=canada').then((response) => {

//  response.json().then((data) => {
//      if(data.error){
//          console.log(data.error)

//      }
//      else{
//          console.log(data.location)
//          console.log(data)
//      }

//  })

// })


// now we select the html document with which we want to work.It will return javascript 
// representation of that element

const weatherform = document.querySelector('form')

const search = document.querySelector('input')



const msg_1 = document.querySelector("#msg_1")

const msg_2 = document.querySelector("#msg_2")



//this event occure when user submit the form

weatherform.addEventListener('submit',(e) =>{

    e.preventDefault()

    const location = search.value

    msg_1.textContent = "Loading.."


    msg_2.textContent = ''

    fetch('http://localhost:3000/weather?address='+location).then((response) => {

  response.json().then((data) => {
      if(data.error){
        msg_1.textContent = data.error

     }
     else{
       
       msg_1.textContent= data.location
         msg_2.textContent= data.forecast
      }

  })

 })

})

