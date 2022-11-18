import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect( () =>{
    fetch('./tools.JSON')
    .then(res=>res.json())
    .then(data=> console.log(data));
    },[])
  return (
    <div className="App">
      
      
    </div>
  );
}

export default App;
