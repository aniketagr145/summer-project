import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const plyrProps = {
  source: {
    type: 'video',
    title: 'Example title',
    sources: [
      {
        src: 'http://127.0.0.1:5000/media/video/testVideo.mp4',
        type: 'video/mp4',
      }]},
  options: undefined, 
  // Direct props for inner video tag (mdn.io/video)
}

function Player(props) {
  return (
  <Plyr {...plyrProps} />
 )
}
export default Player;