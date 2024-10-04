import { Routes, Route } from 'react-router-dom'
import Pagelayout from './layouts/PageLayout/PageLayout'
import HomePage from './pages/Home/HomePage'
import AuthPage from './pages/Auth/AuthPage'
import ProfilePage from './pages/Profile/ProfilePage'

function App() {
  return (
    <Pagelayout>
      <Routes>
        <Route path='/' element={ <HomePage/> }></Route>
        <Route path='/auth' element={ <AuthPage/> }></Route>
        <Route path='/:username' element={ <ProfilePage/> }></Route>
      </Routes>
    </Pagelayout>
  )
}

export default App
