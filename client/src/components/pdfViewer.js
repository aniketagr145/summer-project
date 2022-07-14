import React from "react";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
function pdfViewer(){

const defaultLayoutPluginInstance = defaultLayoutPlugin();

return( <div
    style={{
        border: '1px solid rgba(0, 0, 0, 0.3)',
        height: '750px',
    }}
>
    <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js">
   
<Viewer
fileUrl='http://localhost:5000/media/pdfs/test1.pdf'
plugins={[defaultLayoutPluginInstance]}

/>

</Worker>
</div>
)};

export default pdfViewer;