const express = require('express')

const mongoose = require('mongoose');
const cors = require('cors')

// const MongoClient = require('mongodb').MongoClient;
let property = require('./models/Properties')
let Detail = require('./models/Detail')
const app = express()
 


app.use(cors())

// Connection URL
const url = 'mongodb://localhost:27017/testing_project_database';


mongoose.connect(url,{ useNewUrlParser:true, useUnifiedTopology: true})
.then(() => {
    console.log("MongoDB Connected") 
    mongoose_connection = mongoose.connection;
})
.catch(err => console.log(err));
// console.log(conn)
const dbName = 'testing_project_database';

app.get('/', function (req, res) {
    

    let some_model = new property();
    some_model.image_url = "http://clipart-library.com/images/8czKn779i.png"
    some_model.pr_name = "ABC Apartment"
    some_model.pr_desc = "at ahmedabad, gujarat"
    some_model.pr_size = "1200 sqft"
    some_model.pr_price = "90 Lacs"

    some_model.save(some_model , (error,data) => {
        if(error){
            res.send("not saved")
        }
        else{
            console.log(data)
            res.send('data saved')
        }
    })

})


app.get('/property/all', function (req, res) {
       
    property.find({} , (err,data)=>{
        if(err){
            res.send("not saved")
        }
        else{
            console.log(data)
            res.send({
                success: true,
                data: data
            })
        }
    })
        

  })


app.get('/property/all/find', function (req, res) {
       let some_query = req.query

    property.find({pr_title: some_query.title} , (err,data)=>{
        if(err){
            res.send("not saved")
        }
        else{
            console.log(data)
            res.send(data)

        }
    })
        

  })
  app.get('/details', function (req, res) {
    

    let some_detail = new Detail();
    some_detail.image_url = "http://clipart-library.com/images/8czKn779i.png"
    some_detail.pr_name = "ABC Apartment"
    some_detail.pr_desc = "at ahmedabad, gujarat"
    some_detail.pr_size = "1200 sqft"
    some_detail.pr_price = "90 Lacs"

    some_detail.save(some_detail, (error,data) => {
        if(error){
            res.send("not saved")
        }
        else{
            console.log(data)
            res.send('data saved')
        }
    })

})
 
  app.get('/details/all', function (req, res) {
    let some_new= req.query

 property.find({_id: some_new.id} , (err,data)=>{
     if(err){
         res.send("not saved")
     }
     else{
         console.log(data)
         res.send(data)

     }
 })
     

})


app.listen(5000)