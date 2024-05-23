import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(15)
  
  // let counter = 15
  const addValue = ()=>{
    
    if (counter == 20) {
      return 0;
    }
    else{
      counter = counter + 1;
    setcounter(counter)
    console.log("clicked", counter);
    }
    
  }
   
  const removevalue = ()=>{
    if (counter == 0) {
      return 0;
    }
    else{
       
    counter = counter -1 ;
    setcounter(counter)
    console.log("clicked",counter);
    }
   
  }
  return (
    <>
   <h1>Chai aur React</h1>
   <h2>counter value : {counter}</h2>   

   <button  onClick = {addValue}>Add value</button>
   <br />

   <button onClick={removevalue}>Remove value</button>
   
        
    </>
  )
}

export default App
