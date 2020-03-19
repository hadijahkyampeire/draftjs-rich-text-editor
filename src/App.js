import React from 'react';
import { MyEditor } from './components/myEditor';
import './App.css'
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function App() {
  return (
    <div className="app">
      <MyEditor />
    </div>
  );
}

export default App;
