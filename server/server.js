const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');
const cors = require('cors');

var url = "mongodb://localhost:27017";
app.use(cors());
var x = [];

app.get("/", async function(req, res){
    await MongoClient.connect(url, function(err, db){
            if(err) throw err;
            //create db
            var dbo = db.db("test");
            dbo.collection('menu').find({}).toArray(function(req, res2){
                
                x = res2; 
                res.json(x);
            });
       }); 
    
    
});

app.listen(5000);
console.log('Listening on port 5000');