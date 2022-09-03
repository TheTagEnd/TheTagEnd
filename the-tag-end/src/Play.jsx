import React from 'react'
import play from "./images/play.png";
import stop from "./images/stop.png";
import download from "./images/download.png";


function Play(){
    return (
        <div className="playarea">
            <button className="playbutton">
                <img className="playpng"  src={play} alt="Play" />
            </button>

            <button className="stopbutton">
                <img className="stoppng" src={stop} alt="Stop"/>
            </button>

            <button className="downloadbutton">
                <img className="download" src={download}alt="Download" />
            </button>
        </div>
               );

}
export default Play;
