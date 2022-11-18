import logo from './logo.svg';
import './App.css';

function App() {
 /*  const number= 7777;
  const singer={
    name: 'Dr. Mahfuz',
    job: 'Singer'
  }
  const singer2={
    name:'Eva Rahman',
    job:'Kokil konthi gaan er pakhi'
  }
  const singerStyle = {
    backgroundColor:'red',
    color:'white'
  } */

  /* array */
   const nayoks = ['Rubel','Bapparaz','Koober','Bappi','Shuvo','Sani','Ibrahim'];

 /* array of objects */
const cinemas =[
  {nayok:'Koober',nayika:'Kopila'},
  {nayok:'Rubel',nayika:'Moushumi'},
  {nayok:'Razzak',nayika:'Shabana'},
  {nayok:'Joshim',nayika:'Suchorita'},
  {nayok:'Ibrahim',nayika:'Himadri'},
]


  return (
    <div className="App">
    {/* <a href="https://www.google.com/">google.com</a> */}

    {/* making dynamic */}

 {/*    <ul>
      <li>{nayoks[0]}</li>
      <li>{nayoks[1]}</li>
      <li>{nayoks[2]}</li>
    </ul>
 */}
     <ul>
      {
        nayoks.map(nayok => <li>{nayok}</li>)
        /* nayoks.map(nayok =>console.log(nayok)) */
        
      }
     </ul>
     {/* <Cinema nayok="J Bond" nayika="Cat W"></Cinema> */}
     {
      cinemas.map(cinema=><Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      /* cinemas.map(cinema=>console.log(cinema)) */
     }
   
 
      {/* <header className="App-header">
      <h3>Yoy yo raect </h3>
      <p>Happy happy reatc</p>
      <div className="container">
      <h3>This is inside my container</h3>
      <p>my number is :{number}</p>

      <p style={{color:'magenta',fontSize:'24px'}}>Singer:{singer.name+' ' +singer.job}</p>
      <p style={singerStyle}>Real Singer:{singer2.job}</p>
      </div>
                <Person name ={nayoks[0]} nayika="Moushumi"></Person>       
         <Person name={nayoks[1]} nayika="Chekha"></Person>       
         <Person name={nayoks[2]} nayika="Kopila"></Person>       
         <Person></Person>       
         <Person></Person>       

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <h3>I can write inside react</h3>
      </header> */}

{/*     <Friend phone="01789589" address="Noakhali"></Friend>
    <Friend phone="0167889" address="Rongpur"></Friend>
    <Friend phone="01889589" address="Jessore"></Friend>
    <Friend phone="01959589" address="Dhaka"></Friend> */}

    </div>
  );
}

// function Person(props){
//   console.log(props);
//   const person ={
//     backgroundColor: 'skyblue',
//     border: '3px solid lightsalmon',
//     borderRadius: '20px',
//     margin: '20px'
//   }
  /* return (
    <div className='person'>
      <h1>Name: Sakib Al Hasan</h1>
      <h4>Profession: Cricketer</h4>
    </div>
  ) */
/*   return (
    <div style={{backgroundColor:'skyblue',border:'3px solid lightsalmon',margin:'20px',borderRadius:'10px'}}>
      <h1>Name: Sakib Al Hasan</h1>
      <h4>Profession: Cricketer</h4>
    </div>
  ) */
  // return (
  //   <div style={person}>
  //     <h1>Name: {props.name}</h1>
  //     <h4>Hero of:{props.nayika}</h4>
  //   </div>
  // )

  function Cinema(props){
    return(
      <div className="person">
        <h2>Nayok:{props.nayok}</h2>
        <h4>Nayika:{props.nayika}</h4>

      </div>
    )
  }


/* function Friend(props){
  console.log(props)
 return(
  <div className="person">
     <h3>Phone: {props.phone}</h3>
      <h5>Address:{props.address}</h5>

  </div>
 )  
} */


export default App;


{/* <p id="title">Title </p>

<Person name ="Rubel" nayika="Moushumi"></Person>       
<Person name="BappaRaz" nayika="Chekha"></Person>       
<Person name="Koober" nayika="Kopila"></Person>       
<Person></Person>       
<Person></Person>      */}
