import './App.css'
import { BrowserRouter as Router,Route,Routes,Outlet} from 'react-router-dom'
import Profile from './components/Profile'
import ProfileDetails from './components/ProfileDetails'
import ProfileSettings from './components/ProfileSettings'
import Home from './components/Home'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Profile' element={
            <PrivateRoute>
              <Profile/>
            </PrivateRoute>
            }>
          <Route path='ProfileDetails/:id' element={<ProfileDetails/>}/>
          <Route path='ProfileSettings/:id' element={<ProfileSettings/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
