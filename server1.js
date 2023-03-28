//create express application
let exp=require("express")
//const { request } = require("http")
//const Userapp = require("./Api/userapi")
let app=exp()
const cors = require("cors")
app.use(cors())
//assign a port number

//gte mongoclient
const mclient=require('mongodb').MongoClient
//connect to Db server using mongoclient
mclient.connect('mongodb://127.0.0.1:27017')
.then((dbref)=>{
    //connect to db
    const dbobj=dbref.db('vnr')
    //connect to db collection
    const usercollectionobj=dbobj.collection("vnrcollections")
    const resoursecollectionobj=dbobj.collection("newcollections")
    //share collection api's
    app.set("usercollectionobj",usercollectionobj)
    app.set("resoursecollectionobj",resoursecollectionobj)
    console.log("Db connection succes")

})
.catch((err)=>console.log("database connection error",err))

// create API requests
//import from users
const Userapp=require('./APIS/usersapi')
//import from resourse from api

const { request, response } = require("express")

// if the url starts with user-spi execute userapi
app.use('/user-api',Userapp)
//if the srl starts with product api execute resourse api
const errorhandlingmiddleware=(error,request,response,next)=>{
    response.send({message:error.message})
}

app.use(errorhandlingmiddleware)

const invalidpathmiddleware=(request,response,nest)=>{
    response.send({message:"Invalid path"})
}

app.use('*',invalidpathmiddleware)

app.listen(4000,()=>console.log("server listening in port number 4000..."))
