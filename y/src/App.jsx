import Login from './Components/Authentication/login'
import Signup from './Components/Authentication/signup'
import Landing from './Components/Landing/landing'
import Footer from './Components/footer'
import Navbar from './Components/navbar'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      
      <Routes>

        <Route path='/landing' element={<Landing />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/footer' element={<Footer />} />\
        <Route path='/navbar' element={<Navbar />} />


      </Routes>

    </div>
  )
}

export default App
