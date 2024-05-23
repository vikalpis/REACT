import { useState, useCallback, useEffect,useRef } from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword]  = useState("")

// useRef hook 
const passwordRef = useRef(null)

  const PasswordGenerator =  useCallback(()=>{
    let pass =" "
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "~!@#$%^&*()_+{}`="

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)


  }, [length,numberAllowed,charAllowed,setPassword])
  
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(()=>{
  PasswordGenerator()
}, [length,numberAllowed, charAllowed, PasswordGenerator])

  return (
    <>
     <div className='w-full mx-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef} />
        <button 
        onClick={ copyPasswordToClipboard}  className='hover:bg-sky-700 outline-none bg-black text-green-600 px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}}
        />
        
        <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'
      >
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{
          setNumberAllowed((prev)=>!prev);
        }} />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'
      >
        <input type="checkbox"
        defaultChecked={charAllowed}
        id='CharInput'
        onChange={()=>{
         setCharAllowed((prev)=>!prev);
        }} />
        <label htmlFor="CharInput">Characters</label>
      </div>
      </div>
     </div>
    
    </>
  )
}

export default App
