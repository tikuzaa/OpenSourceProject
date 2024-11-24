import {Routes,Route,Router} from 'react-router-dom'
import './App.css'

import Home from './Home'
import Callback from './Callback'
import Prizes from './components/Prizes'

function App() {



  return (
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/callback' element = {<Callback/>} />
    </Routes>
  )
}

export default App
