var express = require('express')
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var { Data } = require('../Database/Database.model')
require('../Database/Database.config');
var port = process.env.PORT || 3000;



app.get('/', (req, res) => {
    res.send("hie");
    
})


app.use('/data', (req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    next()
},
    function (req, res, next) {
        console.log('Request Type:', req.method)
        if(req.method === "POST"){
            console.log(req.body.username);
        }
        next()
    }
)

app.post('/data', (req, res) => {

    var user = req.body.username;
    var age = req.body.age;

    var myData = new Data({
        name: user,
        age: age
    })

    myData.save((err) => {
        if (err) {
            return res.send("Not able to save")
        }
        else return res.status(200).send("Saved " + user + " " + age);
    })



})


app.get('/data', (req, res) => {
    Data.find({}, (err, doc) => {
        if (err) {
            res.send(err);
        }
        res.send(doc);
    })
})


app.listen(port, () => {
    console.log("I am listening on "+port);
})