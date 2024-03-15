// const express = require('express');
// const app = express();

// app.get ('/', function (req, res) {
//     res.status(200).json({
//         message: 'Working'
//     })
// })

const app = require ('./app')
const port = process.env.PORT || 3000

app.listen (port, function(){
    console.log (`Server has been started on ${port} port`)
})