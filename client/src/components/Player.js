import React from "react";
import {useParams} from "react-router-dom"
import Plyr from "plyr-react";
import "plyr-react/plyr.css";



function Player() {
  const params = useParams();

  const plyrProps = {
    source: {
      type: 'video',
      title: 'Example title',
      sources: [
        {
          src: `http://127.0.0.1:5000/media/video/${params.name}`,
          type: 'video/mp4',
        }]},
    options: undefined, 
    // Direct props for inner video tag (mdn.io/video)
  }

  return (

  <Plyr {...plyrProps} />
 )
}
export default Player;