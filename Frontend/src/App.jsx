import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Cards from './components/Cards.jsx'
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {
  const [status, setStatus] = useState(false);

  const verify=()=>{
      console.log("check 2 ok");
      setStatus(true)
  }

if (status) {
    return (
  <>
  <Navbar/>
  <Cards/>
  </>
    )
}
else
{
  return(

<Outlet context={{verify}}/>

  )
  
}
  
  
}

export default App
