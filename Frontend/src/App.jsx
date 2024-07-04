import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Cards from './components/Cards.jsx'
import Signuppage from './components/Signuppage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signinpage from './components/Signinpage.jsx';
import './App.css'

function App() {
  const [status, setStatus] = useState(false);

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

    

  <Signuppage/>

  )
  
}
  
  
}

export default App
