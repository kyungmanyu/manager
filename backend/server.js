const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/test', function (req, res) {
    res.json([{ id: 1, username: "daisy" }]);
  })

app.listen(3000,function(req,res){
    console.log('success')
})