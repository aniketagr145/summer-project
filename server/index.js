const express = require('express')
const mongoose = require('mongoose');
const multer = require('multer');
const port = 5000;
const app = express()
const cors = require('cors');
// const { MONGOURI } = require('./config/keys');

//------------------->Mongoose parameters<----------------------------------//

const MONGOURI = "mongodb+srv://Mack-Mohan:Black@cluster0.kphcr.mongodb.net/?retryWrites=true&w=majority";
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverSelectionTimeoutMS:  90000000,
	socketTimeoutMS: 90000000,
};




//-------------------------------->Connecting to database<---------------------//

const conn = mongoose.connect(MONGOURI,options);

const user = require("./models/signUp");
const document = require("./models/document");

app.use(express.json());
app.use(cors());
app.use('/media',express.static("media"));

//---------------------->root routes<------------------------//

app.post("/", function(req,res){
    const newUser = new user({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    console.log(newUser.name);   
    newUser.save();
    res.send(newUser);
   
});

app.get("/",(req,res)=>{
    res.send("I am on!!")});

//------------------------------>New user<------------------------//


app.post("/user",(req,res)=>{
    console.log(req.body)
user.deleteOne({email:req.body.email},function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("deleted")
}
});
});


//---------------------------------->uploaing files to database<----------------------//

const videoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'media/video/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.replace(/ /g, '_'));
  }
});

const videoUpload = multer({
  storage: videoStorage,
  limits: {
    fileSize: 1024 * 1024 * 50    // 50 MB
  }
});

app.post('/upload/video', videoUpload.single('file'), (req, res, next) => {
  res.status(200).json({
    message: 'Video upload successful'
  });
});


const pdfStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'media/pdfs/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.replace(/ /g, '_'));
  }
});

const pdfUpload = multer({
  storage: pdfStorage,
  limits: {
    fileSize: 1024 * 1024 * 50    // 50 MB
  }
});

app.post('/upload/paper', pdfUpload.single('file'), (req, res, next) => {
  res.status(200).json({
    message: 'Video upload successful'
  });
});

app.post('/upload/document',(req,res)=>{
  const {title, description, pdf, video} = req.body;
  const newDocument = new document(req.body);
  newDocument.save();
});


//--------------------------><-------------------------//

app.get("/getvideo", (req,res)=>{
  res.sendFile("/media/video/testVideo.mp4");
})









//------------------------>listening on port<----------------------//


 app.listen(port, () => console.log(`app listening on port ${port}!`));











