var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var messages = [];

app.use(express.static('assets'))
app.use(bodyParser.json())
app.listen(3000, function(){
    console.log('listening on 3000')
   });

/* GET Functions  */

app.get('/messages', function(req,res,next){
   res.status(200).json({messages: messages});
});


/* POST Functions  */

app.post('/messages', function(req,res,next) {

   messages.push({message: req.body.message, time: new Date()});
   res.status(200).json({messages: messages});
});
