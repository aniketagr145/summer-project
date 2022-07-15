import React,{useState} from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import FileUploadIcon from '@mui/icons-material/UploadFileOutlined';
import Input from '@mui/material/Input';

function AddPaper()
{
    const [pdf,setPdf]= useState(null);

    const [video,setVideo]= useState(null);

    const [document,setDocument]= useState({
        title: "",
        description:"",
    });

    function documentChange(e){
        const{name, value} = e.target;
        setDocument((prev)=>{
            return({
                ...prev,
                [name]: value
            }
            )

        });
        console.log(document);

    }
    
     function handleVideoChange(e)
    {
        const files = e.target.files;
        if(files)
        {
            setVideo(files[0]);
        }
         } 

         function handlePdfChange(e)
         {
             const files = e.target.files;
             if(files)
             {
                 setPdf(files[0]);
             }
              } 

        function handleSubmit(e){

            e.preventDefault();

          console.log(pdf);
          const fdPdf = new FormData();
          fdPdf.append('file', pdf);
          axios.post('http://localhost:5000/upload/paper', fdPdf);

          console.log(video);
          const fdVideo = new FormData();
          fdVideo.append('file', video);
          axios.post('http://localhost:5000/upload/video', fdVideo);

          const data = {
            title: document.title,
            description: document.description,
            pdf: pdf.name,
            video: video.name
          }

          console.log(document);
          axios.post('http://localhost:5000/upload/document', data);
     
        }


    const formStyle  = {
        padding:"20px"
    }


    return (
        <div className = " container col-md-6 offset-md-3 mt-5">
          <form style = {formStyle} onSubmit={handleSubmit}  encType="multipart/form-data"> 
          <div className="form-group h5">
            <label htmlFor="title">Title</label>
            <br></br>
            <input
             type= "text" 
              name="title" 
              className="form-control"
               id="title"
                placeholder="Enter Title"
                 required="required" 
                    value = {document.title}
                    onChange={documentChange}
                 />
            </div>

            <div className="form-group h5">
            <label htmlFor="description">Description</label>
            <br></br>
            <textarea 
            type= "text"
             name="description" 
             className="form-control" 
             id="description" 
             rows = "5"
            placeholder="Enter Description"
            value = {document.description} 
                onChange={documentChange}
            />
            </div>
            <div className="d-flex justify-content-center">
            

            <label htmlFor="uploadVideo">
  <Input  id="uploadVideo" type="file" name = "uploadVideo" onChange = {handleVideoChange} hidden />
  <Button  style={{"marginRight":"4px"}} variant="contained" component="span"  size="large" startIcon={<FileUploadIcon />} >
    Upload Video
  </Button>
</label>


<label htmlFor="uploadPdf">
  <Input  id="uploadPdf" type="file" name = "uploadPdf" onChange = {handlePdfChange} hidden/>
  <Button variant="contained" component="span"  size="large"  style={{"marginLeft":"4px"}}  startIcon={<FileUploadIcon />}>
    Upload Pdf
  </Button>
</label>

            </div>
            <hr/>
            <div className="d-flex justify-content-center">
            <button className="btn btn-lg btn-dark  "
             type = "submit" >Submit</button>
            </div>
           </form>  
        </div>
    );
}
export default AddPaper;