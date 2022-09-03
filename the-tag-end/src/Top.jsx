import React from 'react';



function Top(){

    return (
        <div>
        <div className="top">
            <span className="title the">The</span>
            <span className="title tag">tag</span>
            <span className="title end">end</span>
            <span className="title tech">.tech</span>
        </div>

    <div className="desc">
        Online Compiler For Python, Java and C++
    </div>

    <div className="dropdown">


        <select id="language">
            <option value="python">Python</option>
            <option value="C++">C++</option>
            <option value="java">Java</option>

        </select>
    </div>
        </div>
    );
}
export default Top;
