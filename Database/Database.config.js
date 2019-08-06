const mongoose = require('mongoose')
const fs = require('fs');
//var f = require('./rds-combined-ca-bundle.pem')
mongoose.Promise = global.Promise
//var ca = [fs.readFileSync(__dirname+'/rds-combined-ca-bundle.pem')];

const url = 'mongodb://Sample:12345678@docdb-2019-07-30-08-45-53.cluster-czognfvnmvja.us-east-1.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0'

//const url = 'mongodb://localhost:27017/TestDocument'

mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connection Successfull")
}).catch((err) => {
    console.log("Error " + err);
})


