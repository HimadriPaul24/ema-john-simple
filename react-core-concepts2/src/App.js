// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      {/* <Counter></Counter>  */}
      <ExternalUsers></ExternalUsers>

    </div>
  );
}



function Counter() {
  const [count, setCount] = useState(25);
  // console.log(count,setCount);
  // const handleIncrease = ()=> console.log('Increse Clicked');
  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };
  const handleIncrease=() =>setCount(count+1);
  const handleDecrease=() =>setCount(count-1);

  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

function ExternalUsers(){
  const[users,setUsers]=useState([]);
  useEffect(()=>{
  // console.log('inside use Effect')
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  // .then(data=> console.log(data));
  .then(data=> setUsers(data));
  },[] )
  return(
    <div>
      <h3>External Users</h3>
      {
        users.map(user=> <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div className='product'>
      <h2>name:{props.name}</h2>
      <p>Email:{props.email}</p>
    </div>
  )
}

/* function Product(props){
  const productStyle={
    border:'3px solid blue',
    borderRadius: '10px'
  }
  return(
    <div className='product' style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  )
} */

export default App;

/* const products=[
    {name:'mobile',price:15000},
    {name:'camera',price:1500},
    {name:'laptop',price:45000},
    {name:'watch',price:350},
    {name:'shoe',price:500},
  ] */
/* {
      products.map(product=><Product name={product.name} price={product.price}></Product>)
      /* products.map(product=>console.log(product)) */


{/* <Product name="mobile" price="15000"></Product>
    <Product name="laptop" price="63000"></Product>
    <Product name="camera" price="5000"></Product>
    <Product name="mobile" price="15000"></Product>
    <Product name="mobile" price="15000"></Product>
    <Product name="mobile" price="15000"></Product> */} 
    /*  {/* <p>{users.length}</p>  */ 