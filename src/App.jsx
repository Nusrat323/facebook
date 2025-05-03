
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
