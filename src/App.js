import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const nayoks =  ['Joshim','Salman  Sha','Alomgir'];
  const products = [
    {name:'Photoshop',price : '$99.99'},
    {name :"illustrator", price:'150$'},
    {name : "Adove XD",price: '60.99$'},
    {name:'Pdf Reader',price : '39.99$'}
  ];
  const me = {
    name : "Md Nazmul Huda Rimon",
    phone: +8801312595204,
    address: "Pagar,Bscic,Fakir Market"
  };
  var style ={
    color : "red",
    backgroundColor : "black"
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product  => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product = {pd}></Product>)
        }
        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Product product = {products[2]}></Product>
        <Product product = {products[3]}></Product>
        <Person name = "Rubel" nayika = 'Moushumi'></Person>
        <Person name =  'joshim' nayika = 'Sabana'></Person>
        <Person name = 'Bapparaz' nayika = ''></Person>
        <Person name = {nayoks[0]}></Person>
        <Person name = {nayoks[2]}></Person> 

         <h1 style = {style}>My name is {me.name}</h1>
        <h5>My address is {me.address}</h5>
        <h5>My contact no is {me.phone}</h5>
      </header>
    </div>
  );
  }
  
  function Person(props){
    const personStyle = {
      border : '5px solid yellow',
      margin : '10px'
    }
    console.log(props);
    return (<div style ={personStyle} >
       <h1>Nayok :{props.name} </h1>
       <h1>Nayika :{props.nayika} </h1>
       <h3>Hero of the year</h3>
    </div>
    ) 
  }


  function Product(props){
    const productStyle = {
      border : '1px solid gray',
      borderRadius : '5px',
      backgroundColor : 'lightgray',
      height : '200px',
      width : '200px',
      float :  'left',
    }
    const {name,price} = props.product;
    console.log(name,price);
    return(
      <div style = {productStyle}>
         <h2>{name}</h2>
         <h1>{price}</h1>
         <button>Buy Now</button>
      </div>
    );
  };
  
  function Counter(){
    const [count, setCount] = useState(0)
    const handleIncrease = () => {
      const newCount = count + 1;
      setCount(newCount);
    };
      return(
      <div>
        <h2>Count:{count}</h2>
        <button onClick = {handleIncrease}>Increase</button>
        <button onClick = {() => setCount(count-1)}>Decrease</button>
      </div>
    )
  }
  function Users(){
    const [users,setUsers] = useState([]);
    useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
      })
      return(
      <div>
        <h3>Dynamic Users : {users.length}</h3>
        <ul>
          {
            users.map(user => <li>{user.phone}</li>)
          }
        </ul>
      </div>
    )
  }

export default App;

