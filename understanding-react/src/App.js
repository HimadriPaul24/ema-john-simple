 
import './App.css';
import Device from './components/Device/Device';
import { useEffect, useState } from 'react';
import Books from './components/Books/Books';

function App() {
  let [steps,setSteps] = useState(0);
  const books=[
    {name:'Small Giants', author:'bo'},
    {name:'Build to sell', author:'john'},
    {name:'Grind it', author:'Ray'},
    {name:'Shoe Dog', author:'bo'},
  ]
  const handleIncreaseSteps = () => {
      const newStepsCount = steps+1; // asynchronous
      setSteps(newStepsCount);
      // console.log(steps);
      
      // steps = steps+1;  it will not work      
  } 

  useEffect(()=>{
  //  console.log('hello');
   console.log(steps);
  },[steps]);

  return (
    <div className="App">
    <h3 title="my awesome tooltip">My Steps: {steps}</h3>
    <button onClick={handleIncreaseSteps}>Walk</button>
       <Device name="phone" steps={steps} price="13500"></Device>
       {/* <Device name="phone" steps="55" price="13500"></Device> */}
       <Books books={books}></Books>
    </div>
  );
}

export default App;
