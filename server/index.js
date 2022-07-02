const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const port = 5000;
const app =express()
const user = require("./models/signUp");
// const { MONGOURI } = require('./config/keys');
const MONGOURI = "mongodb://aniket145:password@cluster0-shard-00-00.lc2tx.mongodb.net:27017,cluster0-shard-00-01.lc2tx.mongodb.net:27017,cluster0-shard-00-02.lc2tx.mongodb.net:27017/agrilinks?ssl=true&replicaSet=atlas-xtc8cl-shard-0&authSource=admin&retryWrites=true&w=majority";


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
    console.log(newUser.name);   
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
 const conn = mongoose.createConnection(MONGOURI,options);

conn.on('connected', () => {
	console.log('connected to database.....');
});
conn.on('error', (err) => {
	console.log('error in connection', err);
});

let gfs,gridfsBucket;

conn.once('open', () => {
  // Init stream  
  
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'papers',
  }); 
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('papers');


});

// Create storage engine
const storage = new GridFsStorage({
    url: MONGOURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'papers'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage });
  


  // @route POST /upload
// @desc  Uploads file to DB

app.post('/papers',upload.single('file'), (req, res) => {
    console.log(req.file  );
  });
app.get(`/getPaper/:filename`,(req,res)=>{
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }
  gridfsBucket.openDownloadStream(file._id).pipe(res);
  });
});



app.listen(port, () => console.log(`app listening on port ${port}!`));