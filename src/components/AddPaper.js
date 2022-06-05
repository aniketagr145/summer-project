import React from "react";
import '../App.css';

function AddPaper()
{
function openDialog() 
{
    document.getElementById('fileid').click();
}       
    return (
        <div className = "col-md-6 offset-md-3 mt-5">
           <form >
          
         
        </form>
          <form> 
          <div class="form-group">
            <label for="exampleInputName">Title</label>
            <br></br>
            <input type= "text" name="Title" class="form-control" id="exampleInputName" placeholder="Enter Title" required="required" />
            </div>

            <div class="form-group">
            <label for="exampleInputName">Description</label>
            <br></br>
            <input type= "text" name="Description" class="form-control" id="exampleInputName" placeholder="Enter Description" required="required" />
            </div>
            <div class="form-group mt-3">
            <label for="exampleInputName">Add File</label>
           <input id='fileid' type='file' hidden/>
           <br></br>
            <button onClick={openDialog} >Choose File</button>
            </div>
          <hr/>
           </form> 
            {/* <Heading />
            <InputBox />
            <AddFile /> */}
        </div>
    );
}
export default AddPaper;
