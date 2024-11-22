import {Routes,Route} from 'react-router-dom'
import './App.css'

import Home from './Home'
import Callback from './Callback'

function App() {



  return (
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/callback' element = {<Callback/>} />
    </Routes>
  )
}

export default App
