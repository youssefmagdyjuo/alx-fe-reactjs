import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Profile from './components/Profile'
import Home from './components/Home'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import BlogPost from './components/BlogPost'   // 👈 استيراد المكون الجديد

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />

        {/* Protected Route */}
        <Route
          path='/profile/*'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* ✅ Route جديد للمقالات */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
