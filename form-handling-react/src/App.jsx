import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/FormikForm'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<RegistrationForm/>}/>
          <Route path='/formik' element={<FormikForm/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
