// import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
// import Person from './components/Person/Person';
// import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     {/* <Countries></Countries> */}
     <Countries></Countries>
     <Header></Header>
     

     {/* <Person></Person> */}
    </div>
  );
}
















































/* function Countries(){
  const[countries, setCountries]=useState([]);
  useEffect(()=> { 
    fetch('https://restcountries.com/v2/all')
    .then(res=>res.json())
    // .then(data=>console.log(data));
    .then(data=>setCountries(data));
  },[])
   return(
    <div>
      <h2>Travelling around the world</h2>
      <h4>Countries Available:{countries.length} </h4>
      {
        countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
   )
}

function Country(props){
  return(
    <div>
        <h2>Name: {props.name}</h2>
        <h2>Capital: {props.capital}</h2>
    </div>
  )
} */
export default App;
