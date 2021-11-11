import { useState } from 'react';
import './App.css';
import Popup from './components/Popup';

function App() {
const [btnpop,setbtnpopup]=useState(false)

  return (
    <div className="App">
  <main>
    <h1>React popup</h1>
    <br/>
    <button onClick={()=>{
      setbtnpopup(true)
    }}>Open popup</button>

    
  </main>
  <Popup trigger={btnpop} setTrigger={setbtnpopup}>
    <h1>My popup</h1>
  </Popup>
 
    </div>
  );
}

export default App;
