const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const port = 3000

app.get('/ping',(req,res)=>{
    res.send("pong")
})

app.use('/api',routes)
app.use(express.json(),routes)
//connecting to moongo db
const MongoUri = "mongodb+srv://abrahamjeron40:ruthabra@cluster0.1hvvwvv.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
// const MongoUri = "mongodb+srv://abrahamjeron40:abra@cluster0.tfwsibs.mongodb.net/fwd_project?retryWrites=true&w=majority&appName=Cluster0"
const connectDb = async () => {
    try {
        await mongoose.connect(MongoUri);
    } catch (err) {
        console.log(err);
    }
};
connectDb();
const checkConnection=()=>{
    const status = mongoose.connection.readyState;
    return status===1
}
app.get('/',(req,res)=>{
    if (checkConnection){
        res.send("connected")
    }else{
        res.send("not connected")
    }
})

app.listen(port,()=>{
    console.log(`server is running on ${port} `)
})