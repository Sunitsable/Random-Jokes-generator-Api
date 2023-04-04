import React,{useState,useEffect} from 'react';


function App () {
  
  const[joke,setJoke]=useState('loading');
  const newJoke=()=>{
    fetch("https://api.chucknorris.io/jokes/random")
    .then(res=>res.json())
    .then(res2=>{
        console.log(res2)
        setJoke(res2.value)
    })
  }
  useEffect(()=>{
    newJoke()
    
  },[])// [ ] is for calling it once
  return (
    <div style={{ justifyContent: 'center',border:'30px double black',marginTop:'30vh'}}>
      <h3 style={{marginLeft:'40vw',marginTop:'40px',marginRight:'40vw',fontFamily:'cursive'}}>RANDOM JOKES</h3>
      <h4 style={{marginLeft:'28vw',marginTop:'40px',fontFamily:'fantasy'}}>{joke}</h4>
      <button style={{marginLeft:'45vw',marginTop:'40px',padding:'10px 10px',borderRadius:'15px'}} onClick={()=>newJoke()}>New Joke</button>
      
    </div>
  );
}

export default App;
