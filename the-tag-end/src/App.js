import React from 'react';

import Top from './Top';
import Editor from './Editor';
import Play from './Play';
import Terminal from "./Terminal";
function App() {
  return (
      <div className={App}>
        <Top />
          <div className="fulleditor">
              <Editor />
              <Play></Play>
              <Terminal></Terminal>
          </div>


      </div>

  );
}

export default App;
