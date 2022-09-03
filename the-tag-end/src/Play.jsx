import React from 'react'
function Play(){
    return (
            <div className="playarea">
                <button className="playbutton">
                    <img className="playpng" src="./images/play.png"  />
                </button>

                <button className="stopbutton">
                    <img className="stoppng" src="./images/stop.png"/>
                </button>

                <button className="downloadbutton">
                    <img className="download" src="./images/download.png" />
                </button>
            </div>
               );

}
export default Play;
