import React from "react";
import '../App.css';

function AddPaper()
{
function openDialog() 
{
    document.getElementById('uploadVideo').click();
}      
function openDialogPdf() 
{
    document.getElementById('uploadPdf').click();
}       
const formStyle  = {
    padding:"20px"
}
    return (
        <div className = " container col-md-6 offset-md-3 mt-5">
          <form style = {formStyle}> 
          <div className="form-group h5">
            <label htmlFor="Title">Title</label>
            <br></br>
            <input type= "text" name="Title" className="form-control" id="Title" placeholder="Enter Title" required="required" />
            </div>

            <div className="form-group h5">
            <label htmlFor="description">Description</label>
            <br></br>
            <textarea type= "text" name="Description" className="form-control" id="description" 
             rows = "5"
            placeholder="Enter Description" />
            </div>
            <div className="d-flex justify-content-center">
            <input type = "file" id = 'uploadVideo' name = "uploadVideo"  hidden/>
            <button  type = "file" className="  btn  btn-lg btn-primary " onClick={openDialog} >Upload Video</button>
            <input type = "file" id = 'uploadPdf' name = "uploadPdf"  hidden/>
            <button className="  btn btn-lg btn-primary "
             onClick={openDialogPdf} >Upload Pdf</button>
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
