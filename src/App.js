
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  
  const[input,setInput]=useState([])
  const[va,setVa]=useState("")
 
 
async function check(e){
    setVa(e)
    const result= await fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data)=>{
      const suggestions=data.products.filter((user)=>{
        return (
          e && user && user.title&& user.title.toLowerCase().includes(e)
        );

      });
     
      setInput(suggestions)
     
    })
  }
  

  return (
    <div className="App">
     <div className='box'>

    
      <div className='inpt'>
        <input value={va} placeholder='Search' onChange={(e)=>check(e.target.value)}></input>
        <button>Search</button>
       </div>
      <ul >
        {
        input.map((val,x)=>{
         return <li onClick={(e)=>{
         
          setVa(val.title)

        }} key={x}>{val.title}</li>

        })
      }
      </ul> 
      
      
  </div>

      
    </div>
  );
}

export default App;
