const path = require('path');
const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');
const cors = require('cors');
const routes = require('../src/index');

var url = "mongodb+srv://tu617team:cosc617project@test.6rxfi.mongodb.net/test";
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

app.post("/", async function(req, res){
    var totalPrice;
    req.forEach(element => {
        totalPrice += parseFloat(element.price).toFixed(2);
    });
    const orderObjInfo = {
        "order_num" : (Math.floor(Math.random() * 200) + 100).toString(), 
        "cust_ID" : "", 
        "menu_items" : req, 
        "order_start_date" : new Date(), 
        "order_start_time" : '', 
        "discount" : 0, 
        "order_total" : totalPrice, 
        "status" : "pending", 
        "special_comments" : ""
    }
    await MongoClient.connect(url, function(err, db){
        if(err) throw err;
        var dbo = db.db("test");
            dbo.collection('order').insertOne(orderObjInfo, function(err, res2){
                console.log("Order " + orderObjInfo.order_num + " submitted");
                res.send(totalPrice);
                
            });
    });
})
app.get("/checkout", async function(req, res){
    await MongoClient.connect(url, function(err, db){
            if(err) throw err;
            //create db
            var dbo = db.db("test");
            dbo.collection('order').find({}).toArray(function(req, res2){
                
                x = res2; 
                res.json(x);
            });
       }); 
    
    
});

// server code for user creation/sign-up
app.post("/signup", async function(req, res){
    
    const userObjInfo = {
        "cust_ID" : (Math.floor(Math.random() * 200) + 100).toString(), 
        "fname" : req.fname, 
        "lname" : req.lname, 
        "email" : req.email, 
        "hash_pw" : ''
    }
    await MongoClient.connect(url, function(err, db){
        if(err) throw err;
        var dbo = db.db("test");
            dbo.collection('customers').insertOne(userObjInfo, function(err, res2){
                console.log("Customer " + userObjInfo.cust_ID + " added");
               
            });
    });
})

// server code for user login
app.post("/login", async function(req, res){
    
    const userObjInfo = { 
        "email" : req.email, 
        "hash_pw" : req.hash_pw
    }
    await MongoClient.connect(url, function(err, db){
        if(err) throw err;
        var dbo = db.db("test");
            dbo.collection('customers').find({userObjInfo}).toArray(function(err, res2){
                if(res2.email == req.email && res2.hash_pw == req.hash_pw){
                    res.send(res2);
                    res.redirect("/");
                }
               
            });
    });
})

app.use(routes);
app.listen(process.env.PORT || 5000);
console.log('Listening on port 5000');



// transaction
                // const transaction = {
                //     "transaction_ID" : (Math.floor(Math.random() * 200) + 100).toString(), 
                //     "order_num" : orderObjInfo.order_num.toString(), 
                //     "start_time" : orderObjInfo.order_start_date, 
                //     "end_time" : new Date(), 
                //     "error" : 0
                // }
                // if(err) throw err;
                // dbo.collection('transaction').insertOne(transaction, function(err, res){
                //     console.log("Transaction " + transaction.transaction_ID + " confirmed");
                // })