import {Routes,Route} from 'react-router-dom'
import './App.css'

import Home from './Home'
import Callback from './Callback'
import Dashboard from './Dashboard' 

function App() {



  return (
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/callback' element = {<Callback/>} />
      <Route path='/dashboard' element = {<Dashboard/>} />
    </Routes>
  )
}

export default App
