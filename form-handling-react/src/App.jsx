import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import formikForm from './components/formikForm'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<RegistrationForm/>}/>
          <Route path='/formik' element={<formikForm/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
