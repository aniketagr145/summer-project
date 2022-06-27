const express = require('express')
const app =express()
const cors = require('cors');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const user = require("./models/signUp");
// const { MONGOURI } = require('./config/keys');
const MONGOURI = "mongodb://aniket145:Aniket145@cluster0-shard-00-00.lc2tx.mongodb.net:27017,cluster0-shard-00-01.lc2tx.mongodb.net:27017,cluster0-shard-00-02.lc2tx.mongodb.net:27017/agrilinks?ssl=true&replicaSet=atlas-xtc8cl-shard-0&authSource=admin&retryWrites=true&w=majority";

app.use(express.json());
app.use(cors());


const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverSelectionTimeoutMS: 9000000,
	socketTimeoutMS: 9000000,
};

app.post("/", function(req,res){
    const newUser = new user({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    newUser.save();
    res.send(newUser);
});

app.get("/",(req,res)=>{
    res.send("I am on!!")});

app.post("/user",(req,res)=>{
    console.log(req.body)
user.deleteOne({email:req.body.email},function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("deleted")
}
})
});

// app.post("/user",(req,res)=>{
//     console.log(req.body)
// user.deleteMany({_id:{$exists: true}},function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("deleted")
// }
// })
// });


mongoose.connect(MONGOURI, options);
mongoose.connection.on('connected', () => {
	console.log('connected to database.....');
});
mongoose.connection.on('error', (err) => {
	console.log('error in connection', err);
});

app.listen(port, () => console.log(`app listening on port ${port}!`));