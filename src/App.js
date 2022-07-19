import { useState } from 'react';
import Test from './components/Test';
import './style.scss';

function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
       <h1 className='App_header'>React Lifecycle</h1>
       <button onClick={() => setShow(show => !show)}>
        {show ? 'Gizle' : 'Göster'}
       </button>
       <br/>
       {show && <Test/>}
    </div>
  );
}

export default App;
