import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Profile from './components/Profile'
import Home from './components/Home'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />

        {/* Protected Route */}
        <Route
          path='/Profile/*'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
