import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import AuthPage from './pages/Auth/AuthPage'
import Pagelayout from './layouts/PageLayout/PageLayout'

function App() {
  return (
    <Pagelayout>
      <Routes>
        <Route path='/' element={ <HomePage/> }></Route>
        <Route path='/auth' element={ <AuthPage/> }></Route>
      </Routes>
    </Pagelayout>
  )
}

export default App
